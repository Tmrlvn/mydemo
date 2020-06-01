import React from "react";
import '../../ResearchList/ResearchList.css'

class StepThree extends React.Component{

    state = {
        values: {}
    }

    handleCheckboxChange = e => {
        const { values } = this.state;
        values[e.target.value] = e.target.checked;

        this.setState({
            values
        });

        this.props.onChangeHandler(values)
    }

    render() {
        const { stepThreeData } = this.props;

        return (
            <React.Fragment>
                <h1>Какие характеристики требуется проверить?</h1>
                <div className='researchItems' style={{'flexDirection': 'column'}}>
                    {stepThreeData.map((data, index) => data && (
                            <React.Fragment key={index}>
                                <div className='name'>{data.stepOneName}</div>
                                <div className='spec'>{data.name}</div>
                                <div className='d-flex'>
                                    {data.characteristics.map((spec, index) => spec && (
                                        <div key={index} className='researchItem'>
                                            <input type="checkbox" id={spec.id} onChange={this.handleCheckboxChange} value={spec.id} />
                                            <label htmlFor={spec.id}>{spec.name}</label>
                                        </div>
                                        
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default StepThree

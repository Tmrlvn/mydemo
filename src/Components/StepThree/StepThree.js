import React, { Fragment } from "react";
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
                    {Object.keys(stepThreeData).map((key, index) => key && (
                            <React.Fragment key={index}>
                                <div className='name'>{key}</div>
                                
                                {stepThreeData[key].map((spec, index) => spec && (
                                    <Fragment key={index}>
                                        <div className='spec'>{spec.name}</div>
                                        <div className='d-flex'>
                                        {spec.characteristics.map((char, index) => char && (
                                            <div key={index} className='researchItem'>
                                                <input type="checkbox" id={char.id} onChange={this.handleCheckboxChange} value={char.id} />
                                                <label htmlFor={char.id}>{char.name}</label>
                                            </div>
                                            
                                        ))}
                                    </div>
                                    </Fragment>
                                ))}
                                
                            </React.Fragment>
                        )
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default StepThree

import React from "react";
import '../../ResearchList/ResearchList.css'

class StepOne extends React.Component{
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
        const { results } = this.props;

        return (
            <React.Fragment>
                <h1>Что вы желаете протестировать?</h1>
                <div className='researchItems'>
                    {results.map((data, index) => {
                        return (
                            <div key={index} className='researchItem'>
                                <input type="checkbox" id={data.id} onChange={this.handleCheckboxChange} value={data.id} />
                                <label htmlFor={data.id}>{data.name}</label>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}
export default StepOne

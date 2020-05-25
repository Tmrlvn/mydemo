import React from "react";
import classes from '../../ResearchList/ResearchList.module.css'

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
        const { results, checkboxChange } = this.props;
        const { values } = this.state;

        return (
            <React.Fragment>
                {results.map((data, index) => {
                    return (
                        <div key={index} className={classes.researchItem}>
                            <input type="checkbox" id={data.id} onChange={this.handleCheckboxChange} value={data.id} />
                            <label htmlFor={data.id}>{data.name}</label>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}
export default StepOne

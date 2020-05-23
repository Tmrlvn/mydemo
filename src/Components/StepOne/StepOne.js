import React from "react";
import classes from '../../ResearchList/ResearchList.module.css'

const StepOne = props => (
    <React.Fragment>
        {props.results.map((data, index) => {
            console.log("data on 1", data)
            return (
                <div key={index} className={classes.researchItem}>
                    <input type="checkbox" id={data.id} onChange={props.onCheckboxChange} value={data.id} />
                    <label htmlFor={data.id}>{data.name}</label>
                </div>
            )
        })}
    </React.Fragment>
)
export default StepOne

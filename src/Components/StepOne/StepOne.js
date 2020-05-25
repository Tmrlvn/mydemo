import React from "react";
import classes from '../../ResearchList/ResearchList.module.css'

const StepOne = props => (
    <React.Fragment>
        {props.results.map((data, index) => {
            return (
                <div key={index} className={classes.researchItem}>
                    <input type="checkbox" id={data.id} onChange={props.checkboxChange} value={data.id} checked={props.isChecked} />
                    <label htmlFor={data.id}>{data.name}</label>
                </div>
            )
        })}
    </React.Fragment>
)
export default StepOne

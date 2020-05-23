import React from "react";

const StepTwo = props => (
    <React.Fragment>
        <h1>Step Two</h1>
        {props.results.map((data, index) => {
            return (
                <div key={index}>
                    <input type="checkbox" id={data.id} onChange={props.onCheckboxChange} value={data.id} />
                    <label htmlFor={data.id}>{data.name}</label>
                </div>
            )
        })}
    </React.Fragment>
)
export default StepTwo

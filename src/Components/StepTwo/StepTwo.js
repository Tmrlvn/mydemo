import React from "react";

const StepTwo = props => (
    <React.Fragment>
        <h1>Step Two</h1>
        {props.stepTwoData.map((data, index) =>(
                <div key={index}>
                    <div>1st step name: {data.nam}</div>
                    {
                        data.specifications.map((spec, index) => (
                            <React.Fragment key={index}>
                                <input type="checkbox" id={spec.name} onChange={props.onCheckboxChange} value={spec.name} />
                                <label htmlFor={spec.name}>{spec.name}</label>
                            </React.Fragment>
                        ))
                    }
                    
                </div>
            )
        )}
    </React.Fragment>
)
export default StepTwo

import React, {Fragment} from "react";
import '../../ResearchList/ResearchList.css'

class StepFour extends React.Component{
    render() {
        const { stepFourData } = this.props;

        const sum = Object.keys(stepFourData).map((key) => key && (
            stepFourData[key].map((spec) => spec && spec).reduce(
                (a, b) => a + b.price,
                 0
            )
        ));
        console.log('sum', sum)

        return (
            <React.Fragment>
                <h1>Общая стоимость услуг</h1>
                <React.Fragment>
                    {Object.keys(stepFourData).map((key, index) => key && (
                            <div key={index}  className='researchItems flex-column'>
                                <div className='spec'>{key}</div>
                                {stepFourData[key].map((spec, index) => spec && (
                                    <Fragment key={index}>
                                        <div>{spec.name}</div>
                                        <div className='spec'>{spec.price}</div>
                                    </Fragment>
                                ))}
                                {<div>Стоимость экпертизы: {sum[index]} тг</div>}
                            </div>
                        )
                    )}
                </React.Fragment>
            </React.Fragment>
        )
    }
}

export default StepFour

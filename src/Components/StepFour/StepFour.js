import React from "react";
import '../../ResearchList/ResearchList.css'

class StepFour extends React.Component{
    render() {
        const { stepFourData } = this.props;

        return (
            <React.Fragment>
                <h1>Общая стоимость услуг</h1>
                    {stepFourData.map((data, index) => data && (
                            <div key={index} className='researchItems' style={{'flexDirection': 'column'}}>
                                <div className='name'>{data.stepOneName}</div>
                                <div className='spec'>{data.name}</div>
                                <div>{data.chars.name}</div>
                            </div>
                        )
                    )}
            </React.Fragment>
        )
    }
}

export default StepFour

import React from "react";
import classes from '../../ResearchList/ResearchList.module.css'

class StepThree extends React.Component{
    render() {
        const { stepTwoData } = this.props;

        return (
            <React.Fragment>
                <h1>Какие характеристики требуется проверить?</h1>
                <div className={classes.researchItems} style={{'flexDirection': 'column'}}>
                    {stepTwoData.map((data, index) => data && (
                            <React.Fragment key={index}>
                                <div>1st step name: {data.name}</div>
                                    {data.specifications.map((spec, index) => spec && (
                                        <React.Fragment key={index}>
                                            <div>2nd step name: {spec.name}</div>
                                            <div className={classes['d-flex']}>
                                                {
                                                    spec.characteristics.map((char, index) => (
                                                        <div key={index} className={classes.researchItem}>
                                                            <input type="checkbox" onChange={this.handleCheckChange} value={char} />
                                                            <label>{char}</label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </React.Fragment>
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

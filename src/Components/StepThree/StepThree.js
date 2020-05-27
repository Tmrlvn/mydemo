import React from "react";
import classes from '../../ResearchList/ResearchList.module.css'

class StepThree extends React.Component{
    render() {
        const { stepThreeData } = this.props;

        return (
            <React.Fragment>
                <h1>Какие характеристики требуется проверить?</h1>
                <div className={classes.researchItems} style={{'flexDirection': 'column'}}>
                    {stepThreeData.map((data, index) => data && (
                            <React.Fragment key={index}>
                                <div>1st step name: {data.name}</div>
                                    {data.characteristics.map((spec, index) => spec && (
                                        
                                        <div key={index} className={classes.researchItem}>
                                            <input type="checkbox" onChange={this.handleCheckChange} value={spec} />
                                            <label>{spec}</label>
                                        </div>
                                        
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

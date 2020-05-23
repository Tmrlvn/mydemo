import React from 'react'
import classes from './ResearchList.module.css'
import ResearchData from '../Data/researchList'
import StepOne from "../Components/StepOne/StepOne";
import StepTwo from "../Components/StepTwo/StepTwo";
import StepThree from "../Components/StepThree/StepThree";

class ResearchList extends React.Component{
    state = {
        activeStep: 1,
        results: ResearchData,
        title: 'Что вы желаете протестировать?',
        stepOneValues: []
    }

    handleSubmit = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    onChangeHandler = (id) => {
        this.setState({
            stepOneValues: [...this.state.stepOneValues, id.target.value]
        })

    }

    render() {
        const { stepOneValues, activeStep, results } = this.state;
        const stepTwoData = stepOneValues.map(val => ResearchData.find( ({ id }) => id == val ))
        console.log("stepTwoData", stepTwoData)
        return (
            <div className={classes.ResearchList}>
                <div className={classes.researchItems}>
                    {activeStep === 1 &&
                        <StepOne
                            name={results[activeStep].name}
                            id={results[activeStep].id}
                            results={results}
                            onCheckboxChange={this.onChangeHandler}
                        />}
                    {activeStep === 2 && stepTwoData.length > 0 && <StepTwo stepTwoData={stepTwoData}/>}
                    {activeStep === 3 && <StepThree/>}
                </div>

                <button onClick={this.handleSubmit}>Дальше</button>
            </div>
        )
    }

}
export default ResearchList

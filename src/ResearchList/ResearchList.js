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
        stepOneValues: {},
        stepTwoValues: {},
        values: {}
    }

    handleBackSubmit = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
            values: {}
        })
    }
    handleSubmit = () => {
        if (this.state.activeStep === 4) {
            return
        }
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    }

    handleStepOneChange = values => {
        this.setState({
            stepOneValues: values
        })
    }

    handleStepTwoChange = values => {
        this.setState({
            stepTwoValues: values
        })
    }


    render() {
        const { stepOneValues, stepTwoValues, activeStep, results } = this.state;
        const stepTwoData = ResearchData.map( data => {
            if(stepOneValues[data.id]){
                return data;
            }
            return null
        })

        let stepThreeData = [];
        stepTwoData && stepTwoData.map( data => {
            return data ? data.specifications.map(spec => {
                if(spec && stepTwoValues[spec.id]){
                    stepThreeData.push(spec);
                }
                return null
            }) : null
            
        })

        return (
            <div className={classes.ResearchList}>
                    {activeStep === 1 &&
                        <StepOne
                            results={results}
                            onChangeHandler={this.handleStepOneChange}
                        />}
                    {activeStep === 2 && stepTwoData.length > 0 &&
                        <StepTwo
                            stepTwoData={stepTwoData}
                            onChangeHandler={this.handleStepTwoChange}
                        />}
                    {activeStep === 3 && stepTwoData.length > 0 &&
                        <StepThree
                            stepThreeData={stepThreeData}
                        />}

                {this.state.activeStep > 1 ? <button onClick={this.handleBackSubmit}>Назад</button> : null}
                <button onClick={this.handleSubmit}>Дальше</button>
            </div>
        )
    }

}
export default ResearchList

import React from 'react'
import './ResearchList.css'
import ResearchData from '../Data/researchList'
import StepOne from "../Components/StepOne/StepOne";
import StepTwo from "../Components/StepTwo/StepTwo";
import StepThree from "../Components/StepThree/StepThree";
import StepFour from "../Components/StepFour/StepFour";

class ResearchList extends React.Component{
    state = {
        activeStep: 1,
        results: ResearchData,
        stepOneValues: {},
        stepTwoValues: {},
        stepThreeValues: {},
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
        console.log('value1', this.state.stepOneValues)
    }

    handleStepTwoChange = values => {
        this.setState({
            stepTwoValues: values
        })
        console.log('value2', values)
    }

    handleStepThreeChange = values => {
        this.setState({
            stepThreeValues: values
        })
        console.log('value3', values)
    }


    render() {
        const { stepOneValues, stepTwoValues, stepThreeValues, activeStep, results } = this.state;
        const stepTwoData = results.map( data => {
            if(stepOneValues[data.id]){
                return data;
            }
            return null
        })
        console.log('stepTwoDataaaaaaaaaaaa', stepTwoData)

        let stepThreeData = [];
        stepTwoData && stepTwoData.map( data => {
            return data ? data.specifications.map(spec => {
                if(spec && stepTwoValues[spec.id]){
                    stepThreeData.push({...spec, stepOneName: data.name});
                }
                return null
            }) : null
            
        })
        console.log('stepThreeDataaaaaaaaaaaa', stepThreeData)

        let stepFourData = [];
        stepTwoData && stepTwoData.map( data => {
            return data ? data.specifications.map(spec => {
                if(spec && stepThreeValues[spec.id]){
                    stepFourData.push({...spec, stepOneName: data.name});
                }
                return spec ? spec.characteristics.map(char => {
                    if (char && stepThreeValues[char.id]){
                        stepFourData.push({...spec, stepOneName: data.name, chars: char})
                    }
                    return null
                }) : null
            }) : null

        })
        console.log('stepFourDataaaaaaaaaaaa', stepFourData)

        /*stepThreeData && stepThreeData.map( data => {
            return data ? data.characteristics.map(spec => {
                if(spec && stepThreeValues[spec.id]){
                    stepFourData.push({...spec, stepTwoName: data.name});
                    console.log('zawel2', stepFourData)
                }
                return null
            }) : null

        })*/

        return (
            <div className='ResearchList'>
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
                            onChangeHandler={this.handleStepThreeChange}
                        />}
                    {activeStep === 4 && stepTwoData.length > 0 &&
                        <StepFour
                            stepFourData={stepFourData}
                        />}

                    <div className='button'>
                        {activeStep > 1 ? <button className='btn btn-back' onClick={this.handleBackSubmit}>Назад</button> : null}
                        {activeStep < 4 ? <button className='btn btn-forward' onClick={this.handleSubmit}>Дальше ></button> : null}
                    </div>
            </div>
        )
    }

}
export default ResearchList

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
            stepOneValues:[...this.state.stepOneValues, id.target.value]
        })

    }

    render() {
        return (
            <div className={classes.ResearchList}>
                <div className={classes.researchItems}>
                    {this.state.activeStep === 1 &&
                        <StepOne
                            name={this.state.results[this.state.activeStep].name}
                            id={this.state.results[this.state.activeStep].id}
                            results={this.state.results}
                            onCheckboxChange={this.onChangeHandler}
                        />}
                    {this.state.activeStep === 2 && <StepTwo/>}
                    {this.state.activeStep === 3 && <StepThree/>}
                </div>

                <button onClick={this.handleSubmit}>Дальше</button>
            </div>
        )
    }

}
export default ResearchList

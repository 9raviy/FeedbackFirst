import _ from 'lodash'
import { connect } from 'react-redux'
import React from 'react'
import {withRouter} from 'react-router-dom'
import formFields from './formFields'
import * as actions from '../../actions'


const SurveyFormReview=({onCancel, formValues, submitSurvey, history})=> {
    const reviewFields=_.map(formFields,({name, label})=>{
        return (
            <p key={name} >
                <label>
                    {label}
                </label>
                <div>
                    {formValues[name]}
                </div>
            </p>
        )
    })
    return (
        <div className="container">
            <div className="reviewcase card">
                <h4 className="text-center">Please confirm your entries</h4>
                <div className="review"> 
                    {reviewFields}
                </div>
                <div className="buttons">
                    <p>
                        <button className="btn btn-primary" onClick={onCancel}>
                            Back
                        </button>  
                    </p>
                    <p>
                        <button onClick={()=>submitSurvey(formValues,history)} className="btn btn-dark">
                            Send Survey
                        </button>
                    </p>

                </div>

            </div>
        </div>
    )
}

function mapStateToProps(state){
    console.log("mapstatetoprops",state.form.surveyForm.values)
    return {formValues:state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview))

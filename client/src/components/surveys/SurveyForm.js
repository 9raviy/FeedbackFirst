import _ from 'lodash'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {reduxForm, Field} from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails'
import formFields from './formFields'

class SurveyForm extends Component {
    renderFields(){
        return _.map(formFields, ({label,name})=>{
            return (
                    <Field key={name} component={SurveyField} type="text"  label={label} name={name}/>
            )
        })
    }

    render() {
        return (
            <div>
                <section className="container">
                    <div className="formcase card">
                        <h2 className="text-center">Enter the details as below</h2>
                        <div className="contact">
                            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                                {this.renderFields()}
                            <div>
                                <p>
                                    <Link to='/surveys'>
                                    <button className="btn btn-primary">Cancel</button>
                                    </Link>
                                </p>
                                <p>
                                    <button className="btn btn-secondary" type="submit">Review
                                    </button>
                                </p>
                            </div>
                            </form>
                        </div>
                    </div>
                </section>  
            </div>
        )
    }
}

function validate(values) {
    const errors={}

    errors.recipients=validateEmails(values.recipients || '')
    _.each(formFields,({name})=>{
        if(!values[name]){
            errors[name]="You must provide a value"
        }
    })


    return errors
}

export default reduxForm({validate, form:'surveyForm',destroyOnUnmount:false})(SurveyForm)


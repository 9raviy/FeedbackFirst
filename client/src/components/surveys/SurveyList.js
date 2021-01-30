import {connect} from 'react-redux'
import React, { Component } from 'react'
import {fetchSurveys} from '../../actions'

class SurveyList extends Component {
    componentDidMount(){
        this.props.fetchSurveys()
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey=>{
            return (
                <div className="container" key={survey._id}>
                    <div className="surveycase card">
                        <div className="survey">
                            <p>Title</p>
                            <p>{survey.title}</p>
                            <p>Body</p>
                            <p>{survey.body}</p>
                            <p>Sent on</p>
                            <p> {new Date(survey.dateSent).toLocaleDateString()}</p>
                            <p>Responded 'Yes'</p>
                            <p><a>{survey.yes}</a></p>
                            <p>Responded 'No'</p>
                            <p><a>{survey.no}</a></p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({surveys}){
    return {surveys}
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList)
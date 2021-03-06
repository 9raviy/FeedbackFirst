import React from 'react'
import {Link} from 'react-router-dom'
import SurveyList from './surveys/SurveyList'
import serverImage from '../images/server.png'

function Dashboard() {
    return (
        <div>
            <section className="features-head bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Dashboard</h1>
                        <p className="lead">
                        </p>
                    </div>
                    <img src={serverImage} alt=""/>
                </div>
            </section>

            <section className="features-sub-head bg-light py-3">
                <div className="container grid">
                    <div>
                    <p className="lead alert">
                            Dashboard lists all the surveys created by you
                        </p>
                    </div>
                    <div>                    
                        <Link to='/surveys/new' className="btn btn-dark center-text create">
                            Create a new survey
                        </Link>
                    </div>
                </div>
            </section>
            <SurveyList/>
            <div className="fixed-action-btn">
            </div>
        </div>
    )
}

export default Dashboard

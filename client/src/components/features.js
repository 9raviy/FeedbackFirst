import React from 'react'
import cloudImage from '../images/cloud.png'
import serverImage from '../images/server.png'

export default function features() {
    return (
        <div>
            <section className="features-head bg-primary py-3">
            <div className="container grid">
                <div>
                    <h1 className="xl">Features</h1>
                    <p className="lead">
                        Check out the features of FeedbackFirst that separate us from the
                            competition
                    </p>
                </div>
                <img src={serverImage} alt=""/>
            </div>
            </section>

            <section class="features-sub-head bg-light py-3">
                <div class="container grid">
                    <div>
                        <h1 class="md">The Easiest Voting Platform</h1>
                        <p>
                            As easy as creating a Login Account, then creating a Survey and Send it!! Once your audience starts responding, you will see the results on your Dashboard. Look at the detailed features below.
                        </p>
                    </div>
                    <img src="images/server2.png" alt=""/>
                </div>
            </section>

            <section class="features-main my-2">
                <div class="container grid grid-3">
                    <div class="card flex">
                        <i class="fas fa-server fa-3x"></i>
                        <p>Create your survey by simply entering your Title, Subject, Body. Enter all the emails of the intended recipients by entering the e-mail id's separated by a comma (,). Review and hit Send. And you are done.</p>
                    </div>
                    <div class="card flex">
                        <i class="fas fa-network-wired fa-3x"></i>
                        <p>
                            All intended respondents with valid e-mail id's would receive an email which they can view and respond on their computer.
                        </p>
                    </div>
                    <div class="card flex">
                        <i class="fas fa-laptop-code fa-3x"></i>
                        <p>
                            Respondents don't need to install anything but can simple click 'Yes' or 'No' in the email to vote.                         </p>
                    </div>
                    <div class="card flex">
                        <i class="fas fa-database fa-3x"></i>
                        <p>
                            All surveys and respondents voting data is stored on the Cloud.
                        </p>
                    </div>
                    <div class="card flex">
                        <i class="fas fa-power-off fa-3x"></i>
                        <p>
                            We presently scalability to you at the click of a button.
                        </p>
                    </div>
                    <div class="card flex">
                        <i class="fas fa-upload fa-3x"></i>
                        <p>
                            Secure, fast and scalable solution for your voting survey needs.
                        </p>
                    </div>
                </div>
            </section>

            <div>
                <section className="cloud bg-primary my-2 py-2">
                    <div className="container grid">
                        <div className="text-center">
                            <h2 className="lg">Hosted on the Cloud</h2>
                            <p className="lead my-1">Fast, efficient and scalable</p>
                            <a href="features.html" className="btn btn-dark">Read More</a>
                        </div>
                        <img src={cloudImage} alt=""/>
                    </div>
                </section>
            </div>
        </div>
    )
}

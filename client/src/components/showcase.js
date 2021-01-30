import React from 'react'

export default function showcase() {
    return (
    <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h1>Voting platform</h1>
                <p>FeedbackFirst is a platform to create and e-mail voting surveys and solicit feedback</p>
                <a href="features.html" className="btn btn-outline">Read More</a>
            </div>
            <div className="showcase-form card">
                <h2>Request a Demo</h2>
                 <form>
                    <div className="form-control">
                        <input type="text" name="name" placeholder="Name" required/>
                    </div>
                    <div className="form-control">
                        <input type="text" name="company" placeholder="Company Name" required/>
                    </div>
                    <div className="form-control">
                        <input type="email" name="email" placeholder="Email" required/>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </section>    
    )
}

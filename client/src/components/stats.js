import React from 'react'

export default function stats() {
    return (
        <section className="stats">
        <div className="container">
            <div className="text-center">
                <h3 className="stats-heading text-center my-1">
                    Welcome to our platform for creating 'Yes'/'No' voting surveys and emailing them in bulk.
                </h3>
            </div>

            <div className="grid grid-3 text-center my-4">
                <div>
                    <i className="fas fa-server fa-3x"></i>
                    <h3>10,349</h3>
                    <p className="text-secondary">Survey's created</p>
                </div>
                <div>
                    <i className="fas fa-upload fa-3x"></i>
                    <h3>970,832 </h3>
                    <p className="text-secondary">Respondents emailed</p>
                </div>
                <div>
                    <i className="fas fa-project-diagram fa-3x"></i>
                    <h3>784,343</h3>
                    <p className="text-secondary">Responses received</p>
                </div>
            </div>
        </div>
    </section>
    )
}

import React from 'react'

export default function footer() {
    return (
        <footer className="footer bg-dark py-5">
        <div className="container grid">
            <div>
                <p>FeedbackFirst </p>
                <p>Copyright &copy; 2021</p>
            </div>
            <div className="social">
                <a href="#"><i className="fab fa-github fa-2x"></i></a>
                <a href="#"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    </footer>
    )
}

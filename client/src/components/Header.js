import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Payments from './Payments'

export class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return 'still deciding'
            case false:
                return <li><a href='/auth/google'>Login with Google</a></li>
            default:
                return [
                <li key='1'><Link to={'/surveys'}>Dashboard</Link></li>,
                <li key='2'><a href='/api/logout'>Logout</a></li>,
                <li key='3' style={{margin:'0 10px'}}>Credits: {this.props.auth.credits}</li>,
                <li key='4'><a><Payments/></a></li>
                ]
        }
    }

    render() {
        return (
            <div className="navbar">
                <div className="container flex">
                    <Link to={"/"}  className="logo">FEEDBACKFIRST</Link>
                    <nav>
                        <ul>
                            {this.renderContent()}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

function mapStateToProps({auth}){
    return {auth}
}

export default connect (mapStateToProps)(Header)
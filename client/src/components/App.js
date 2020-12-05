import 'materialize-css/dist/css/materialize.min.css'
import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Header from './Header'
import Landing from './Landing'



const Dashboard=()=>{
    return <h1>Dashboard</h1>
}

const Survey=()=>{
    return <h1>Survey</h1>
}

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
        console.log("inside componentDidMount")
    }
    render() {
    
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Route exact path='/' component={Landing}/>
                <Route exact path='/surveys' component={Dashboard}/>
                <Route exact path='/surveys/new' component={Survey}/>          
            </div>    
        </BrowserRouter>

    )
    }
}

export default connect(null,actions) (App)

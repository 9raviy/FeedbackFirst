import React from 'react'

export default ({input, label,meta:{error,touched}})=> {
    return (
        <p>
            <label>{label}</label>
            <input {...input} style={{marginBottom:'5px'}} />
            <p className="message" style={{color:"red",marginBottom:'20px'}}>
                {touched && error}  
            </p>
        </p>
    )
}



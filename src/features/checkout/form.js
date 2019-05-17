import React from 'react'
import {Field, reduxForm} from 'redux-form'


function CheckoutForm(props) {
    const {handleSubmit} = props

    return <div>
        <form onSubmit={handleSubmit}
}
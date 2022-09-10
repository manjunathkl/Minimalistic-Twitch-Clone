import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({error, touched}) {
        if(touched && error){
            return (
                <div className='ui error message'>
                    <div className='header'>
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta, touched }) => {
        const className = `field ${meta && touched ? 'error' : ''}`
        return (    
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete = "off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    

    render(){
        return(
            <form className='ui form error' onSubmit = {this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component = {this.renderInput} label = "Enter title" />
                <Field name = "description" component = {this.renderInput} label = "Enter description" />
                <button className='ui button primary'> Submit </button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if(!formValues.title){
        errors.title = "Required"
    }
    if(!formValues.description){
        errors.description = 'Required';
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);
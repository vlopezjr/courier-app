import React from 'react'
import { Formik, Field, ErrorMessage, useFormikContext } from 'formik'
import  When  from './When'
import  WhenDiv  from './WhenDiv'

export const FormField = ({id, name, type, className, label, placeholder, disabled}) => {
    
    const { errors, touched } = useFormikContext()
  
    return (
    <div>
    <When prop={label}><label htmlFor={name} className="label">{label}</label></When>
    <Field
      disabled={disabled}
      type={type || "text"}
      id={id}
      name={name}
      placeholder={placeholder}
      className="input"
    />
    <WhenDiv prop={errors[name] && touched[name]}>
      {/* <ExclamationIcon /> */}
      <ErrorMessage name={name} component="div" className="error" />
    </WhenDiv>
    </div>
  )
}

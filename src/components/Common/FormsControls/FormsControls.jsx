import React from 'react';
import s from './FormsControls.module.css';
import { Field } from 'redux-form';

const FormControl = ({input, meta: {touched, error},children}) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl+" "+ (hasError?s.error:"") }>
      <div>
        {children}
      </div>
      {hasError?<span>{error}</span>:""}
    </div>
  )  
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props
  return (<FormControl {...props} ><textarea {...restProps} {...input} /></FormControl>)
}
export const Input = (props) => {
  const {input, meta, ...restProps} = props
  return (<FormControl {...props} ><input {...restProps} {...input} /></FormControl>)
}

export const createField = (placeholder,name,validators,component,props, text="") => (
  <div>
    <Field placeholder={placeholder} name={name} 
      validate={validators} 
      component={component} 
      {...props} 
      />
      {text}
  </div>
)
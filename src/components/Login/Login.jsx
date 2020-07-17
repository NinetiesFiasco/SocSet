import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from './../Common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit,error}) => {
  return <form onSubmit={handleSubmit}>
      {createField("Email","email",[requiredField],Input)}
      {createField("Password","password",[requiredField],Input,{type: "password"})}
      {createField(null,"password",[],Input,{type: "checkbox",name: "rememberMe"},"remember me")}
    { error
      ? <div className={s.formSummaryError}>
        {error}       
      </div>
      :""
    }
    <div>
      <button>Login</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {  

  const onSubmit = (formData)=>{
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth){
    return <Redirect to="/profile"/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>  
}

const mstp = (state) => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mstp, {login})(Login);
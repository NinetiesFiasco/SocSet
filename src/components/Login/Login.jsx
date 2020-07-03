import React from 'react';
import {Field,reduxForm} from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import {login} from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from './../Common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"Email"} name={"email"} validate={[requiredField]} component={Input} />
    </div>
    <div>
      <Field placeholder={"Password"} name={"password"} type={"password"} validate={[requiredField]} component={Input}/>
    </div>
    <div>
      <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
    </div>
    { props.error
      ? <div className={s.formSummaryError}>
        {props.error}       
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
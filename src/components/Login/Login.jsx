import React from 'react';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { requiredField } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from './../Common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit,error, captchaUrl}) => {
  return <form onSubmit={handleSubmit}>
      {createField("Email","email",[requiredField],Input)}
      {createField("Password","password",[requiredField],Input,{type: "password"})}
      {createField(null,"password",[],Input,{type: "checkbox",name: "rememberMe"},"remember me")}
      {captchaUrl && 
        <div>
          <img src={captchaUrl} alt="captcha"/> 
          <div>
            {createField("Symbols from image","captcha",[requiredField],Input,{})}
          </div>
        </div>
      }
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
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth){
    return <Redirect to="/profile"/>
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
  </div>  
}

const mstp = (state) => ({
  isAuth: state.authReducer.isAuth,
  captchaUrl: state.authReducer.captchaUrl
});

export default connect(mstp, {login})(Login);
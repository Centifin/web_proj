import React from "react";
import {Link} from "react-router-dom"
import LoginForm from "../forms/LoginForm"
import RegisterForm from "../forms/RegisterForm"

import logo from "./assets/images/logo.png"
import centi from "./assets/images/centi.png"
import { Form, Button, Message } from "semantic-ui-react";

const RegisterPage = () => (

  <div className="ui grid">
    <div className="four wide column">

    </div>
    <div className="six wide column">
        <h2 className="ui teal image header">
          <img src={logo} className="image"/>
            <div className="content">
              Register to get instant Loan
            </div>
        </h2>
        <RegisterForm />
        <div className="ui message">
          Already Registered? <Link to="/login">Login</Link>
        </div>
    </div>
    <div className="three wide column">
      <img src={centi} className="image"/>
    </div>
  </div>

);
export default RegisterPage

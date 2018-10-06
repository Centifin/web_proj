import React from "react";
import {Link} from "react-router-dom"
import LoginForm from "../forms/LoginForm"
import logo from "./assets/images/logo.png"
import centi from "./assets/images/centi.png"
import { Form, Button, Message } from "semantic-ui-react";

const LoginPage = () => (
  <div className="ui grid">
    <div className="four wide column">

    </div>
    <div className="six wide column">
        <h2 className="ui teal image header">
          <img src={logo} className="image"/>
            <div className="content">
              Login to Centi
            </div>
        </h2>
        <LoginForm />
        <div className="ui message">
          New here? <Link to="/Register">Register</Link>
        </div>
    </div>
    <div className="three wide column">
      <img src={centi} className="image"/>
    </div>
  </div>

);
export default LoginPage

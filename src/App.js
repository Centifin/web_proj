import React from 'react';
import {Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

const App = () => <div className = "ui container">
<Route path="/" exact component={HomePage} />
<Route path="/login" exact component={LoginPage} />
<Route path="/register" exact component={RegisterPage} />
</div>;

export default App;

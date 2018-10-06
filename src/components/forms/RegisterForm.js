import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Message } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class RegisterForm extends React.Component {
  state = {
    data: {
      email: "",
      mobile:"",
      fname:"",
      mname:"",
      sname:"",
      idno:"",
      location:"",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Invalid password";
    if (!data.mobile) errors.mobile = "Invalid mobile";
    if (!data.fname) errors.fname = "Invalid First Name";
    if (!data.mname) errors.mname = "Invalid Last Name";
    if (!data.sname) errors.sname = "Invalid Suname";
    if (!data.idno) errors.idno = "Invalid ID Number";
    if (!data.location) errors.location = "Invalid Location";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.global}</p>
          </Message>
        )}

        <div className="field">
            <Form.Field error={!!errors.email}>
                <div className="ui left icon input">
                  <i className="user icon">
                  </i>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@example.com"
                    value={data.email}
                    onChange={this.onChange}
                  />
                {errors.email && <InlineError text={errors.email} />}
                </div>

            </Form.Field>
        </div>

        <div className="field">
            <Form.Field error={!!errors.mobile}>
                <div className="ui left icon input">
                  <i className="phone icon">
                  </i>

                  <input
                    type="phone"
                    id="mobile"
                    name="mobile"
                    placeholder="+254*********"
                    value={data.mobile}
                    onChange={this.onChange}
                  />
                {errors.email && <InlineError text={errors.mobile} />}
                </div>
            </Form.Field>
        </div>


              <div className="field">
                <Form.Field error={!!errors.fname}>
                <div className="ui left icon input">
                  <i className="user icon">
                  </i>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="First Name"
                    value={data.fname}
                    onChange={this.onChange}
                  />
                  {errors.fname && <InlineError text={errors.fname} />}
                  </div>
                </Form.Field>
              </div>


            <div className="field">
              <Form.Field >
              <div className="ui left icon input">
                <i className="user  icon">
                </i>

                <input
                  type="text"
                  id="mname"
                  name="mname"
                  placeholder="Middle Name"
                  value={data.mname}
                  onChange={this.onChange}
                />
              
                </div>
              </Form.Field>
            </div>



            <div className="field">
              <Form.Field error={!!errors.idno}>
              <div className="ui left icon input">
                <i className="tag icon">
                </i>

                <input
                  type="number"
                  id="idno"
                  name="idno"
                  placeholder="ID Number"
                  value={data.idno}
                  onChange={this.onChange}
                />
                {errors.idno && <InlineError text={errors.idno} />}
                </div>
              </Form.Field>
            </div>

      <div className="field">
        <Form.Field error={!!errors.password}>
        <div className="ui left icon input">
          <i className="lock icon">
          </i>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Make it secure"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
          </div>
        </Form.Field>
      </div>

        <Button className="ui fluid large teal submit button">Register</Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default RegisterForm;

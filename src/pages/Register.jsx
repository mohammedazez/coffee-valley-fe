import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setRegisterActions } from "../redux/actions/userAction";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const FormButton = styled.button`
    cursor: pointer;
    background: #ffcb77;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #ffcb77;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #212227;
    font-weight: bold;
    width: 100%;

    &:hover {
      background-color: #f4f4f6;
      color: #212227;
    }
  `;

  return (
    <>
      <div className="card-body" style={{ paddingTop: 100 }}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(setRegisterActions(register, event, history));
          }}
        >
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ex: Ash Ketchum"
              name="fullname"
              value={register.fullname}
              onChange={(e) => handleChange(e)}
              required
            />
            <label>Your Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="ash@poke.info"
              name="email"
              value={register.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <label>Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={register.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <label>Password</label>
          </div>
          <div className="btn-form-container">
            <FormButton type="submit">Login</FormButton>
          </div>
        </form>
      </div>

      <div className="col-md">
        <h5>Already have a account?</h5>
        <h5>
          <span>
            <Link to="/login">Sign In Here</Link>
          </span>
        </h5>
      </div>
    </>
  );
};

export default Register;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginActions } from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    dispatch(setLoginActions(login, event, history));
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
      <div
        style={{
          paddingTop: "200px",
          paddingLeft: 100,
          paddingRight: 100,
          paddingBottom: 100,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="number"
              className="form-control"
              placeholder="1234"
              name="id"
              value={login.id}
              onChange={(e) => handleChange(e)}
              required
            />
            <label>User ID</label>
          </div>
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <label>Password</label>
          </div>
          <div>
            <FormButton type="submit">Login</FormButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

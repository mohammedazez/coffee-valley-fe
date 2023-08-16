import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDistributorActions } from "../redux/actions/beansActions";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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

const DistributorAdd = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [register, setRegister] = useState({
    id: Math.floor(Math.random() * 10000),
    distributor_Name: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        paddingTop: "200px",
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 100,
      }}
    >
      <div className="col-md-9">
        <div className="card-body">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(setDistributorActions(register, event, history));
            }}
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="distributor_Name"
                placeholder="Ex: Ash Ketchum"
                name="distributor_Name"
                value={register.distributor_Name}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Distributor Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="ash@poke.info"
                name="city"
                value={register.city}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>City</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="state"
                name="state"
                value={register.state}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>State</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="country"
                name="country"
                value={register.country}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>country</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="phone"
                name="phone"
                value={register.phone}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>phone</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                placeholder="email"
                name="email"
                value={register.email}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>email</label>
            </div>
            <div className="btn-form-container">
              <FormButton type="submit">Add distributor</FormButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DistributorAdd;

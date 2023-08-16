import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUpdateDistributorAction } from "../redux/actions/beansActions";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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

const DistributorUpdate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [update, setUpdate] = useState({
    id: id,
    distributor_Name: "",
    city: "",
    state: "",
    country: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setUpdate({
      ...update,
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
              dispatch(setUpdateDistributorAction(update, update.id, history));
            }}
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="distributor_Name"
                placeholder="Ex: Ash Ketchum"
                name="distributor_Name"
                value={update.distributor_Name}
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
                value={update.city}
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
                value={update.state}
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
                value={update.country}
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
                value={update.phone}
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
                value={update.email}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>email</label>
            </div>
            <div className="btn-form-container">
              <FormButton type="submit">update distributor</FormButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DistributorUpdate;

import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import beansAction from "../redux/actions/beansActions";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
const Catalog = () => {
  const distributorList = useSelector((state) => state.beans.distributor);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/distributorupdate/${id}`);
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

  useEffect(() => {
    dispatch(beansAction.fetchDistributorList());
  }, [dispatch]);
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Distributor Name</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {distributorList.map &&
              distributorList.map((distributor, index) => (
                <tr key={index}>
                  <td>{distributor.ID}</td>
                  <td>{distributor.distributor_name}</td>
                  <td>{distributor.city}</td>

                  <td>
                    <FormButton onClick={() => handleClick(distributor.ID)}>
                      Update
                    </FormButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <Link to="/distributoradd">
          <FormButton>Add</FormButton>
        </Link>
      </div>
    </>
  );
};

export default Catalog;

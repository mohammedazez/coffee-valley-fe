import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import beansAction from "../redux/actions/beansActions";
const Catalog = () => {
  const catalogList = useSelector((state) => state.beans.catalogList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beansAction.fetchCatalogList());
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
              <th>Bean</th>
              <th>Description</th>
              <th>Price per unit</th>
            </tr>
          </thead>
          <tbody>
            {catalogList.map &&
              catalogList.map((catalog, index) => (
                <tr key={index}>
                  <td>{catalog.bean_name}</td>
                  <td>{catalog.description_name}</td>
                  <td>$ {catalog.price_per_unit}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Catalog;

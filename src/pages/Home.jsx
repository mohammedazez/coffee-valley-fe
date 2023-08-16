import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import beansAction from "../redux/actions/beansActions";

const Home = () => {
  const beans = useSelector((state) => state.beans.beansDetail);
  const dispatch = useDispatch();
  let lastElement = beans[beans.length - 1];

  useEffect(() => {
    dispatch(beansAction.fetchBeansDetail());
  }, [dispatch]);

  return (
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
            <th>Bean of the Day</th>
            <th>Sale Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {lastElement && (
            <tr>
              <td>{lastElement.bean_name}</td>
              <td>$ {lastElement.sale_price}</td>
              <td>{lastElement.description_bean}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;

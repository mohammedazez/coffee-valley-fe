import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PrivateRoute from "./components/privateRoute";

// pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Distributor from "./pages/Distributor";
import DistributorAdd from "./pages/DistributorAdd";
import DistributorUpdate from "./pages/DistributorUpdate";
import Upload from "./pages/Upload";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/catalog">
              <Catalog />
            </Route>
            <Route path="/distributor">
              <Distributor />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/distributoradd">
              <DistributorAdd />
            </Route>
            <Route path="/distributorupdate/:id">
              <DistributorUpdate />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;

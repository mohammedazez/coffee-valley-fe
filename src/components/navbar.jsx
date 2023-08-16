import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userLogoutActions } from "../redux/actions/userAction";
import Swal from "sweetalert2";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutSuccess = () => {
    dispatch(userLogoutActions(history));
    localStorage.removeItem("accessToken");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Success Logout",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
  };

  const LoginButton = styled.button`
    cursor: pointer;
    background: #c1292e;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #c1292e;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #f4f4f6;
    font-weight: bold;

    &:hover {
      background-color: #f4f4f6;
      color: #c1292e;
    }
  `;

  const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 14px;
    border-radius: 5px;
    border: 3px solid #c1292e;
    padding: 0.25em 0.5em;
    transition: 0.2s all ease-out;
    color: #c1292e;
    font-weight: bold;

    &:hover {
      background-color: #c1292e;
      color: #f4f4f6;
    }
  `;

  return (
    <div className="container-fluid">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <div>
                <Navbar.Brand href="/">COFFEE VALLEY</Navbar.Brand>
                <br />
                <p>
                  <small>
                    Taste the love in every cup!. <br />
                    One Alewife Center 3rd Floor <br />
                    Cambridge, MA 02140
                  </small>
                </p>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                {!localStorage.getItem("accessToken") ? (
                  <>
                    <div style={{ paddingLeft: 200 }}>
                      <Link to="/login">
                        <LoginButton>Login</LoginButton>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <Nav className="me-auto" style={{ marginLeft: 100 }}>
                      <div style={{ paddingRight: 50 }}>
                        <Link to="/">
                          <Button>Home</Button>
                        </Link>
                      </div>

                      <div style={{ paddingRight: 50 }}>
                        <Link to="/catalog">
                          <Button>Catalog</Button>
                        </Link>
                      </div>

                      <div style={{ paddingRight: 50 }}>
                        <Link to="/distributor">
                          <Button>Distributors</Button>
                        </Link>
                      </div>

                      <div style={{ paddingRight: 50 }}>
                        <Link to="/upload">
                          <Button>Upload</Button>
                        </Link>
                      </div>

                      <Button onClick={() => logoutSuccess()}>Logout</Button>
                    </Nav>
                  </>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;

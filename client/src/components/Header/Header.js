import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../Images/logoIcon/IITR175.png";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Reducers/authSlice";
import {useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Button, Container, Nav, Navbar } from "react-bootstrap"
function Header() {
  const [display, setDisplay] = useState("Sign Up");
  const [route, setRoute] = useState("signup");

  const dispatch = useDispatch();
  let { isAuth } = useSelector((state) => state.auth);
  const cookie = new Cookies();
  // *for navigation
  // let navigate = useNavigate();

  function clickHandler() {
    if (display === "Sign Up") {
      setRoute("login");
      setDisplay("Log In");
    } else {
      setDisplay("Sign Up");
      setRoute("signup");
    }
  }
  useEffect(
    (e) => {
      if (e && e.preventDefault()) {
        clickHandler(e);
        // console.log("its running again");
      }
    },
    [route, display]
  );
  const logoutHandler = (e) => {
    dispatch(logout());
    cookie.remove("token");
    // navigate("/login");
    // window.location.href='/login'
  };

  return (
    <div className="header container-fluid">
      <div className="innerContainer container d-flex justify-content-around ">
        <div className="header__image">
          <img src={logo} alt="IIT ROORKEE logo" />
        </div>
        <div className="d-flex   innerContainer2 justify-content-between d-md-block">
           <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto mt-4 hnav" navbarScroll>
          <Link to="https://acad.iitr.ac.in/Default.aspx?ReturnUrl=%2fStudent%2fDefault.aspx&AspxAutoDetectCookieSupport=1">
            IITR Portal
          </Link>
          <Link to="https://ir.iitr.ac.in/IR_Panel/">
            IR Portal
          </Link>
          {/* <Link to="https://ir.iitr.ac.in/IR_Panel/" clclassName="nav-link">IR Portal</Link> */}
          <Link to="/howitworks">How It Works</Link>
          <Link to="/contribution">Contribute</Link>
          <Link to="/admin">Admin</Link>
          <Link to="/info">Information</Link>
          <Link to={isAuth ? "/dashbord" : "/login"} className="loginHeader mt-0">
            {isAuth ? "Dashboard" : "Login"}
          </Link>
          {!isAuth && (
                    <Link to={"/signup"} className="mt-0" >
              <Button className="loginHeader forText m-0">SignUp</Button>
            </Link>
          )}
          {isAuth && (
            <Link className="">
              <Button className=" loginHeader forText mt-0 " onClick={logoutHandler}>Logout</Button>
            </Link>
          )}
         </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        </div>
      </div>
    </div>
  );
}

export default Header;

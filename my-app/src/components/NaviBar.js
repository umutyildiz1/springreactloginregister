import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {authActionLogout} from "../redux/authActionCreator";
function NaviBar(props) {
    const [login, setLogin] = useState();
  const [name, setName] = useState();
  const { isLogin, username, logoutSuccess, userId } = props;

  useEffect(() => {
    setLogin(isLogin)
    setName(username)
  }, [props])

  let linksNav = (
    <div className="d-flex">
      <Nav.Item className="me-2">
        <Link to="/login">Sign In</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/signup">Sign Up</Link>
      </Nav.Item>
    </div>
  );
  if (isLogin) {
    linksNav = (
      <Container className="d-flex">
        <Nav.Item className="me-2">
          <p style={{color:"white"}}>{username}</p>
        </Nav.Item>
        <Nav.Item>
          <Link to="/" onClick={logoutSuccess}>
            Logout
          </Link>
        </Nav.Item>
      </Container>
    );
  }
    return (
        <div>
      <Navbar expand="lg" variant="dark" bg="dark" className="shadow-lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Spring React App</Link>
          </Navbar.Brand>
          <Nav className="ms-auto">{linksNav}</Nav>
        </Container>
      </Navbar>
    </div>
    )
}
const putStatesToProps =(storeStates) =>{
    return {
      isLogin : storeStates.isLogin,
      username : storeStates.username,
      userId : storeStates.userId
    }
  }
  
  const putDispatchToProps = (dispatch) => {
    return {
      logoutSuccess : ()=>{
        return dispatch(authActionLogout())}
    }
  }
export default connect(putStatesToProps, putDispatchToProps)(NaviBar)
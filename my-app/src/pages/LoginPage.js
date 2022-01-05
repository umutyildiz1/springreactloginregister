import React , { useState }from 'react'
import UserService from '../services/UserService'
import Input from "../components/Input";
import { connect } from "react-redux";
import { authActionLogin } from "../redux/authActionCreator";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Col, Row, Form, Alert, Container } from "react-bootstrap";
function LoginPage(props) {
    const userService = new UserService();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState();

    const {loginSuccess} = props
    
    const buttonEnabled = email && password

    let history = useHistory()

    const onChange = (event) => {
        const { name, value } = event.target;
        if (name === "email") {
          setEmail(value);
        } else if (name === "password") {
          setPassword(value);
        }
        setErrors(null)
      };

      const onClickLogin = async(e) => {
        e.preventDefault();
        const token = {
            username : email,
            password
    
        }
    
        try{
            setErrors(null)
            const response = await userService.logIn(token)
            loginSuccess(response.data)
            history.push("/main")
        }catch(error){
            setErrors(error.response.data.message)
        }
      };


    return (
        <Container className="w-25">
      <Col className="text-center">
        <Row className="text-center mt-3">
          <h1>Sign In</h1>
        </Row>
      </Col>
      <Form>
        <Input label="Email" onChange={onChange} name="email" />
        <Input
          label="Password"
          onChange={onChange}
          name="password"
          type="password"
        />
        <Form.Group className="text-center mt-3">
          <Button onClick={onClickLogin} disabled={!buttonEnabled}>Sign In</Button>
        </Form.Group>

        {errors ? (
          <Alert className="mt-3 text-center" variant="danger">
            {errors}
          </Alert>
        ) : (
          ""
        )}
      </Form>
    </Container>
  );
    
}
const putStateToProps = state => {
    return {
      state 
    }
  }
  
  const putDispatchToProps = (dispatch) =>{
    return {
      loginSuccess : (payload) => {
        return dispatch(authActionLogin(payload))
      }
    }
  }
  export default connect(putStateToProps,putDispatchToProps)(LoginPage)
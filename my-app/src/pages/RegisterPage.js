import React ,{ useState }from 'react'
import { Form ,Container ,Button ,Col ,Row , Alert} from 'react-bootstrap'
import Input from '../components/Input'
import UserService from '../services/UserService'
export default function RegisterPage() {
    const userService = new UserService();
    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isRegister, setIsRegister] = useState(false)
    const [errors, setErrors] = useState({})
    const {name,userPassword:passwordError,email:emailError} = errors;
    

    const onChange = (event) => {
        const {name, value} = event.target
        const error = {...errors}
        switch (name) {
            case "fname":
              setFname(value);
              error.name = undefined
              setErrors(error)
              break;
            case "email":
              setEmail(value);
              error.emailError = undefined
              error.email = undefined
              setErrors(error)
              break;
            case "password":
              setPassword(value);
              error.passwordError = undefined
              error.userPassword = undefined
              setErrors(error)
              break;
    }}

    const onClickSignUp = async(event) => {
        event.preventDefault();
        let requestBody={
            name : fname,
            email,
            userPassword : password
        }
        try{
             await userService.createUser(requestBody)
             setIsRegister(true)
        }catch(error){
            if(error.response.data.validationErrors){
                setErrors(error.response.data["validationErrors"])
            }
        }
    }

    return (
        <div>
            <Container className="w-25" >
      
      <Col className="text-center">
        <Row className="text-center">
          <h1>Sign Up</h1>
        </Row>
        </Col>
        <Form>
        <Input name="fname" error={name} label="Name" onChange={onChange} />
        <Input name="email" error={emailError} label="Email" onChange={onChange} />
        <Input name="password" error={passwordError} label="Password" onChange={onChange} />

        <Form.Group className="text-center mt-3">
                <Button onClick={onClickSignUp}>Sign Up</Button>
                {isRegister?<Alert variant='info' className="mt-3">Registered Successfully</Alert>:""}
              </Form.Group>
        </Form>
        </Container>
        </div>
    )
}

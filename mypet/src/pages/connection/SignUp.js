import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSignUp } from '../../redux/actions/getAuthActions';

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState(null)
  const [password2, setPassword2] = useState(null)
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const checkEmpty = () => {
    if(password !== password2) {
      setPasswordsNotMatch(true)
    } else {
      setPasswordsNotMatch(false)
    }
    }
    if(password !== null || password2 !== null) {
      checkEmpty()
    } else setPasswordsNotMatch(false)
  }, [password2])

  const signUp = async (e) => {
    e.preventDefault();
    let obj = { email , username , password }
    dispatch(getSignUp(obj))
  }


  return (
    <div>
      <Form onSubmit={signUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" required onChange={(e) => setUserName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword2">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword2(e.target.value)} />
        </Form.Group>
        {passwordsNotMatch && <span style={{color : 'red'}}>The passwords not match</span>}
        <p>Do you have a user? <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={() => navigate('/login')}>Go to login</span></p>
        <Button disabled={email === "" || username === "" || password === "" || password2 === "" || password !== password2 ? true : false} variant="primary" type="submit " onClick={signUp}>
          Submit
        </Button>
      </Form>
    </div>

  );
}

export default SignUp;
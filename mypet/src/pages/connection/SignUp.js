import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import utils from '../../utils/authenticationUtils';

function SignUp(props) {
  const [ email, setEmail ] = useState('')
  const [ username, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ password2, setPassword2 ] = useState('')

  const signUp = async (e) => {
    e.preventDefault();
    let obg = { email: email, username: username, password: password, password2: password2}

    let resp = await utils.addItem(obg)

    console.log(resp.data)
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="text"ext placeholder="Enter username" required onChange={(e) => setUserName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password2</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword2(e.target.value)} />
        </Form.Group>


        <Button variant="primary" type="submit" onSubmit={signUp}>
          Submit
        </Button>
      </Form>
    </div>

  );
}

export default SignUp;
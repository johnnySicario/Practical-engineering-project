import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserProfile() {
    const [photo, setPhoto] = useState(null)
    const [photoSize, setPhotoSize] = useState(false)
    const [ fName , setFirstName ] = useState('')
    const [ lName , setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [ age , setAge ] = useState('')
    const [ pet , setPet ] = useState('')

    // console.log(photo.file.size === 1048576);

    useEffect(() => {
      if(photo !== null) {
        photo.file.size <= 1048576 ? setPhotoSize(false) : setPhotoSize(true)
      }
    },[photo])

    console.log(photoSize);

    const handleFileInputChange = data => {
        if(data.file) {
          let reader = new FileReader();
        reader.readAsDataURL(data.file);
        reader.onload =  () => {
          setPhoto({url : reader.result , file : data.file})
        };
        reader.onerror = (error) => {
          console.log('Error: ', error);
        };
        } else {
          setPhoto(null);
        }
      };
      
      const hadleSubmitForm = (e) => {
        e.preventDefault();
        let data = { fName , lName ,phoneNumber , email , age , pet , photo }
        console.log(data);
      }

      let options = []
          for (let i = 1; i <= 18; i++) {
            options.push({ key : i.toString(), value : i.toString() })         
            }

        return (
        <div>
          {photo && <img style={{width: '10%' , float: 'left'}} alt='someting' src={photo?.url}/>}
          <form onSubmit={hadleSubmitForm}>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">First Name</Form.Label>
        <Form.Control aria-describedby="inputGroup-sizing-default" type='text' required onChange={(e) => setFirstName(e.target.value)}/>
      </Form.Group>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Last Name</Form.Label>
        <Form.Control aria-describedby="inputGroup-sizing-default" type='text' required onChange={(e) => setLastName(e.target.value)}/>
      </Form.Group>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Email</Form.Label>
        <Form.Control aria-describedby="inputGroup-sizing-default" type='text' required onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Phone Number</Form.Label>
        <Form.Control aria-describedby="inputGroup-sizing-default" type='text' required onChange={(e) => setPhoneNumber(e.target.value)}/>
      </Form.Group>
            <div className="input-group mb-3">
              <fieldset>
                <Form.Group>
                  <Form.Label htmlFor=''>Age</Form.Label>
                  <Form.Select onChange={(e) => setAge(e.target.value)} value={age} required={true}>
                  {
                  options.map((item) => {
                    return <option key={item.key} value={item.value}>{item.value}</option>
                  })
                  }
                  </Form.Select>
                </Form.Group>
              </fieldset>
            </div>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Pet breed</Form.Label>
        <Form.Control aria-describedby="inputGroup-sizing-default" type='text' required onChange={(e) => setPet(e.target.value)}/>
      </Form.Group>
        <Form.Group className="input-group mb-3">
          <Form.Label className="input-group-text" htmlFor='AddPicId'>Upload your pet</Form.Label>
            <Form.Control hidden required type="file" id='AddPicId' onChange={e => handleFileInputChange({ file : e.target.files[0] })} accept="image/*"/>
            <span>{!photo ? null : photo?.file?.name}</span>
        </Form.Group>
  <div><span style={photoSize ? {color : "red"} : { color : 'green' }}>The image should be up to 1MB</span></div>

<Button disabled={fName === "" || lName === "" || email === "" || phoneNumber === "" || age === "" || pet === "" || photo === null || photoSize ? true : false} onClick={hadleSubmitForm} type="submit">Submit</Button>
          </form>
        </div>
    );
}

export default UserProfile;
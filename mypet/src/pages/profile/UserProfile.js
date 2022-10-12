import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


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
          <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">First name</span>
                <input required onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Last name</span>
                <input required onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input required onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Phone Number</span>
                <input required onChange={(e) => setPhoneNumber(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    defaultValue="Select"
    label="Age"
    required={true}
    onChange={(e) => setAge(e.target.value)}
  >
    {
      options.map((item) => {
        return <MenuItem key={item.key} value={item.value}>{item.value}</MenuItem>
      })
    }
  </Select>
</FormControl>
                {/* <label className="input-group-text" for="inputGroupSelect01">Age</label> */}
                {/* <select onChange={(e) => setAge(e.target.value)} defaultValue="select" className="form-select" id="inputGroupSelect01">
                    <option selected>Choose...</option>
                    {dddd.map((element , index) => {
                      return  <option key={index} value={element.value}>{element.value}</option>
                    })}
                </select> */}
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Pet breed</span>
                <input required onChange={(e) => setPet(e.target.value)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div className="input-group mb-3">
  <label className="input-group-text" for="inputGroupFile01">Upload your pet</label>
  <input  required type="file" className="form-control" id="inputGroupFile01" onChange={e => handleFileInputChange({ file : e.target.files[0] })} accept="image/*"/>
</div>
  <div><span style={photoSize ? {color : "red"} : { color : 'green' }}>The image should be up to 1MB</span></div>

<button disabled={fName === "" || lName === "" || email === "" || phoneNumber === "" || age === "" || pet === "" || photo === null || photoSize ? true : false} onClick={hadleSubmitForm} type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
}

export default UserProfile;
import React, { useEffect } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getUpdateUserAction, getUsersAction } from './../../redux/actions/getUsersActions';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

function UserProfile() {
    const users = useSelector(state => state.users.users)
    const auth = useSelector(state => state.auth.auth)
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)
    const [photoSize, setPhotoSize] = useState(false)
    const [fName , setFirstName ] = useState('')
    const [lName , setLastName ] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [age , setAge ] = useState('')
    const [petBreed , setPetBreed ] = useState('')
    const [fInput, setFInput] = useState(false)
    const [lInput, setLInput] = useState(false)
    const [phoneInput, setPhoneInput] = useState(false)
    const [ageInput, setAgeInput] = useState(false)
    const [petInput, setPetInput] = useState(false)


    useEffect(() => {
      dispatch(getUsersAction())
  }, [dispatch])

  let myProfile = users.filter(user => user._id === auth.id)
  console.log(myProfile);

    useEffect(() => {
      if(photo !== null) {
        photo.file.size <= 1048576 ? setPhotoSize(false) : setPhotoSize(true)
      }
    },[photo])

    const handleFileInputChange = data => {
        if(data.file) {
          let reader = new FileReader();
        reader.readAsDataURL(data.file);
        reader.onload =  () => {
          setPhoto({url : reader.result , file : data.file})
        };
        reader.onerror = (error) => {
        };
        } else {
          setPhoto(null);
        }
      };
      
      const handleSubmit = () => {
        let data = { 
        fName : fName !== "" ? fName : myProfile[0]?.fName ,
        lName : lName !== "" ? lName : myProfile[0]?.lName ,
        phoneNumber : phoneNumber !== "" ? phoneNumber : myProfile[0]?.phoneNumber,
        age : age !== "" ? age : myProfile[0]?.age , 
        petBreed : petBreed !== "" ? petBreed : myProfile[0]?.petBreed
        }
        dispatch(getUpdateUserAction({id : myProfile[0]._id} , data))
      }


      let options = []
          for (let i = 1; i <= 18; i++) {
            options.push({ key : i.toString(), value : i.toString() })         
            }

        return (
        <div style={{width : '45%' , marginLeft : 'auto' , marginRight : 'auto'}}>
            <h2 style={{textAlign : "center"}}>{myProfile[0]?.username}</h2>
          {photo && <img style={{width: '10%' , float: 'left'}} alt='someting' src={photo?.url}/>}
          <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">First Name</Form.Label>
        {
          fInput ? 
          <><Form.Control aria-describedby="inputGroup-sizing-default" type='text'  onChange={(e) => setFirstName(e.target.value)}/>
          <AiOutlineCheck onClick={() => {handleSubmit() ; setFInput(false)}} style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'green' , margin : '1rem'}}/>
          <AiOutlineClose onClick={() => {setFInput(false); setFirstName('')}}  style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'red', margin : '1rem'}}/> 
          </> : 
          <span style={{marginLeft : '1rem' , marginRight : '1rem'}}>{myProfile[0]?.fName} <AiFillEdit style={{fontSize: '1.3rem', marginLeft: '1rem', color: 'green' , cursor : 'pointer'}} onClick={() => setFInput(true)}/></span>
        }
          </Form.Group>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Last Name</Form.Label>
        {
          lInput ? 
          <><Form.Control aria-describedby="inputGroup-sizing-default" type='text'  onChange={(e) => setLastName(e.target.value)}/>
          <AiOutlineCheck onClick={() => { handleSubmit(); setLInput(false) }} style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'green' , margin : '1rem'}}/>
          <AiOutlineClose onClick={() => {setLInput(false); setLastName('')}}  style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'red', margin : '1rem'}}/> 
          </> : 
          <span style={{marginLeft : '1rem' , marginRight : '1rem'}}>{myProfile[0]?.lName} <AiFillEdit style={{fontSize: '1.3rem', marginLeft: '1rem', color: 'green' , cursor : 'pointer'}} onClick={() => setLInput(true)}/></span>
        }
      </Form.Group>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Email</Form.Label>
        <Form.Control aria-describedby="inputGroup-sizing-default" type='text' defaultValue={myProfile[0]?.email} disabled/>
      </Form.Group>
            <Form.Group className="input-group mb-3">
        <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Phone Number</Form.Label>
        {
          phoneInput ? 
          <><Form.Control aria-describedby="inputGroup-sizing-default" type='text'  onChange={(e) => setPhoneNumber(e.target.value)}/>
          <AiOutlineCheck onClick={() => { handleSubmit(); setPhoneInput(false) }} style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'green' , margin : '1rem'}}/>
          <AiOutlineClose onClick={() => {setPhoneInput(false); setPhoneNumber('')}}  style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'red', margin : '1rem'}}/> 
          </> : 
          <span style={{marginLeft : '1rem' , marginRight : '1rem'}}>{ myProfile[0]?.phoneNumber } <AiFillEdit style={{fontSize: '1.3rem', marginLeft: '1rem', color: 'green' , cursor : 'pointer'}} onClick={() => setPhoneInput(true)}/></span>
        }
      </Form.Group>
                <Form.Group className="input-group mb-3">
                  <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Age</Form.Label>
                  {
                    ageInput ? 
                    <>
                    <Form.Select onChange={(e) => setAge(e.target.value)} value={age} required={true}>
                    {
                    options.map((item) => {
                      return <option key={item.key} value={item.value}>{item.value}</option>
                    })
                    }
                    </Form.Select>
                    <AiOutlineCheck onClick={() => {setAgeInput(false); handleSubmit()}} style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'green' , margin : '1rem'}}/>
          <AiOutlineClose onClick={() => {setAgeInput(false); setAge('')}}  style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'red', margin : '1rem'}}/> 
                    </> : 
                    <span style={{marginLeft : '1rem' , marginRight : '1rem' }}>{myProfile[0]?.age} <AiFillEdit style={{fontSize: '1.3rem', marginLeft: '1rem', color: 'green' , cursor : 'pointer'}} onClick={() => setAgeInput(true)}/></span>
                  }
                </Form.Group>
            <Form.Group className="input-group mb-3">
              <Form.Label style={{marginBottom: '0px'}} className="input-group-text">Pet breed</Form.Label>
            {
              petInput ? 
              <><Form.Control aria-describedby="inputGroup-sizing-default" type='text'  onChange={(e) => setPetBreed(e.target.value)}/>
            <AiOutlineCheck onClick={() => {handleSubmit() ; setPetInput(false)}} style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'green' , margin : '1rem'}}/>
            <AiOutlineClose onClick={() => { setPetInput(false) ; setPetBreed('') }}  style={{cursor : 'pointer' , fontSize: '1.3rem', color: 'red', margin : '1rem'}}/> 
            </> : 
            <span style={{marginLeft : '1rem' , marginRight : '1rem'}}>{myProfile[0]?.petBreed} <AiFillEdit style={{fontSize: '1.3rem', marginLeft: '1rem', color: 'green' , cursor : 'pointer'}} onClick={() => setPetInput(true)}/></span>
          }
          </Form.Group>
        <Form.Group className="input-group mb-3">
          <Form.Label className="input-group-text" htmlFor='AddPicId'>Upload your pet</Form.Label>
            <Form.Control hidden required type="file" id='AddPicId' onChange={e => handleFileInputChange({ file : e.target.files[0] })} accept="image/*"/>
            <span>{!photo ? null : photo?.file?.name}</span>
        </Form.Group>
  <div><span style={photoSize ? {color : "red"} : { color : 'green' }}>The image should be up to 1MB</span></div>

{/* <Button disabled={fName === "" || lName === "" || phoneNumber === "" || age === "" || petBreed === "" || photo === null || photoSize ? true : false} onClick={hadleSubmitForm} type="submit">Submit</Button>   */}
        </div>
    );
}

export default UserProfile;
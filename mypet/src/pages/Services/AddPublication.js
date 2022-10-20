import { useState } from 'react';
import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { getAddPublications } from '../../redux/actions/getPublcationActions';
import { useNavigate } from 'react-router-dom';


function AddPublication(props) {
    const auth = useSelector(state => state.auth.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [photo, setPhoto] = useState(null)
    const [photoSize, setPhotoSize] = useState(false)
    const [Title, setTitle] = useState('')
    const [Message, setMessage] = useState('')

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await dispatch(getAddPublications({ name: auth.username, header: Title, text: Message, picture: photo.url }))
        await navigate('/publication')
    }

    useEffect(() => {
        if (photo !== null) {
            photo.file.size <= 1048576 ? setPhotoSize(false) : setPhotoSize(true)
        }
        photo === null && setPhotoSize(false)
    }, [photo])

    const handleFileInputChange = data => {
        if (data.file) {
            let reader = new FileReader();
            reader.readAsDataURL(data.file);
            reader.onload = () => {
                setPhoto({ url: reader.result, file: data.file })
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        } else {
            setPhoto(null);
        }
    };

    return (
        <div style={{ width: '40%', marginLeft: 'auto', marginRight: 'auto' }}>
            <p onClick={() => navigate(-1)} style={{ cursor: "pointer" }}><AiOutlineArrowLeft /> Back</p>
            <Form.Group className='input-group mb-3'>
                <Form.Label style={{ marginBottom: '0px' }} className="input-group-text">
                    Title
                </Form.Label>
                <Form.Control onChange={(e) => setTitle(e.target.value)} type="text" aria-label="Title" />
            </Form.Group>
            <Form.Group className='input-group mb-3'>
                <Form.Label style={{ marginBottom: '0px' }} className="input-group-text">
                    Message
                </Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <Form.Group className="input-group mb-3">
                <Form.Label className="input-group-text" htmlFor='AddPicId'>Upload your pet</Form.Label>
                <Form.Control multiple hidden required type="file" id='AddPicId' onChange={e => handleFileInputChange({ file: e.target.files[0] })} accept="image/*" />
                <span style={{ marginLeft: "1rem" }}>{!photo ? null : <span>{photo?.file?.name} <span onClick={() => setPhoto(null)}><AiOutlineClose style={{ color: '#bc4040', cursor: 'pointer', fontSize: '1.5rem' }} /></span></span>} </span>
            </Form.Group>
            <div><span style={photoSize ? { color: "red" } : { color: 'green' }}>The image should be up to 1MB</span></div>
            <Button disabled={Title === "" || Message === "" || photo === null || photoSize ? true : false} onClick={handleSubmitForm} type="submit" className="btn btn-primary">Submit</Button>
        </div>
    );
}

export default AddPublication;
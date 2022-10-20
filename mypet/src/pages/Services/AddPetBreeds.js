import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";
import { api } from './../api';

function AddPetBreeds(props) {
    const [item, setItem] = useState({});
    const navigate = useNavigate()

    const [photo, setPhoto] = useState(null)
    const [photoSize, setPhotoSize] = useState(false)

    const send = (e) => {
        e.preventDefault();
        console.log(item)
        axios.post(`${api}/PetBreed`, item)
        navigate('/PetBreed')
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
                setItem({ ...item, picture: reader.result })
            };
            reader.onerror = (error) => {
                console.log('Error: ', error);
            };
        } else {
            setPhoto(null);
        }
    };

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasictitle">
                    <Form.Label>title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={e => { setItem({ ...item, title: e.target.value }) }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>text:</Form.Label>
                    <Form.Control type="text" placeholder="Enter text" onChange={e => { setItem({ ...item, text: e.target.value }) }} />
                </Form.Group>

                <Form.Group className="input-group mb-3">
                    <Form.Label className="input-group-text" htmlFor='AddPicId'>Upload your pet</Form.Label>
                    <Form.Control multiple hidden required type="file" id='AddPicId' onChange={e => handleFileInputChange({ file: e.target.files[0] })} accept="image/*" />
                    <span style={{ marginLeft: "1rem" }}>{!photo ? null : <span>{photo?.file?.name} <span onClick={() => setPhoto(null)}><AiOutlineClose style={{ color: '#bc4040', cursor: 'pointer', fontSize: '1.5rem' }} /></span></span>} </span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasiclink">
                    <Form.Label>link:</Form.Label>
                    <Form.Control type="text" placeholder="Enter link" onChange={e => { setItem({ ...item, link: e.target.value }) }} />
                </Form.Group>

                <Button variant="primary" type="button" onClick={send}>
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default AddPetBreeds;
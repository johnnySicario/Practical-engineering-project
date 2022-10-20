import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddServicesAction } from '../../redux/actions/getServicesActions.js';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function AddServices(props) {
    const [service, setService] = useState({})

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const AddServices = (e) => {
        e.preventDefault()
        dispatch(AddServicesAction({ type: 'ADD_SERVICES', payload: service }))
        navigate('/service')
    }

    return (
        <div>
            <p onClick={() => navigate(-1)} style={{cursor : "pointer"}}><AiOutlineArrowLeft/> Back</p>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" onChange={e => { setService({ ...service, name: e.target.value }) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="city" onChange={e => { setService({ ...service, city: e.target.value }) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control type="text" placeholder="contact" onChange={e => { setService({ ...service, contact: e.target.value }) }} />
                </Form.Group>


                <Button variant="primary" type="button" onClick={AddServices}>
                    Submit
                </Button>
            </Form>

        </div>
    );
}

export default AddServices;
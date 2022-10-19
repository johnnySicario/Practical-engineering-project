import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesAction } from '../../redux/actions/getServicesActions.js';

const TableServices = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const services = useSelector(state => state.services.services)
    const auth = useSelector(state => state.auth.auth)

    useEffect(() => {
        dispatch(getServicesAction())
    }, [dispatch])

    const deleteServices = (id) => {
        dispatch(getServicesAction({ type: 'DELETE_SERVICES', payload: id }))
    }
    let servicesTable = [];
    if (services.length > 0) {
        servicesTable = services.map((data, index) => {
            return (
                <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.city}</td>
                    <td>{data.contact}</td>
                    {auth.admin ? <td><input type="button" value="delete" onClick={() => deleteServices(data._id)} /></td> : null}
                </tr>
            )
        })
    }

    return (
        <div>
            {auth.admin ? <input type="button" value="add service"
                onClick={() => { navigate('/addService') }}
            /> : null}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Business</th>
                        <th scope="col">City</th>
                        <th scope="col">Contact</th>
                        {auth.admin ? <th scope="col">Delete</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {servicesTable}
                </tbody>
            </Table>
        </div>
    );
}

export default TableServices;
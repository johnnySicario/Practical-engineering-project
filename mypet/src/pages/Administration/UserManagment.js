import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesAction } from '../../redux/actions/getServicesActions.js';
import './UserManagment.css';

function UserManagment(props) {
    const dispatch = useDispatch()
    // const users = useSelector(state => state)

    useEffect(() => {
        // dispatch(getServicesAction())
    }, [dispatch])

    let usersTable = users.map((data , index) => {
        return (
            <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
            </tr>
        )
    })

    return (
        <div>
           <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Business</th>
                        <th scope="col">City</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {usersTable}
                </tbody>
            </Table>
        </div>
    );
}

export default UserManagment;
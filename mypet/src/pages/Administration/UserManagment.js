import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import {getUsersAction} from '../../redux/actions/getUsersActions.js';
import './UserManagment.css';

function UserManagment(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(getUsersAction())
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
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
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
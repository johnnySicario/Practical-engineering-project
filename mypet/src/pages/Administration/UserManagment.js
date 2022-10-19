import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/actions/getUsersActions.js';
import './UserManagment.css';

function UserManagment(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    const deleteUser = (id) => {
        console.log('id ', id)
    }

    const ManageUser = (check) => {
        console.log('check ', check)
    }

    let usersTable = users.map((data, index) => {
        return (
            <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>
                    <input type="checkbox" defaultChecked={data.admin ? true : false} onChange={() => ManageUser(data.admin)}/>
                </td>
                <td> <input type="button" value="delete" onClick={() => deleteUser(data._id)} /> </td>
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
                        <th scope="col">Manager</th>
                        <th scope="col">Delete</th>
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
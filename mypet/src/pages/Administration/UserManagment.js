import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction, getUpdateUserAction, getDeleteUserAction } from '../../redux/actions/getUsersActions.js';
import './UserManagment.css';

function UserManagment(props) {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    const updateUser = (id) => {
        let userToUpdate = users
        let index = userToUpdate.findIndex(user => user._id == id)
        console.log(userToUpdate[index])
        if (index >= 0) {
            dispatch(getUpdateUserAction({ type: 'UPDATE_USERS', payload: userToUpdate[index] }))
        }
    }
    const deleteUser = (id) => {
        dispatch(getDeleteUserAction({ type: 'DELETE_USERS', payload: id }))
    }

    const ManageUser = (check) => {
        console.log('check ', check)
    }

    const change = (e, id, type) => {
        let userToUpdate = users
        let index = userToUpdate.findIndex(user => user._id == id)
        if (index >= 0) {
            if (type === 'username')
                users[index].username = e.target.value
            if (type === 'email')
                users[index].email = e.target.value
            if (type === 'admin')
                users[index].admin = !users[index].admin
        }
        users[index] = userToUpdate[index];
    }

    let usersTable = users.map((data, index) => {
        return (
            <tr key={data._id}>
                <td>{index + 1}</td>
                <td><input type="text" defaultValue={data.username} onChange={(e) => { change(e, data._id, "username") }} /></td>
                <td><input type="text" defaultValue={data.email} onChange={(e) => { change(e, data._id, "email") }} /></td>
                <td>
                    <input type="checkbox" defaultChecked={data.admin ? true : false} onChange={(e) => { change(e, data._id, "admin") }} />
                </td>
                <td> <input type="button" defaultValue="delete" onClick={() => deleteUser(data._id)} /> </td>
                <td> <input type="button" defaultValue="update" onClick={() => updateUser(data._id)} /> </td>
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
                        <th scope="col">Update</th>
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
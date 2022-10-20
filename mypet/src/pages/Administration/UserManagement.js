import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction, getUpdateUserAction, getDeleteUserAction } from '../../redux/actions/getUsersActions.js';
import UserManageComp from './userManage.js';
import './UserManagement.css';

const UserManagement = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)

    console.log(users);

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

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
                    {
                        users.map((item , index) => {
                            return <tr key={item._id}><UserManageComp data={item} index={index +1}/></tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UserManagement;
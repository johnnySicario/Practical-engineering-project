import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction, getUpdateUserAction, getDeleteUserAction } from '../../redux/actions/getUsersActions.js';
import UserManageComp from './userManage.js';
import './UserManagement.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const UserManagement = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const [search, setSearch] = useState();
    const [usersSearch, setusersSearch] = useState([]);

    useEffect(() => {
        dispatch(getUsersAction())
    }, [dispatch])

    useEffect(() => {
        setusersSearch(users)
    }, [users])

    useEffect(() => {
        let dataFilter = users.filter((searchInput) => {
            if (search === '') {
                return searchInput;
            }
            if (searchInput.username.toLowerCase().includes(search) ||
                searchInput.email.toLowerCase().includes(search)) {
                return searchInput
            }
        })
        setusersSearch(dataFilter)
    }, [search])

    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    };

    return (
        <div>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-sm">Search:</InputGroup.Text>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={inputHandler}
                />
            </InputGroup> <br />
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
                        usersSearch.map((item, index) => {
                            return <tr key={item._id}><UserManageComp data={item} index={index + 1} /></tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UserManagement;
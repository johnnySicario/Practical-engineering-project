import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { api } from './../api';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { getAllContacts, getDeleteContact } from './../../redux/actions/getCommentsActions';

function UserContact(props) {
    const dispatch = useDispatch()
    const [mail, setMail] = useState([])
    const auth = useSelector(state => state.auth.auth)
    const comments = useSelector(state => state.comments.comments)
    const commentsLoading = useSelector(state => state.comments.commentsLoading)
    const [search, setSearch] = useState("");
    const [mailSearch, setMailSearch] = useState([]);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(getAllContacts())
            setMail(comments);
            setMailSearch(comments);
        }

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        let dataFilter = comments.filter((searchInput) => {
            if (search === '') {
                return searchInput;
            }
            if (searchInput.name.toLowerCase().includes(search) ||
                searchInput.mail.toLowerCase().includes(search)) {
                return searchInput
            }
        })
        setMailSearch(dataFilter)
    }, [comments , search])

    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    }

    const deleteContact = async (id) => {
        dispatch(getDeleteContact(id))
        setStart(true)
    }

        console.log(mailSearch);
    let contactTable = mailSearch.map((data, index) => {
        return (
            <tr key={"keyOf" + index + "contactTable" + index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.mail}</td>
                <td>{data.message}</td>
                {auth.admin ? <td><input type="button" value="delete" onClick={() => deleteContact(data._id)} /></td> : null}
            </tr>
        )
    })

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
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Message</th>
                        {auth.admin ? <th scope="col">Delete</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {contactTable}
                </tbody>
            </Table>
        </div>
    );
}

export default UserContact;
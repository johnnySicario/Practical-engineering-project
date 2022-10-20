import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { api } from './../api';

function UserContact(props) {
    const [mail, setMail] = useState([])
    const auth = useSelector(state => state.auth.auth)
    useEffect(() => {
        async function fetchData() {
            let resp = await axios.get(`${api}/contact`)
            setMail(resp.data);
        }

        fetchData();
    }, [mail]);

    const deleteContact = async (id) => {
        await axios.delete(`${api}/contact/${id}`)
        let newMail = mail.filter(mail => mail.id !== id)
        setMail(newMail);
    }

    let contactTable = mail.map((data, index) => {
        return (
            <tr key={"key" + index + "contactTable"}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.mail}</td>
                <td>{data.massage}</td>
                {auth.admin ? <td><input type="button" value="delete" onClick={() => deleteContact(data._id)} /></td> : null}
            </tr>
        )
    })

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Massage</th>
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
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesAction, DeleteServicesAction } from '../../redux/actions/getServicesActions.js';

const TableServices = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const services = useSelector(state => state.services.services)
    const auth = useSelector(state => state.auth.auth)
    const [search, setSearch] = useState();
    const [servicesSearch, setServicesSearch] = useState([]);

    useEffect(() => {
        setServicesSearch(services)
    }, [services])

    useEffect(() => {
        let dataFilter = services.filter((searchInput) => {
            if (search === '') {
                return searchInput;
            }
            if (searchInput.name.toLowerCase().includes(search) ||
                searchInput.city.toLowerCase().includes(search) ||
                searchInput.contact.toLowerCase().includes(search)) {
                return searchInput
            }
        })
        setServicesSearch(dataFilter)
    }, [search])

    useEffect(() => {
        dispatch(getServicesAction())
    }, [dispatch])

    const deleteServices = (id) => {
        dispatch(DeleteServicesAction({ type: 'DELETE_SERVICES', payload: id }))
    }

    const inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    };

    let servicesTable = servicesSearch.map((data, index) => {
        return (
            <tr key={"keyOf" + index + "servicesTable" + index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.city}</td>
                <td>{data.contact}</td>
                {auth.admin ? <td><input type="button" value="delete" onClick={() => deleteServices(data._id)} /></td> : null}
            </tr>
        )
    })


    return (
        <div>
            {auth.admin ? <input type="button" value="add service"
                onClick={() => { navigate('/addService') }}
            /> : null} <br />

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
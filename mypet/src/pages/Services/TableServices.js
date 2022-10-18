import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import utilsServices from '../../utils/utilsServices.js';

function TableServices(props) {

    const [services, setServices] = useState([])

    const url = "http://localhost:8000/service";

    useEffect(() => {
        let dbData = async () => {
            let dataService = await utilsServices.getAll(url)
            setServices(dataService.data);
        }

        dbData()
    }, [])

    let servicesTable = services.map((data,index) => {
        return (
            <tr key={data._id}>
                <td>{index}</td>
                <td>{data.name}</td>
                <td>{data.city}</td>
                <td>{data.contact}</td>
            </tr>
        )
    })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Business</th>
                        <th scope="col">City</th>
                        <th scope="col">Contact</th>
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
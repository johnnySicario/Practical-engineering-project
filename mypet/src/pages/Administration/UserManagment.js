import React from 'react';
import './UserManagment.css';

function UserManagment(props) {
    return (
        <div>
            <div class="btn-group" role="group" aria-label="Default button group">
  <button type="button" class="btn btn-outline-dark">add</button>
  <button type="button" class="btn btn-outline-dark">delete</button>
  <button type="button" class="btn btn-outline-dark">update</button>
</div>
            <table class="table">
                <thead>
                    <tr>
                        <th>check</th>
                        <th scope="col">First</th>
                        <th scope="col">#</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className='checkBoxUser'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </td>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td className='checkBoxUser'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </td>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td className="checkBoxUser">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                        </td>
                        <th scope="row">3</th>
                        <td>Jacki</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserManagment;
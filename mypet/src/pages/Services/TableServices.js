import React from 'react';

function TableServices(props) {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Business</th>
                        <th scope="col">City</th>
                        <th scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>המספרה של מרקו</td>
                        <td>בית דגן</td>
                        <td>0547747789</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>בית אימוץ אביאל</td>
                        <td>פרדס חנה</td>
                        <td>jonathan@gmail.com</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>חולון</td>
                        <td>www.pet.com</td>
                    </tr>
                </tbody>
            </table> 
        </div>
    );
}

export default TableServices;
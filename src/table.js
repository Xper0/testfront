import React from "react";

export default  tabledata => (

            <table cellSpacing="25px">
                <thead>
                <tr>
                    <th onClick={tabledata.sorting.bind(null ,'id')}>id</th>
                    <th onClick={tabledata.sorting.bind(null ,'firstName')}>firstName</th>
                    <th onClick={tabledata.sorting.bind(null ,'lastName')}>lastName</th>
                    <th onClick={tabledata.sorting.bind(null ,'email')}>Email</th>
                    <th onClick={tabledata.sorting.bind(null ,'phone')}>phone</th>

                </tr>
                </thead>
                <tbody>
                    {
                        tabledata.datas.map(item => (
                        <tr key={item.id + item.email } onClick={tabledata.onRowselect.bind(null, item)}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>))
                    }

                </tbody>
            </table>


)

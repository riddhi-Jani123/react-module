
import React from 'react'
class UserDetail extends React.Component{

    render() {
        return(

            <table id="table">
                <tr>
                    <th>Company ID </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>User ID</th>
                    <th>Greeting</th>
                    <th>Screen Name</th>
                    <th>Email Address</th>
                    <th>Actions</th>
                </tr>
            </table>
        )
    }
}

export default UserDetail;
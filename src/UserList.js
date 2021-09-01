import React, {useState, useEffect} from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(reponse => setUsers(reponse.data))
        .catch(err => console.log(err))
    }
    )
    return (
        <div className="container">
          <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th> Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Website</th>
      <th>Address<br></br>
        Street
      </th>
    </tr>
  </thead>
            {users.map(user=>   <tbody>
   <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.address.street}</td>
    </tr>
    </tbody>)}
    </Table>
        </div>
    )
}

export default UserList

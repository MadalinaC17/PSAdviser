import react  from 'react';
import Form from "../PopUp/Form";
import {db} from "../../firebase";
import React, { useState, useEffect } from "react";
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function ViewClients() 
{
  const [client, setClient] = useState([]);
  const fetchClient = async () => {
    const response = db.collection("newclient");
    const data = await response.get();
    data.docs.forEach((item) => {
      setClient([...client, item.data()]);
    });
  };
  useEffect(() => {
    fetchClient();
  }, []);

  {
      return(
    client && client.map(client=>{
        return(

            <Table striped bordered hover>
<thead>
<tr>
    <th>Name</th>
    <th>Phone Number</th>
    <th> View Documents </th>
    <th> Notes </th>

</tr>
</thead>
<tbody>
    <td>
        {client.name}
        
    </td>
    <td>
        {client.phonenumber}
    </td>
</tbody>
</Table>
            
          )
        })
      )
      }
}

export default ViewClients;

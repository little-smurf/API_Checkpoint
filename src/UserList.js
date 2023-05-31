import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setListOfUsers(response.data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
  <div>
    {listOfUsers.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    ))}
  </div>
);}
  
export default UserList;  
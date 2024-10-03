


import React, { useEffect, useState } from 'react';
import Search from './Search'

function TablePage() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData')) ;
    setUserData(storedData);
  }, []);

  const filteredData = userData.filter(user => 
    user.username.includes(searchTerm.toLowerCase()) 
  );

  return (
    <div>
      <h2>User Data Table</h2>
      <Search>
      <input
        type="text"
        placeholder="Search by username or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      </Search>

      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;

import React, { useEffect, useState } from 'react';
import Search from './Search';

function TablePage() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editIndex, setEditIndex] = useState(null); // Track the row being edited
  const [editedUser, setEditedUser] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
  }); // Store edited user details

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  // Filter users based on search term
  const filteredData = userData.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete user
  const handleDelete = (index) => {
    const updatedData = [...userData];
    updatedData.splice(index, 1); // Remove user at the given index
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
  };

  // Handle edit button click to enable in-line editing
  const handleEdit = (index) => {
    setEditIndex(index); // Set the row being edited
    setEditedUser(userData[index]); // Populate input fields with the selected user data
  };

  // Handle input changes during in-line editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  // Save the updated user data
  const handleSave = (index) => {
    const updatedData = [...userData];
    updatedData[index] = editedUser; // Update user data with the new values
    setUserData(updatedData);
    localStorage.setItem('userData', JSON.stringify(updatedData));
    setEditIndex(null); // Exit edit mode
  };

  return (
    <div>
      <h2 className='user-data'>User Data Table</h2>

      <Search setSearchTerm={setSearchTerm} />

      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>country</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              {/* Check if the current row is in edit mode */}
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="username"
                      value={editedUser.username}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={editedUser.email}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      name="password"
                      value={editedUser.password}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      name="phone"
                      value={editedUser.phone}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <select
                      name="gender"
                      value={editedUser.gender}
                      onChange={handleInputChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </td>
                  <td>
                  <select
                      name="country"
                      value={editedUser.country}
                      onChange={handleInputChange}
                    >
                      <option value="male">uk</option>
                      <option value="female">england</option>
                      <option value="other">germany</option>
                      <option value="other">india</option>
                    </select>
                  </td>
                  <td>
                    <button className='bg-green-500' onClick={() => handleSave(index)}>Save</button>
                  </td>
                  <td>
                    <button className='bg-gray-500' onClick={() => setEditIndex(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.phone}</td>
                  <td>{user.gender}</td>
                  <td>{user.country}</td>

                  <td>
                    <button className='bg-red-500' onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                  <td>
                    <button className='bg-yellow-500' onClick={() => handleEdit(index)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;























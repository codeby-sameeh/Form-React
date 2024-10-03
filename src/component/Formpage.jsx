
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'

function FormPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {

    const existingData = JSON.parse(localStorage.getItem('userData')) ;

    const newData = [...existingData, { username, email }];
    
    localStorage.setItem('userData', JSON.stringify(newData));

    navigate('/table');
  };

  return (
    <div className='form-main'>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       <Button>
        <button type="submit">Submit</button>
       </Button>
      </form>
    </div>
  );
}

export default FormPage;








































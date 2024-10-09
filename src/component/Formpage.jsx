import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

function FormPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState(''); // Add state for country
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    const existingData = JSON.parse(localStorage.getItem('userData')) || []; // Handles case when localStorage is empty
    const newData = [...existingData, { username, email, password, phone, gender, country }];
    localStorage.setItem('userData', JSON.stringify(newData));
    navigate('/table');
  };

  return (
    <div className='form-top'>
      <div className='form-main'>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
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
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className='gender-box'>
            <label>Gender:</label>
            <input
              type="radio"
              value="male" // Set correct value
              onChange={(e) => setGender(e.target.value)}
              required
              id='male'
              name='gender'
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              value="female" // Set correct value
              onChange={(e) => setGender(e.target.value)}
              required
              id='female'
              name='gender'
            />
            <label htmlFor="female">Female</label>

            <input
              type="radio"
              value="other" // Set correct value
              onChange={(e) => setGender(e.target.value)}
              required
              id='other'
              name='gender'
            />
            <label htmlFor="other">Other</label>
          </div>
          <div className='select-box'>
            <label htmlFor="country">Country:</label>
            <select
              name="country"
              id="country"
              value={country} // Bind the value to state
              onChange={(e) => setCountry(e.target.value)} // Handle select option
              required
            >
              <option value="" disabled>Select your country</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
              <option value="germany">Germany</option>
              <option value="canada">Canada</option>
            </select>
          </div>
          <Button>
            <button type="submit">Submit</button> {/* Ensure there's a submit button */}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FormPage;








































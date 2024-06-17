import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import logo from './image.jpg'; // Adjust the path as necessary

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    amount: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/payment');
  };

  return (
    <div>
    <p className='text'> Welcome to Lottery 365</p>
    <div className="form-container">
       
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo" className="logo" />
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact No.:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></div>
  );
};

export default Form;

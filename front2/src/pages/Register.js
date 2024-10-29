import React, { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/user/addUser`, {
        firstName,
        lastName,
        email,
        password,
        phone,
      });
      
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate('/login'); 
      }, 2000);
      
    } catch (error) {
      console.error("Error:", error);
     
       toast.error("An unexpected error occurred.");
    }
  };

  return (
    <Layout>
      <div className="register">
        <h2>Register</h2>
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              id="firstNameInput"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              id="lastNameInput"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              id="emailInput"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              id="phoneInput"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="passwordInput"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-success me-2">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;

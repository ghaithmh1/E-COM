import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../redux/AuthContext'; 
import "./log.css"
import { Button } from '@mui/material';

const Login = () => {
    const { login } = useAuth(); 
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/user/login`, { email, password });
            if (res.data && res.data.success) {
                toast.success("Connection successful!");

                if (rememberMe) {
                    localStorage.setItem('email', email);
                } else {
                    localStorage.removeItem('email');
                }

                login(); 
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                toast.error(res.data.msg || "Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(error.response?.data?.msg || "An unexpected error occurred.");
        }
    };

    return (
        <Layout>
      <div className="register">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="rememberMeCheck"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="rememberMeCheck">Remember me</label>
          </div>
          <Button color="primary" type="submit" > Login </Button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;

import React from 'react';
import Layout from '../layout/Layout';
import { NavLink } from 'react-router-dom'; 

const PageNotFound = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="title">404</h1>
        <h2 className="heading">Page Not Found</h2>
        <NavLink to="/" className="btn">Go Back to Home</NavLink>
      </div>
    </Layout>
  );
};

export default PageNotFound;

import React from 'react';
import Layout from './../components/Layout';
import { NavLink } from 'react-router-dom'; 

const Product = () => {
  return (
    <Layout>
      <div className="pnf">
        <h1 className="title">THis is products page</h1>
        
        <NavLink to="/" className="btn">Go Back to Home</NavLink>
      </div>
    </Layout>
  );
};

export default Product;

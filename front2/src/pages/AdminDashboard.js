import React from 'react';
import Layout from "../layout/Layout"
import Sidebar from '../tools/Sidebar';
import NotApproved from '../components/NotApproved';
import AdminCard from '../tools/AdminCard';
import UsersList from '../components/UsersList';
import UserL from '../components/UserL';




const Admin =() => {

    return (
        <Layout>
            <div className="webpage-container">
      <Sidebar />
      <div className="webpage-main-content">
      <UserL/>
      </div>
    </div>
            
            
        


        </Layout>
    )
}

export default Admin ;
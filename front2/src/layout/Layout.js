import React from 'react';
import Header from "./Header";
import Header2 from "./HeaderUser";
import HeaderAdmin from "./HeaderAdmin"; 
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../redux/AuthContext'; 

const Layout = (props) => {
    const { isLoggedIn, user } = useAuth();
    let header;

    console.log("user role ",  user.role)

    if (isLoggedIn && user.role === 'admin') { 
        header = <HeaderAdmin />;
    } else if (isLoggedIn && user.role === 'user') {
        header = <Header2 />;
    } else {
        header = <Header />;
    }

    return (
        <div>
            <div className="App">
                {header}
            </div>
            <ToastContainer />
            <main style={{ minHeight: "70vh" }}>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;

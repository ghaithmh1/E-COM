import React from 'react';
import Header from "./Header";
import Header2 from "./Header2";
import Footer from "./Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../redux/AuthContext';

const Layout = (props) => {
    const { isLoggedIn } = useAuth(); 

    return (
        <div>
            <div className="App">
                {isLoggedIn ? <Header2 /> : <Header />}
            </div>
            <ToastContainer />
            <main style={{ minHeight: "70vh" }}>{props.children}</main>
            <Footer />
        </div>
    );
}

export default Layout;

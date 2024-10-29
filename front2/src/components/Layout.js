import react from 'react' ;
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout =(props) => {

    return (
        <div>
    
            <Header/>
            <ToastContainer />
            <main style={{minHeight: "70vh"}}>{props.children}</main>
            
            <Footer/>
         
        </div>
    )
}

export default Layout ;
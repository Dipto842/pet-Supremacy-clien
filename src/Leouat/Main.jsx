import { Outlet } from "react-router-dom";
import Nav from "./ShearePages/Navbar/Nav";
import Footer from "./ShearePages/footer/Footer";



const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
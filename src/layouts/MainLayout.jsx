import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout({ children }) {
    return (
        <>
        <Navbar />
        <main className="grow  py-10">
           <Outlet />
        </main>
        <Footer />
        </>
    )
}
export default MainLayout;
import {Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <WrapperRoutes>
                <Route path= "/" element= {<Home />}/>
                <Route path= "/cart" element= {<Cart />}/>
            </WrapperRoutes>
            <Footer />
        </BrowserRouter>
    )
}
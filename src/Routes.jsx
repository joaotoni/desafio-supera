import {Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CartProvider from "./Context/CartContext/CartContext";
import Cart from "./Pages/Cart";
import Done from "./Pages/Done";
import Home from "./Pages/Home";

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <CartProvider>
                <WrapperRoutes>
                    <Route path= "/" element= {<Home />}/>
                    <Route path= "/cart" element= {<Cart />}/>
                    <Route path= "/done" element= {<Done />}/>
                </WrapperRoutes>
            </CartProvider>
            <Footer />
        </BrowserRouter>
    )
}
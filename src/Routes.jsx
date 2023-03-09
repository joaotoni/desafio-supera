import {Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

export default function Routes(){
    return(
        <BrowserRouter>
            <Header />
            <WrapperRoutes>
                <Route path= "/" element= {<Home />}/>
            </WrapperRoutes>
            <Footer />
        </BrowserRouter>
    )
}
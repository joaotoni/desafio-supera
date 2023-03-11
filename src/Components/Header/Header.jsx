import { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "../../Assets/Icons/cart-icon.svg"
import { CartContext } from "../../Context/CartContext/CartContext";
import { Badge } from "@mui/material";

export default function Header(){
    // const { productsCart } = useContext(CartContext)
    // const itemsCount = Object.keys(productsCart.productsCart).length
    return(
        <header>
            <nav className="flex items-center justify-evenly p-4">
                <div className="">
                    <Link to={"/"}>
                        <h1 className="text-white text-[32px]">Ofertão</h1>
                    </Link>
                </div>
                <div>
                    <Link to={"/cart"}>
                        {/* <Badge badgeContent={productsCart > 0 && <span>({itemsCount})</span>} color="primary"> */}
                            <img on src={Cart} alt="" width={50} />
                        {/* </Badge> */}
                    </Link>
                </div>
            </nav>
        </header>
    )
}
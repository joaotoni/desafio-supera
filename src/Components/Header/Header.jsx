import { Link } from "react-router-dom";
import Cart from "../../Assets/Icons/cart-icon.svg"

export default function Header(){
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
                        <img on src={Cart} alt="" width={50} /> 
                    </Link>
                </div>
            </nav>
        </header>
    )
}
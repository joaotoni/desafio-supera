import { Link } from "react-router-dom";
import Cart from "../../Assets/Icons/cart-icon.svg"

export default function Header(){
    return(
        <header>
            <nav className="flex items-center justify-evenly p-4  bg-gradient-to-b from-orange-900 to-orange-500 mb-2 md:justify-between">
                <div className="">
                    <Link to={"/"}>
                        <h1 className="text-white text-[32px] font-bold">GAMESROOM</h1>
                    </Link>
                </div>
                <div>
                    <Link to={"/cart"}>
                        <img src={Cart} alt="" width={50} /> 
                    </Link>
                </div>
            </nav>
        </header>
    )
}
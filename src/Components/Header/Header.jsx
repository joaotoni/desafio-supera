import Cart from "../../Assets/Icons/cart-icon.svg"

export default function Header(){
    return(
        <header>
            <nav className="flex items-center justify-evenly p-4">
                <div className="">
                    <button>
                        <h1 className="text-white text-[32px]">Ofertão</h1>
                    </button>
                </div>
                <div>
                    <button>
                        <img src={Cart} alt="" width={50} />
                    </button>
                </div>
            </nav>
        </header>
    )
}
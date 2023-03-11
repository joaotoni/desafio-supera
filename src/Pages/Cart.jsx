import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cart(){
    const {productsCart, removeProductToCart, clearCart} = useContext(CartContext)
    const totalPrice = productsCart.reduce((acc, current) => acc + current.price, 0)

    return(
        <main className="">
            <section className="flex flex-col  justify-center items-center">  
                <span className="text-white font-bold text-[24px]">Resumo do pedido</span>
                <div className="flex flex-col text-center bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 p-4 rounded-[12px]">
                    <span className="text-black text-[20px]">O valor total é de R$ {totalPrice.toFixed(2)}</span>
                    <Link to={"/done"}>
                        <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 mx-8" onClick={() => clearCart()}>
                            Finalizar o pedido
                        </p>
                    </Link>
                    <Link> 
                        <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2" onClick={() => clearCart()}>
                            Limpar o carrinho de compras
                        </p>
                    </Link>
                </div>
                <div>
                    <h3>Produtos:</h3>
                    {productsCart.map((card) =>(
                        <div className="p-4  bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 flex flex-wrap items-center justify-center text-center rounded-[12px] w-[300px] mb-6 " key={card.id}>
                            <div>
                                <img className="rounded-[12px]" src={`/src/Assets/Imgs/${card.image}`} alt="" />
                            </div>
                            <div className="w-[250px]">
                                <h2 className="text-black text-[16px] font-bold">{card.name}</h2>
                                <p className="text-black text-[16px]">Pontuação: {card.score}</p>
                                <p className="text-black text-[16px]">R${(card.price*card.qtd).toFixed(2)}</p>
                                <p className="text-black text-[16px]">Quantidade {card.qtd}</p>
                                <button className="text-white bg-black p-2 rounded-xl text-[18px] mt-2" onClick={() => removeProductToCart(card.id)}>Remover do carrinho</button>
                            </div>
                        </div>
                    ))}  
                </div>
            </section>
        </main>
    )
}
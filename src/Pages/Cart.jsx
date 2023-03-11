import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";

export default function Cart(){
    const {productsCart, removeProductToCart, clearCart} = useContext(CartContext)
    const totalPrice = productsCart.reduce((acc, current) => acc + current.price, 0)

    return(
        <main className="">
            <section className="flex flex-col  justify-center items-center">  
                <div className="flex flex-col text-center bg-[#b2b4b4] p-4 rounded-[12px]">
                    <span className="text-black text-[24px]">Total:</span>
                    <span className="text-black text-[20px]">R$ {totalPrice.toFixed(2)}</span>
                    <button className="text-black bg-[#7ccbfc] p-2 rounded-xl text-[22px] mt-2" onClick={() => clearCart()}>
                        Limpar o carrinho de compras
                    </button>
                </div>
                <div>
                    <h3>Produtos:</h3>
                    {productsCart.map((card) =>(
                        <div className="p-4  bg-[#b2b4b4] flex flex-wrap items-center justify-center text-center rounded-[12px] w-[300px] mb-6 " key={card.id}>
                            <div>
                                <img className="rounded-[12px]" src={`/src/Assets/Imgs/${card.image}`} alt="" />
                            </div>
                            <div className="w-[250px]">
                                <h2 className="text-[#3299f5] text-[28px]">{card.name}</h2>
                                <p className="text-[#044d79] text-[22px]">A pontuação do jogo é de {card.score}</p>
                                <p className="text-[#044d79] text-[22px]">Esse jogo está apenas por R${(card.price*card.qtd).toFixed(2)}</p>
                                <p>Quantidade {card.qtd}</p>
                                <button className="text-[#0495f0] bg-[#7ccbfc] p-2 rounded-xl text-[22px] mt-2" onClick={() => removeProductToCart(card.id)}>Remover do carrinho</button>
                            </div>
                        </div>
                    ))}  
                </div>
            </section>
        </main>
    )
}
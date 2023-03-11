import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";

export default function Cart(){
    const {productsCart, removeProductToCart, clearCart} = useContext(CartContext)
    const totalPrice = productsCart.reduce((acc, current) => acc + current.price, 0)

    return(
        <main className="">
            <section>
                <h3>Produtos:</h3>
                <div>
                    {productsCart.map((card) =>(
                        <div className="p-4 mx-4 bg-[#b2b4b4] flex flex-wrap items-center justify-center text-center rounded-[12px] w-[300px]" key={card.id}>
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
                <div>
                    <span className="bg-pink-800">R$ {totalPrice.toFixed(2)}</span>
                    <button className="bg-pink-800" onClick={() => clearCart()}>
                        Limpar o carrinho de compras
                    </button>
                </div>
            </section>
        </main>
    )
}
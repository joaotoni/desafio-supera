import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import FormatValue from "../Utils/FormatValue";

export default function Cart(){
    const {productsCart, removeProductToCart, clearCart} = useContext(CartContext)
    const totalPrice = productsCart.reduce((acc, current) => acc + current.price, 0)

    if(!productsCart.length){
        return(
            <section className="flex flex-col text-center justify-center items-center pt-10">
                <div className="bg-gradient-to-b from-orange-900 to-orange-400 p-2 mx-4 rounded-xl sm:p-6">
                    <h1 className="text-white font-bold text-[24px] sm:pb-2">Carrinho vazio, vamos as compras?</h1>
                    <Link to={"/"}>
                        <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 mx-[80px]">Voltar aos Produtos</p>
                    </Link>
                </div>
            </section>
        )
    }

    return(
        <main className="">
            <section className="flex flex-col justify-center items-center  md:flex-row-reverse md:justify-around md:items-start">  
                <div className="flex flex-col mt-6 text-center bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 p-4 rounded-[12px] md:p-12">
                    <span className="text-white font-bold text-[24px] md:pb-4">Resumo do pedido</span>
                    <span className="text-black text-[20px] md:pb-4">O valor total é de R$ {FormatValue(totalPrice.toFixed(2))}</span>
                    <Link to={"/done"}>
                        <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 mx-8 md:mb-4" onClick={() => clearCart()}>
                            Finalizar o pedido
                        </p>
                    </Link>
                    <Link> 
                        <p className="text-white bg-black p-2 rounded-xl text-[18px] mt-2 md:mb-4" onClick={() => clearCart()}>
                            Limpar o carrinho de compras
                        </p>
                    </Link>
                </div>
                <div>
                    <h3>Produtos:</h3>
                    {productsCart.map((card) =>(
                        <div className="p-4  bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 flex flex-wrap items-center justify-center text-center rounded-[12px] w-[300px] mb-6 md:flex-nowrap md:w-[800px] md:justify-around md:items-stretch" key={card.id}>
                            <div>
                                <img className="rounded-[12px] md:w-[400px]" src={`/src/Assets/Imgs/${card.image}`} alt="" />
                            </div>
                            <div className="w-[250px] md:w-[500px] ">
                                <h2 className="text-black text-[16px] font-bold md:text-[24px] md:pb-4">{card.name}</h2>
                                <p className="text-black text-[16px]  md:text-[22px] md:pb-4">Pontuação: {card.score}</p>
                                <p className="text-black text-[16px] md:text-[22px] md:pb-4">{FormatValue(card.price*card.qtd)}</p>
                                <p className="text-black text-[16px]  md:text-[22px] md:pb-4">Quantidade {card.qtd}</p>
                                <button className="text-white bg-black p-2 rounded-xl text-[18px] mt-2  md:text-[22px]" onClick={() => removeProductToCart(card.id)}>Remover do carrinho</button>
                            </div>
                        </div>
                    ))}  
                </div>
            </section>
        </main>
    )
}
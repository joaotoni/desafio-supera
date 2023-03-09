import List from "../../products.json"
import List2 from "../../products2.json"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";

export default function Card({info}){

    return(
        <div className="p-4 mx-4 bg-[#b2b4b4] flex flex-wrap items-center justify-center text-center rounded-[12px]" >
            <div>
                <img className="rounded-[12px]" src={`/src/Assets/Imgs/${info.image}`} alt="" />
            </div>
            <div className="w-[250px]">
                <h2 className="text-[#3299f5] text-[28px]">{info.name}</h2>
                <p className="text-[#044d79] text-[22px]">Pontuação: {info.score}</p>
                <p className="text-[#044d79] text-[22px]">R${info.price}</p>
                <button className="text-[#0495f0] bg-[#7ccbfc] p-2 rounded-xl text-[22px] mt-2" onClick={() => addProducToCart(info)}>Adicionar no carrinho</button>  
            </div>
        </div>
    )
}
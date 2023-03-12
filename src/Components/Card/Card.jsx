import { useCallback, useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import FormatValue from "../../Utils/FormatValue";
import { toast } from "react-toastify";

export default function Card({info}){
    const { addProductToCart } = useContext(CartContext);
    const handleAddProductToCart = useCallback (async () => {
        try {
            addProductToCart(info);
            toast.success('Produto adicionado no carrinho')
        } catch {
            toast.error('Erro ao adicionar produto no carrinho')
        }
    }, [addProductToCart, info])
    
    return(
        <div className="p-4 mx-4 bg-opacity-50 bg-gradient-to-b from-orange-900 to-orange-400 flex flex-wrap items-center justify-center text-center rounded-[12px]" >
            <div>
                <img className="rounded-[12px]" src={`/Assets/Imgs/${info.image}`} alt="" />
            </div>
            <div className="w-[250px]">
                <h2 className="text-black text-[16px] font-bold">{info.name}</h2>
                <p className="text-black text-[16px]">Pontuação: {info.score}</p>
                <p className="text-black text-[16px]">{FormatValue(info.price)}</p>
                <button className="text-white bg-black p-2 rounded-xl text-[18px] mt-4" onClick={() => handleAddProductToCart(info)}>Adicionar no carrinho</button>       
            </div>
        </div>
    )
}
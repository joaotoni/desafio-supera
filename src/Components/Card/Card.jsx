import List from "../../products.json"
import List2 from "../../products2.json"

export default function Card(){
    return(
        <section className="flex overflow-x-auto py-2">
            {List.map((card) =>(
                <div className="p-4 mx-2 bg-[#b2b4b4] flex flex-wrap items-center justify-center text-center rounded-[12px]">
                    <div>
                        <img className="rounded-[12px]" src={`/src/Assets/Imgs/${card.image}`} alt="" />
                    </div>
                    <div className="w-[250px]">
                        <h2 className="text-[#3299f5] text-[28px]">{card.name}</h2>
                        <p className="text-[#044d79] text-[22px]">A pontuação do jogo é de {card.score}</p>
                        <p className="text-[#044d79] text-[22px]">Esse jogo está apenas por R${card.price}</p>
                        <button className="text-[#0495f0] bg-[#7ccbfc] p-2 rounded-xl text-[22px] mt-2">Adicionar no carrinho</button>
                    </div>
                </div>
            ))}
            {List2.map((card) =>(
                <div className="p-4 mx-2 bg-[#b2b4b4] flex flex-wrap items-center justify-center text-center rounded-[12px]">
                    <div>
                        <img className="rounded-[12px]" src={`/src/Assets/Imgs/${card.image}`} alt="" />
                    </div>
                    <div className="w-[250px]">
                        <h2 className="text-[#3299f5] text-[28px]">{card.name}</h2>
                        <p className="text-[#044d79] text-[22px]">A pontuação do jogo é de {card.score}</p>
                        <p className="text-[#044d79] text-[22px]">Esse jogo está apenas por R${card.price}</p>
                        <button className="text-[#0495f0] bg-[#7ccbfc] p-2 rounded-xl text-[22px] mt-2">Adicionar no carrinho</button>
                    </div>
                </div>
            ))}
        </section>
    )
}
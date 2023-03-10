import Card from "../Components/Card/Card";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext/CartContext";
import List from "../products.json"

export default function Home(){
  const {
    productsCart = [],
    addProducToCart,
    removeProductToCart,
    clearCart,
  } = useContext(CartContext);

    return(
      <main className="flex py-6">
        <section className="flex overflow-x-auto  py-6">
         {List.map((card) =>(
          <Card info={card} key={card.id} />
          ))}
        </section>
      </main>
    )
}
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../Components/Card/Card";
// import List from "../products.json"
import { products } from "../Mock/products";
export default function Home(){

    return(
      <main >
        <h2 className="text-white text-center text-[28px] font-bold">Conheça os nossos produtos!!</h2>
        <section className="flex py-6">
          <div className="flex overflow-x-auto scrollbar scrollbar-track-[#1d1d1d] py-6">
            {products.map((card) =>(
              <Card info={card} key={card.id} />
            ))}
          </div>
        </section>
        <ToastContainer theme="dark" />
      </main>
    )
}
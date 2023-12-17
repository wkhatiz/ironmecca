import Header from "../components/Header";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  let cart = useContext(CartContext);
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto">
        <div className="w-full h-[70px] lg:h-[100px] p-5">
          <Link to="/">Return To Home Screen</Link>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-1">
          <div className="lg:col-span-2 flex justify-center items-center flex-col">
            {cart.items.map((item, index) => (
              <CartItem key={index} itemId={item.id} />
            ))}
          </div>
          <div className="p-3 lg:border-l-gray-200 lg:border-l-2 lg:border-t-0 lg:mt-0border-t-gray-200 border-t-2 mt-5">
            <p className="pb-2">
              Number Of Items: <span>{cart.getTotalCount()}</span>
            </p>
            <p className="pb-2">
              Total Cost: <span>${cart.getTotalCost().toFixed(2)}</span>
            </p>
            <p className="pb-10">
              Discounts: <span>$0.00</span>
            </p>
            <Link to="/checkout">
              <button className="bg-red-600 text-white p-2 px-3 rounded-md font-bold hover:brightness-50">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Cart;

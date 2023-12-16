import Header from "../components/Header";
import { CartContext } from "../components/CartContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { getItemData } from "../utils/ItemDetails";
import NoPage from "./NoPage";

function Product() {
  let location = useLocation();
  let itemId = location.state.itemId;
  let itemData = getItemData(itemId);
  if (itemData == undefined) {
    alert("error retrieving item data");
    return <NoPage />;
  }
  let cart = useContext(CartContext);
  function addClicked(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    cart.addOneToCart(itemId);
    alert("Item added to cart");
  }
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto pt-5">
        <div className="flex justify-normal items-start">
          <img
            src={itemData.imgSrc}
            className="h-[500px] w-[500px] object-cover p-5"
          ></img>
          <div className="h-[500px] w-[400px] p-5">
            <h1 className="pb-5 text-2xl font-bold">{itemData.title}</h1>
            <p className="pb-10">{itemData.desc}</p>
            <form>
              <button
                onClick={addClicked}
                className="bg-red-600 text-white p-2 rounded-md font-bold hover:brightness-50"
              >
                Add To Cart
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;

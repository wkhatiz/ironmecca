import Header from "../components/Header";
import { CartContext } from "../components/CartContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { getItemData } from "../utils/ItemDetails";
import { Link } from "react-router-dom";
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
      <main className="max-w-[600px] lg:max-w-[900px] mb-10 block mx-auto pt-5">
        <div className="w-full h-[40px] p-2">
          <Link to="/">Return To Home Screen</Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-normal sm:items-start">
          <img
            src={itemData.imgSrc}
            className="h-[400px] w-[80%] sm:h-[300px] sm:w-[300px] lg:h-[500px] lg:w-[500px] object-cover p-5"
          ></img>
          <div className="w-[80%] sm:w-[300px] lg:w-[400px] p-5">
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

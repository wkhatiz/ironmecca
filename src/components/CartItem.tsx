import { getItemData } from "../utils/ItemDetails";
import { CartContext } from "../components/CartContext";
import { useContext } from "react";

type CartItemProps = {
  itemId: string;
};

function CartItem(props: CartItemProps) {
  let { itemId } = props;
  let itemData = getItemData(itemId);
  if (itemData === undefined) {
    alert("Error fetching item data");
    return null;
  }
  let cart = useContext(CartContext);
  return (
    <div className="w-[350px] h-[100px] sm:w-[600px] sm:h-[120px] border border-black rounded-lg relative m-2">
      <button className="absolute top-2 sm:top-4 right-4 text-gray-300 hover:text-black">
        delete
      </button>
      <img
        src={itemData.imgSrc}
        className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] absolute top-[10px] left-3 object-cover"
      ></img>
      <p className="absolute left-[100px] sm:left-[130px] top-2 sm:top-4 text-md sm:text-xl max-w-[170px] sm:max-w-[400px] h-[24pm] overflow-hidden whitespace-nowrap">
        {itemData?.title}
      </p>
      <div className="absolute left-[100px] sm:left-[130px] bottom-2 sm:bottom-4 text-sm sm:text-md">
        <p className="mb-2">Qty: {cart.getItemQuantity(itemId)}</p>
        <button
          onClick={() => {
            cart.addOneToCart(itemId);
          }}
          className="bg-gray-200 rounded-md w-10 mr-3 h-7 sm:h-auto"
        >
          +
        </button>
        <button
          onClick={() => {
            cart.removeOneFromCart(itemId);
          }}
          className="bg-gray-200 rounded-md w-10 h-7 sm:h-auto"
        >
          -
        </button>
      </div>
      <p className="absolute bottom-4 right-4 text-sm sm:text-md">
        <span className="text-gray-300 text-xs">${itemData?.price} each</span> $
        {(itemData?.price * cart.getItemQuantity(itemId)).toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;

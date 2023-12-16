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
    <div className="w-[600px] h-[120px] border border-black rounded-lg relative m-2">
      <button className="absolute top-4 right-4 text-gray-300 hover:text-black">
        delete
      </button>
      <img
        src={itemData.imgSrc}
        className="h-[100px] w-[100px] absolute top-[10px] left-3 object-cover"
      ></img>
      <p className="absolute left-[130px] top-4 text-xl ">{itemData?.title}</p>
      <div className="absolute left-[130px] bottom-4">
        <p className="mb-2">Qty: {cart.getItemQuantity(itemId)}</p>
        <button
          onClick={() => {
            cart.addOneToCart(itemId);
          }}
          className="bg-gray-200 rounded-md w-10 mr-3"
        >
          +
        </button>
        <button
          onClick={() => {
            cart.removeOneFromCart(itemId);
          }}
          className="bg-gray-200 rounded-md w-10"
        >
          -
        </button>
      </div>
      <p className="absolute bottom-4 right-4">
        <span className="text-gray-300">${itemData?.price} each</span> $
        {itemData?.price * cart.getItemQuantity(itemId)}
      </p>
    </div>
  );
}

export default CartItem;

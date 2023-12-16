import { createContext, useState } from "react";
import { getItemData } from "../utils/ItemDetails";

interface CartContextType {
  items: { id: string; quantity: number }[];
  getItemQuantity: (id: string) => number;
  addOneToCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalCost: () => number;
  getTotalCount: () => number;
}

export const CartContext = createContext<CartContextType>({
  items: [],
  getItemQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
  getTotalCount: () => 0,
});

type CartProviderProps = {
  children: JSX.Element[] | JSX.Element;
};

export function CartProvider(props: CartProviderProps) {
  let { children } = props;
  const [cartItems, setCartItems] = useState<
    { id: string; quantity: number }[]
  >([]);

  function getItemQuantity(id: string) {
    const quantity = cartItems.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id: string) {
    const quantity = getItemQuantity(id);
    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function removeOneFromCart(id: string) {
    const quantity = getItemQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else if (quantity !== 0) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id: string) {
    setCartItems((cartItems) =>
      cartItems.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((item) => {
      const itemData = getItemData(item.id);
      if (itemData === undefined) {
        console.log(
          "getTotalCost() failed: An items id was not found in the itemArray"
        );
      } else {
        totalCost += itemData.price * item.quantity;
      }
    });
    return totalCost;
  }

  function getTotalCount() {
    let sum = 0;
    cartItems.map((cartItem) => {
      sum += cartItem.quantity;
    });
    return sum;
  }

  const contextValue = {
    items: cartItems,
    getItemQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    getTotalCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
export default CartProvider;

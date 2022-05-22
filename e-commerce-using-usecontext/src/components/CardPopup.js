import React, { useState, useContext } from "react";
import { store } from "../App";
import AddRemoveButton from "./AddRemoveButton";

const CardPopup = () => {
  const [open, setOpen] = useState(false);
  const [state] = useContext(store);
  const { cartItems, totalPrice } = state;

  return (
    <div>
      <div className={`cart ${open === true && "is-open"}`}>
        <div className="cart-header">
          <div className="cart-header-title">Cart</div>
          <button className="button is-danger" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        <div className="cart-items">
          {totalPrice === 0 ? (
            <div className="cart-empty">You cart is empty!</div>
          ) : (
            Object.keys(cartItems).map((key) => (
              <div key={key} className="cart-item">
                <div className="cart-item-top">
                  <div className="cart-item-title">
                    {cartItems[key].name} - {cartItems[key].category}
                  </div>
                  <AddRemoveButton item={cartItems[key]} />
                </div>
                <div className="cart-item-purchase">
                  {cartItems[key].quantity} x ₹{cartItems[key].price} ={" "}
                  {cartItems[key].quantity * cartItems[key].price}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">Total Price - ₹{totalPrice}</div>
      </div>
      <button className="button" onClick={() => setOpen(true)}>
        Cart.....
      </button>

      {totalPrice > 0 && (
        <div className="cart-popup" onClick={() => setOpen(true)}>
          Item Listed on Cart
        </div>
      )}
    </div>
  );
};

export default CardPopup;

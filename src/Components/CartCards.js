import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const CartCards = () => {
  // const cartItems = useSelector((store) => store.projects.cartProjects) || [];
  const cartItems = useSelector((state) => state.projects.cartProjects);
  return (
    <div className=" flex justify-center items-center">
      <div className="mt-24 m-8 w-[70%]">
        {cartItems.length > 0 ? (
          cartItems.map((project) => <CartCard key={project.id} {...project} />)
        ) : (
          <div>No items in the cart</div>
        )}
      </div>
    </div>
  );
};

export default CartCards;

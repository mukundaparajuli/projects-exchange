import React from "react";
import { PDF_LOGO } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { removeProjectFromCart } from "../Utils/projectsSlice";

const CartCard = (project) => {
  const dispatch=useDispatch();
  const { name, university, subject, projectId, quantity } = project;
  const handleRemove=()=>{
    console.log(projectId)
    dispatch(removeProjectFromCart(projectId))
  }
  return (
    <div className="flex justify-evenly items-center border rounded-md shadow-lg m-4 p-0 ">
      {console.log(name)}
      <div className="bg-slate-200 w-[35%] flex justify-center items-center p-4">
        <img src={PDF_LOGO} alt="" className="h-24 w-24" />
      </div>
      <div className="w-[50%] m-2">
        <h1 className="font-semibold text-3xl">{name}</h1>
        <div className="font-bold italic text-md">
          <h1>{university}</h1>
          <h1>{subject}</h1>
        </div>
      </div>
      <div>
        <button className="border-2 border-black rounded-md bg-green-600 m-2 font-bold text-white p-1 shadow-green-400 w-40 ">
          Buy Now
        </button>
        <div>Quantity: ${quantity}</div>
        <button className="border-2 border-black rounded-md bg-red-600 m-2 font-bold text-white p-1 shadow-red-400 w-40" onClick={()=>handleRemove(projectId)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;

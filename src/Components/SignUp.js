import React, { useState } from "react";

const SignUp = () => {
  const [signedIn, setSignedIn] = useState();
  return (
    <div className="absolut flex justify-center items-center w-full h-[80vh]">
      <div className=" w-3/12 m-8 p-8  bg-amber-500 bg-opacity-20 rounded-lg h-auto">
        {signedIn ? <div className="flex justify-center w-full text-3xl font-semibold">
          Sign In
        </div> :
          <div className="flex justify-center w-full text-3xl font-semibold">
            Sign Up
          </div>}
        <div className="flex justify-center items-center">
          <form action="">
            {" "}
            {!signedIn && <><label htmlFor="firstName" className="sr-only " >
              First Name
            </label>
              <input type="text" name="firstName" id="firstName" placeholder="First Name" className="my-2 p-4 text-lg text-white bg-slate-600 font-bold" />
              <br />
              <label htmlFor="lastName" className="sr-only" placeholder="Last Name">
                Last Name</label>
              <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="my-2 p-4 text-lg text-white bg-slate-600 font-bold" />
            </>}
            <br />
            <label htmlFor="emailAddress" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="my-2 p-4 text-lg text-white bg-slate-600 font-bold" />
            <br />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input type="password" name="password" id="password" placeholder="Password" className="my-2 p-4 text-lg text-white bg-slate-600 font-bold" />
            <br />
            <button className="font-semibold text-white bg-black rounded-lg shadow-xl text-center w-full my-2 p-4 text-xl opacity-70">{signedIn ? "Sign In" : "Sign Up"}</button>
            {signedIn ? <div>Don't have an account yet?<button className="font-bold text-red-600 " onClick={(e) => { setSignedIn(!signedIn); e.preventDefault() }}>Sign Up</button></div>
              : <div>Already a member? <button className="font-bold text-red-600 " onClick={(e) => { setSignedIn(!signedIn); e.preventDefault() }} >Sign In</button></div>
            } </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

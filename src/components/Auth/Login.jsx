import React from "react";
import { useState } from "react";

const Login = ({ handelogin }) => {
  const [email, setemail] = useState("");
  const [pasword, setpasword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Email is ", email);
    // console.log("Pasword is ", pasword);
    handelogin(email, pasword);

    setemail("");
    setpasword("");
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen ">
      <h1 className="font-bold mb-5  w-40 text-center text-3xl">Login Page</h1>
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <h3 className="font-bold text-lg">Log In</h3>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex items-center justify-center flex-col  "
          action=""
        >
          <input
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setemail(e.target.value);
            }}
            required
            className="rounded-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 mt-4 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={pasword}
            onChange={(e) => {
              setpasword(e.target.value);
            }}
            required
            className="rounded-full outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 mt-4 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-7 w-full text-white rounded-full outline-none  border-none bg-emerald-600 hover:bg-emerald-800 font-semibold text-lg py-2 px-8 placeholder:bg-gray-400">
            log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

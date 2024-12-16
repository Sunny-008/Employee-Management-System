import React from "react";
import { useState } from "react";

const Header = (props) => {
  // const [username, setusername] = useState("");
  // if (!data) {
  //   setusername("Admin");
  // } else {
  //   setusername(data.firstName);
  // }

  const logOutuser = () => {
    localStorage.setItem("loggedInUser", "");
    // alert("Are you soure in Log Out");
    // window.location.reload();
    console.log(props.changeUser);
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">username 👋</span>
      </h1>
      <button
        onClick={logOutuser}
        className="bg-red-600 hover:bg-red-500 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

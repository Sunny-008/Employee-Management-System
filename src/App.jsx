import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { getlocalstorage, setlocalStorage } from "./utils/localStorage";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const [userData, setuserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  const handelogin = (email, password) => {
    if (email == "admin@i.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Condidate Please try again");
    }
  };

  return (
    <>
      {!user ? <Login handelogin={handelogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeuser={setuser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeuser={setuser} Data={loggedInUserData} />
      ) : (
        ""
      )}
    </>
  );
};

export default App;

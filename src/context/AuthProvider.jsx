import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { getlocalstorage, setlocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // localStorage.clear();

  const [userData, setuserData] = useState(null);

  useEffect(() => {
    setlocalStorage();
    const { employees } = getlocalstorage();
    setuserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setuserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

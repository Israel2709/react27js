import React, { createContext, useContext, useState, useEffect } from "react";

const KodersContext = createContext();

export function KodersProvider({ children }) {
  const [vipKoders, setVipKoders] = useState([]);
  const rol = localStorage.getItem("role");
  console.log(rol);
  useEffect(() => {
    const getAllKoders = async () => {
      const response = await fetch(
        "https://javascript27g-default-rtdb.firebaseio.com/vipKoders/.json"
      );
      const data = await response.json();
      const kodersArray = Object.keys(data).map((key) => ({
        ...data[key],
        koderKey: key,
      }));

      setVipKoders(kodersArray);
    };
    getAllKoders();
  }, []);

  return (
    <KodersContext.Provider value={rol === "admin" ? vipKoders : []}>
      {children}
    </KodersContext.Provider>
  );
}

export function useKoders() {
  const context = useContext(KodersContext);
  if (!context) {
    throw new Error("useKoders debe utilizarse dentro de un KodersProvider");
  }
  return context;
}

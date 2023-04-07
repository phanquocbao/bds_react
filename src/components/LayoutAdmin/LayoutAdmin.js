import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LayoutAdmin({ children }) {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const login = localStorage.getItem("login");
  //   if (login) {
  //   } else {
  //     navigate("/login");
  //     //   window.location.href;
  //   }
  // }, []);
  return (
    <>
      <div className="min-h-screen bg-blue-gray-50/50">
        <Sidebar /> 
        <div className="p-4 xl:ml-80"><Header /><div className="mt-12">{children}</div></div>
      </div>
    </>
  );
}

export default LayoutAdmin;

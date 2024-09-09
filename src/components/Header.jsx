import { Navbar } from "@material-tailwind/react";
import Logo from "../assets/logo-navbar.svg";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Search from "./Search";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        className="sticky top-0 z-10 h-[80px] max-w-full rounded-none px-4 py-2 lg:px-16 lg:py-4 bg-black"
        shadow={false}
        blurred={false}
      >
        <div className="grid items-center justify-center grid-cols-3 gap-20 -mt-[9px]">
          <img
            src={Logo}
            alt="logo"
            className="w-[126px] h-[64px] cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div>
            <Search />
          </div>
          <div className="flex justify-end gap-3 ">
            <Login />
            <Register />
          </div>
        </div>
      </Navbar>
    </>
  );
}

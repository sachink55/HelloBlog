import React from "react";
import { Button } from "./ui/button";
import logo from "@/assets/logo-white.png";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center h-16 fixed w-full z-20 p-4 bg-white px-5 border-b shadow">
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <div className="w-[500px]">
        <SearchBox />
      </div>

      <div>
        <Button>
          <Link to="" className="rounded-full flex items-center gap-2">
            <MdLogin />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;

import { navbar } from "../data/Data";
import { HiOutlineHeart, HiOutlineUser, HiOutlineLogout, HiOutlineChevronDown } from "react-icons/hi";
import { useEffect, useState, useContext, useRef } from "react";
import ToggleMenu from "./ToggleMenu";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import useWishlistStore from "../store/WishlistStore";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { wishlist } = useWishlistStore();
  const { user, logout, isAuthenticated } = useContext(AuthContext);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`h-[75px] flex items-center justify-between duration-300 transition-shadow ${
        sticky ? "sticky top-0 z-50 shadow-md bg-white" : ""
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-semibold">
          Minitrue
        </Link>
        <div className="items-center gap-5 lg:gap-10 hidden md:flex">
          {navbar.map((item) => (
            <NavLink item={item} key={item.id} />
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <Link to="/wishlist" className="relative">
            <HiOutlineHeart size={25} className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-xs flex items-center justify-center rounded-full">
              {wishlist.length}
            </span>
          </Link>
          <ToggleMenu isCart />
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 focus:outline-none"
            >
              <HiOutlineUser size={25} className="cursor-pointer" />
              <HiOutlineChevronDown size={16} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${isDropdownOpen ? "block" : "hidden"}`}>
              {isAuthenticated ? (
                <>
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <div className="font-medium">{user?.name}</div>
                    <div className="text-gray-500 text-xs">{user?.email}</div>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <HiOutlineLogout className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/signin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <ToggleMenu menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


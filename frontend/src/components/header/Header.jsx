import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { IoMdHeart, IoIosCart } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { GiRunningShoe } from "react-icons/gi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  isMenuOpen,
  isDarkModeOn,
} from "../../store/features/utility/utilitySlice";

const Header = () => {
  const menu = useSelector((state) => state.utility.menuOpen);
  const isDark = useSelector((state) => state.utility.isDarkMode);
  // ---------------- Hooks --------------------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navbar, setNavbar] = useState(false);
  const authStatus = true;
  const wishlist = 0;
  const cart = 0;

  {
    /* // ------------------nav Items------------------ // */
  }
  const navItems = [
    { id: "abcd2", name: "home", slug: "/", active: authStatus, icon: null },
    {
      id: "abce4",
      name: "products",
      slug: "/products",
      active: authStatus,
      icon: null,
    },
    {
      id: "abcf4",
      name: "Hello, signin",
      slug: "/signin",
      active: authStatus,
      icon: <HiUser />,
    },
    {
      id: "abcg5",
      name: "signup",
      slug: "/signup",
      active: authStatus,
      icon: null,
    },
    {
      id: "abch7",
      name: wishlist,
      slug: "/wishlist",
      active: authStatus,
      icon: <IoMdHeart />,
    },
    {
      id: "abcu7",
      name: cart,
      slug: "/cart",
      active: authStatus,
      icon: <IoIosCart />,
    },
  ];

  const changeBg = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <header className={`${navbar && "active"}`}>
      <div className="container">
        <nav>
          {/* // ------------------logo------------------ // */}
          <div className="logo">
            <Link to="/">
              <GiRunningShoe />{" "}
              <span>
                Shoe<span>Store</span>
              </span>{" "}
            </Link>
          </div>
          {/* // ------------------Search Bar Start------------------ // */}
          {/* // ------------------Search Bar End------------------ // */}
          {/* // ------------------Nav Items Start------------------ // */}
          <ul className={`${menu ? "nav_menu | active" : "nav_menu"}`}>
            {navItems &&
              navItems.map((item) =>
                item.active ? (
                  <li className="nav_links_items" key={item.id}>
                    <button onClick={() => navigate(item.slug)}>
                      <span>{item.icon}</span> {item.name}
                    </button>
                  </li>
                ) : null
              )}
            <li className="mode">
              <button onClick={() => dispatch(isDarkModeOn())}>
                {isDark ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </li>
          </ul>
          <button onClick={() => dispatch(isMenuOpen())} className="menu">
            {menu ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
          {/* // ------------------Nav Items End------------------ // */}
        </nav>
       
      </div>
    </header>
  );
};

export default Header;

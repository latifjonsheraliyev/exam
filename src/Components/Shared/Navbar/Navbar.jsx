import React, { useContext } from "react";
import logo from "../../../assets/images/logo/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import bagIcon from "../../../assets/images/icon/bag.png";
import searchIcon from "../../../assets/images/icon/search-normal.png";
import userIcon from "../../../assets/images/icon/user.png";
import { HiOutlineShoppingBag, HiOutlineXMark } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import Form from "../../Form/Form";

import SearchItems from "../../SearchItems/SearchItems";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-toastify";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import MenuShoppingCart from "../../MenuShoppingCart/MenuShoppingCart";

const Navbar = () => {
  const { user, logOut, cartProduct } = useContext(AuthContext);
  const { cart, totalPrice } = cartProduct;
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const handleLogeOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logOut");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto ">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* Mobile Device s*/}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <>
                      <a>{item.name}</a>
                      <ul className="p-2 ">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <NavLink
                              className={({ isActive }) =>
                                isActive ? "active" : "default"
                              }
                              to={subItem.path}
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "default" : "active"
                      }
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
              {user && isAdmin && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/dashboard/admin-home"
                >
                  Dashboard
                </NavLink>
              )}
              {user && !isAdmin && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/dashboard/personal-data"
                >
                  Dashboard
                </NavLink>
              )}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="w-12 h-12" alt="logo" />
          </Link>
        </div>
        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.subItems ? (
                  <>
                    <NavLink
                      to={item.path}
                      className="group-hover:text-primary"
                    >
                      {item.name}
                    </NavLink>
                    <ul className="absolute left-0 top-full hidden group-hover:block bg-base-100 shadow-lg p-2">
                      {item.subItems.map((subItem) => (
                        <>
                          <li key={subItem.name}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) =>
                                isActive ? "default" : "active "
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        </>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink to={item.path}>{item.name}</NavLink>
                )}
              </li>
            ))}
            {user && isAdmin && (
              <NavLink className="mt-2" to="/dashboard/admin-home">
                Dashboard
              </NavLink>
            )}
            {user && !isAdmin && (
              <NavLink className="mt-2" to="/dashboard/personal-data">
                Dashboard
              </NavLink>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-4">
            {/* Search Button */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <img src={searchIcon} alt="bag Icon" />
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <SearchItems />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="text-xl mt-0 font-bold">
                      <HiOutlineXMark />
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* close Modal */}

            {/* Shopping Cart Button */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=""
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              <div className="indicator">
                <span className="indicator-item badge badge-info">
                  {cart?.length}
                </span>
                <img src={bagIcon} alt="bag Icon" />
              </div>
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-center sm:modal-middle"
            >
              <div className="modal-box w-11/12 lg:w-full mx-auto">
                {/* open shopping cart */}
                <MenuShoppingCart />
                <div className="modal-action">
                  <form method="dialog">
                    <button className="text-xl font-bold">
                      <HiOutlineXMark />
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* close Modal */}
            {/* User Button */}
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <img src={userIcon} alt="user Icon" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 pt-3 p-3 shadow"
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-6">
                    <img src={userIcon} alt="user Icon" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-[#0C68F4] text-sm md:text-lg font-normal">
                      {user?.displayName}
                    </p>
                    <p className="font-normal text-black hover:text-[#0C68F4] text-sm text-balance">
                      {user?.email.slice(0, 18)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <HiOutlineShoppingBag />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Orders
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <FaRegHeart />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Wish List
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <AiOutlineDollar />
                  </p>
                  <p className="font-normal text-black text-sm text-balance">
                    Payments
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-black text-sm md:text-lg font-normal">
                    <CiLogout />
                  </p>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  {user ? (
                    <>
                      <button
                        className="hover:text-red-600"
                        onClick={handleLogeOut}
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button
                          className=""
                        // onClick={() =>
                        //   document.getElementById("my_modal_6").showModal()
                        // }
                        >
                          Sign In
                        </button>
                      </Link>

                      {/* <button
                          className=""
                          onClick={() =>
                            document.getElementById("my_modal_6").showModal()
                          }
                        >
                          Sign Up
                        </button> */}
                    </>
                  )}
                  <dialog
                    id="my_modal_6"
                    className="modal modal-center sm:modal-middle"
                  >
                    <div className="modal-box w-11/12 lg:w-full mx-auto">
                      <Form />
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="text-xl font-bold">
                            <HiOutlineXMark />
                          </button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  {/* close Modal */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/shop",
    // subItems: [
    //   { name: "Submenu 1", path: "/products/submenu-1" },
    //   { name: "Submenu 2", path: "/products/submenu-2" },
    // ],
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "FAQ",
    path: "/faqs",
  },
  {
    name: "Contact Us",
    path: "/contactUs",
  },
  {
    name: "About Us",
    path: "/aboutUs",
  },
  {
    name: "Lottery",
    path: "/lottery",
  },
];
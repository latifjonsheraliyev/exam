import React, { useContext, useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import { FaBook, FaBuffer, FaHome, FaList, FaRegHeart, FaUsers, FaWindowRestore } from 'react-icons/fa';
import { MdContactMail, MdFormatListBulletedAdd, MdMenuOpen, MdOutlineAddCard, MdOutlineNotificationsActive } from 'react-icons/md';
import { FaUserPen } from 'react-icons/fa6';
import userPhoto from "../assets/images/logo/user-profile-icon-free-vector.jpg";
import { CiDollar } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GiChipsBag } from 'react-icons/gi';
import { SiSpringsecurity } from 'react-icons/si';
import { CgLogOut } from 'react-icons/cg';
import { toast } from 'react-toastify';
import useAuth from '../Components/Hooks/useAuth/useAuth';
import useAdmin from '../Components/Hooks/useAdmin/useAdmin';

const DashboardLayout = () => {

  const { user, logOut } = useAuth()
  const navigate = useNavigate();

  const handleLogeOut = () => {

    const successSignOut = logOut();
    if (successSignOut) {
      alert("Do you want to logout...?");
      navigate('/')
    }
  }

  // admin
  const [isAdmin] = useAdmin();
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label htmlFor="my-drawer-2" className="btn ml-80 -mb-2 drawer-button bg-white  lg:hidden">
            <MdMenuOpen className='h-8 w-8 '></MdMenuOpen>
          </label>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

            {/* title  */}
            <div className="flex mb-8 gap-2 items-centers pr-8">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || `${userPhoto}`} />{" "}
                </div>
              </div>
              <h1 className="font-bold  pl-3 text-2xl">{user?.displayName}</h1>
            </div>
            {/* Sidebar content here */}
            {
              isAdmin ? <>
                <li >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    } to={"/dashboard/admin-home"}
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    } to={"/dashboard/add-products"}
                  >
                    <MdFormatListBulletedAdd /> Add-items
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    } to={"/dashboard/manage-products"}
                  >
                    <FaList /> Manage Products
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    } to={"/dashboard/manage-orders"}
                  >
                    <FaBook /> Manage Order
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    }
                    to={'/Dashboard/All-Users'}
                  >
                    <FaUsers />  All Users
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    }
                    to={'/Dashboard/blogs'}
                  >
                    <FaBuffer /> Blogs
                  </NavLink>
                </li>
              </> :
                // User Route
                <>
                  <li >
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/personal-data"}
                    >
                      <FaUserPen /> Personal Data
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/payment-instalment"}
                    >
                      <CiDollar />  Payment & Instalment
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/orders"}
                    >
                      <HiOutlineShoppingBag /> Orders ()
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/wish-list"}
                    >
                      <FaRegHeart /> Wish list
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/discount"}
                    >
                      <GiChipsBag /> Discounts
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/security-access"}
                    >
                      <SiSpringsecurity /> Security & access
                    </NavLink>
                  </li>
                  <li className="mt-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                          : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                      } to={"/dashboard/notification"}
                    ><MdOutlineNotificationsActive /> Notification
                    </NavLink>
                  </li>
                  <li className="mt-2"><NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                        : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                    } to={"/dashboard/contact-us"}
                  >
                    <MdContactMail />Contact Us
                  </NavLink>
                  </li>
                </>
            }



            {/* divider  */}
            <div className="divider"></div>


            {/* Logout */}
            <button
              onClick={handleLogeOut}
              className="btn ml-4 rounded-lg bg-error text-white border-white border-2 hover:text-error hover:border-error hover:bg-white text-xl flex items-center "
            // onClick={handleSignOut}
            >
              <CgLogOut className='w-7 h-7 pt-1' /> Log Out
            </button>


          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

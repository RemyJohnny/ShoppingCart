/* eslint-disable react/prop-types */
import Logo from "/assets/image/vinoVelvetLogo.jpg";
import { Form, NavLink } from "react-router-dom";

const Header = ({ cartSize }) => {
  return (
    <div className="flex flex-col items-center border mb-4 sticky top-0 bg-white z-50">
      <div className=" bg-red-700 w-full text-center text-white py-2 animate-bounce">
        Enter Remy000 to get 15% Discount
      </div>
      <div className="flex flex-col-reverse md:flex md:flex-row p-2 border-b w-full  flex-grow justify-between max-w-screen-xl ">
        <div className="flex items-center justify-center flex-grow">
          <div className=" relative md:w-40 flex-shrink-0 hidden md:block">
            <img src={Logo} alt="Logo" className=" w-24 h-24 md:ml-3" />
            <h1 className="text-2xl font-semibold  absolute top-[50%] left-0 font-sans">
              VINO VELVET
            </h1>
          </div>
          <Form
            action="/"
            role="search"
            className="relative   flex-grow md:mt-6 min-w-[10rem]">
            <input
              disabled
              type="search"
              name="q"
              placeholder=" Search vinoVelvet.com "
              className=" py-1 border rounded-xl pl-8 focus:outline-none focus:border-blue-600 bg-slate-50 w-0 min-w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-1 left-1 text-slate-500">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Form>
        </div>

        <div className="flex justify-around items-center border-b md:border-none md:mt-6 mb-2 md:mb-0">
          <ul className="flex gap-4 p-2 ml-4 flex-grow justify-around  md:p-0">
            <li className=" cursor-pointer hover:text-blue-600">
              <NavLink to={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.7}
                  stroke="currentColor"
                  className="w-8 h-8 md:hidden">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className=" hidden md:inline font-semibold">Home</span>
              </NavLink>
            </li>
            <li className=" cursor-pointer hover:text-blue-600">
              <NavLink to="/shop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.7}
                  stroke="currentColor"
                  className="w-8 h-8 md:hidden">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                <button className=" hidden md:inline font-semibold">
                  Shop
                </button>
              </NavLink>
            </li>
            <li className=" md:hidden cursor-pointer hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.7}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </li>
            <li className=" cursor-pointer hover:text-blue-600 relative">
              <NavLink to={"/cart"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.7}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span
                  className={` absolute bottom-[60%] bg-red-700 left-[40%] font-bold text-white text-xs p-1 rounded-[50%]${
                    cartSize > 0 ? " animate-ping" : " animate-none"
                  }`}>
                  {cartSize}
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

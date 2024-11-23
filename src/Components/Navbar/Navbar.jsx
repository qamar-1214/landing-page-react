import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaWhatsappSquare } from "react-icons/fa";

const links = [
  { id: 1, text: "Home", href: "#home" },
  { id: 2, text: "About", href: "#about" },
  { id: 3, text: "Hoodies", href: "#hoodies" },
  { id: 4, text: "Shorts", href: "#shorts" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white">
      {/* Main Navbar for large screens */}
      <div className=" max-w-full flex justify-between h-[65px] lg:h-28">
        <div className="flex-shrink-0 flex items-center pl-4  lg:pl-28">
          <h1 className="voltaire-regular  text-5xl ">
            Ecommerce
            <span className="montecarlo-regular text-primary"> Store</span>
          </h1>
        </div>

        <div className="hidden sm:-my-px sm:ml-6 lg:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-lg uppercase  text-gray-500 hover:text-primary transition-all ease-in-out duration-300 hover:border-primary"
            >
              {link.text}
            </a>
          ))}
        </div>
        <div className="hidden lg:ml-6 lg:flex xmd:items-center ">
          <button
            type="button"
            className="bg-primary text-white h-full w-52  flex justify-center gap-2  items-center px-2  hover:bg-yellow-300 transition-all ease-in-out duration-300 border-none outline-none"
          >
            <FaWhatsappSquare className="text-[green] text-2xl" />
            +92 3457689234
          </button>
        </div>
      </div>
      {/* Secondary Navbar for small screens */}
      <div className="bg-[rgba(0,0,0,1)] lg:hidden absolute top-[55px] py-1 right-4 left-4 z-[999]">
        <div className="flex justify-end items-center px-4 py-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none  bg-primary px-3 py-1 rounded-md shadow-lg voltaire-regular flex font-bold gap-1"
          >
            Menu
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className=" px-2 py-1 flex flex-col gap-8 pb-8 ">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="block text-white py-2 px-3 rounded-md hover:bg-gray-600 hover:text-white transition ease-in-out duration-300"
              >
                {link.text}
              </a>
            ))}
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;

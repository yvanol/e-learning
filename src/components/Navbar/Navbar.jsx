import React from "react";
import { IoMdMenu } from "react-icons/io";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  { id: 4, title: "Our Team", link: "#" },
  { id: 5, title: "Contact Us", link: "#" },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <div className="container py-10 flex justify-between items-center">
        {/* Logo section */}
        <div>
          <h1 className="font-bold text-2xl">CodeCraft Academy</h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menubar.id}>
                <a
                href={menubar.path}
                 className="inline-block py-2 px-3 
                hover:text-secondary relative group"
                >
                    <div className="w-2 h-2 bg-secondary 
                    absolute mr-2 left-1/2 bottom-0 
                    rounded-full
                    group-hover:block hidden">

                    </div>
                {menu.title}</a>
              </li>
            ))}
            <button className="primary-btn">Sign In
            </button>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
         <div className="lg:hidden">
             <IoMdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

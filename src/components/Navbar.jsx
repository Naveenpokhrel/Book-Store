import React from "react";
import { NavLink } from "react-router-dom";
import { TbBrandBlogger, TbHome } from "react-icons/tb";
import { IoLibraryOutline } from "react-icons/io5";
import { PiEnvelopeDuotone } from "react-icons/pi";

const Navbar = ({ setMenuOpened }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <TbHome /> },
    { to: "/shop", label: "Shop", icon: <IoLibraryOutline /> },
    { to: "/blog", label: "Blog", icon: <TbBrandBlogger /> },
    {
      to: "mailto:info@zibooka.com",
      label: "Contact",
      icon: <PiEnvelopeDuotone />,
    },
  ];

  return (
    <nav className="flex flex-col md:flex-row md:items-center md:space-x-10 w-full text-gray-700 text-sm font-medium">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={label}
          to={to}
          onClick={() => setMenuOpened?.(false)}
          className={({ isActive }) =>
            `flex items-center gap-2 py-3 md:py-0 transition duration-200 ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
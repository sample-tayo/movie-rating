import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "Home", gap: true, href: "/" },
    { title: "Movies", src: "movies", gap: true, href: "/movies" },
    { title: "TV Series", src: "Desktop", gap: true, href: "/tv-series" },
    { title: "Upcoming", src: "Office", gap: true, href: "/upcoming" },
    { title: "Logout", src: "Logout", gap: true, href: "/logout" },
  ];

  // Get the current pathname from the window location
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <div
      className={`${
        open ? "w-72 " : "w-30"
      } bg-dark-purple p-5  h-screen border-r-2 rounded-r-xl  pt-8 relative duration-300`}>
      <Image
        width='28'
        height='28'
        alt='control'
        src='/assets/control.png'
        className={`absolute cursor-pointer -right-3 top-9  border-dark-purple border-2 rounded-full  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className='flex gap-2 items-center'>
        <Image
          className={` cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
          height='50'
          width='50'
          src='/assets/tv.png'
          alt='Logo'
        />
        <p
          className={`${
            !open && "hidden"
          } origin-left duration-200 text-black font-extrabold text-sm`}>
          MovieBox
        </p>
      </div>

      <ul className='pt-6'>
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`${
              open ? " p-2" : " p-0"
            } rounded-md  text-gray-900 text-sm font-semibold ${
              Menu.gap ? "mt-9" : "mt-2"
            }`}>
            <Link href={Menu.href} passHref>
              <div
                className={`flex gap-x-4 items-center ${
                  currentPath.startsWith(Menu.href)
                    ? "bg-red-200 text-red-700 cursor-pointer"
                    : "hover:bg-red-200 hover:text-red-700 cursor-pointer"
                }`}>
                <img
                  className=' md:w-6 md:h-6'
                  alt={Menu.src}
                  src={`/assets/${Menu.src}.png`}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

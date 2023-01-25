import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={`bg-transparent top-0 z-[1] relative md:fixed `}>
      <div className="lg:px-20 px-8 py-8 mx-auto md:fixed top-0 left-0 w-full">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer">
            <Link href="/" passHref>
              <Image
                src="/images/logo-mobile.png"
                alt="logo"
                width={"91"}
                height={"60"}
                className="block sm:hidden"
              />
              <Image
                src="/images/logo-desktop.svg"
                alt="logo"
                width={"150"}
                height={"110"}
                className="hidden sm:block"
              />
            </Link>
          </div>

          <div className="flex">
            <button
              type="button"
              onClick={() => setIsNavOpen((prev) => !prev)}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <>
                <svg
                  width="42"
                  height="33"
                  viewBox="0 0 42 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:block"
                >
                  <line
                    x1="18.5"
                    y1="7.5"
                    x2="39.5"
                    y2="7.5"
                    stroke="black"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18.5"
                    y1="16.5"
                    x2="39.5"
                    y2="16.5"
                    stroke="black"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="18.5"
                    y1="25.5"
                    x2="39.5"
                    y2="25.5"
                    stroke="black"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 0.95L9.66 0.95V0.96L3.86 5.05L4 4.43L9.66 8.51V8.53L2 8.53V7.08L6.39 7.08L5.64 7.17L2.1 4.68V4.66L5.64 2.1L6.33 2.35L2 2.35L2 0.95ZM9.36 10.4324L9.36 15.4524H7.96L7.96 11.8824H6.39L6.39 15.0424L4.99 15.0424L4.99 11.8824H3.4L3.4 15.5924H2L2 10.4324L9.36 10.4324ZM1.7 23.6826L6.74 18.1026L6.5 18.5326L2 18.5626L2 17.0926H9.65V17.1526L4.63 22.6126L4.77 22.2926L9.36 22.2626V23.7226L1.7 23.7226V23.6826ZM4.72 26.918C4.48667 26.918 4.26333 26.988 4.05 27.128C3.83667 27.268 3.66333 27.4513 3.53 27.678C3.39667 27.9113 3.33 28.1646 3.33 28.438C3.33 28.738 3.39667 29.0046 3.53 29.238C3.66333 29.4713 3.83667 29.6546 4.05 29.788C4.26333 29.928 4.48667 29.998 4.72 29.998H9.36V31.428H4.69C4.15 31.428 3.67 31.2946 3.25 31.028C2.83667 30.7613 2.51 30.4013 2.27 29.948C2.03667 29.4946 1.92 28.9913 1.92 28.438C1.92 27.8913 2.03667 27.3913 2.27 26.938C2.51 26.4913 2.83667 26.1346 3.25 25.868C3.67 25.6013 4.15 25.468 4.69 25.468H9.36V26.918H4.72Z"
                    fill="black"
                  />
                </svg>
              </>

              <>
                <svg
                  width="56"
                  height="40"
                  viewBox="0 0 70 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block sm:hidden"
                >
                  <line
                    x1="32.5"
                    y1="9.5"
                    x2="66.5"
                    y2="9.5"
                    stroke="black"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <line
                    x1="32.5"
                    y1="23.5"
                    x2="66.5"
                    y2="23.5"
                    stroke="black"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <line
                    x1="32.5"
                    y1="38.5"
                    x2="66.5"
                    y2="38.5"
                    stroke="black"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 1.425L15.49 1.425V1.44L6.79 7.575L7 6.645L15.49 12.765V12.795L4 12.795L4 10.62H10.585L9.46 10.755L4.15 7.02V6.99L9.46 3.15L10.495 3.525L4 3.525V1.425ZM15.04 15.6486L15.04 23.1786H12.94L12.94 17.8236H10.585L10.585 22.5636H8.485L8.485 17.8236L6.1 17.8236L6.1 23.3886H4L4 15.6486L15.04 15.6486ZM3.55 35.5239L11.11 27.1539L10.75 27.7989L4 27.8439V25.6389L15.475 25.6389V25.7289L7.945 33.9189L8.155 33.4389L15.04 33.3939V35.5839H3.55V35.5239ZM8.08 40.377C7.73 40.377 7.395 40.482 7.075 40.692C6.755 40.902 6.495 41.177 6.295 41.517C6.095 41.867 5.995 42.247 5.995 42.657C5.995 43.107 6.095 43.507 6.295 43.857C6.495 44.207 6.755 44.482 7.075 44.682C7.395 44.892 7.73 44.997 8.08 44.997H15.04V47.142H8.035C7.225 47.142 6.505 46.942 5.875 46.542C5.255 46.142 4.765 45.602 4.405 44.922C4.055 44.242 3.88 43.487 3.88 42.657C3.88 41.837 4.055 41.087 4.405 40.407C4.765 39.737 5.255 39.202 5.875 38.802C6.505 38.402 7.225 38.202 8.035 38.202H15.04V40.377H8.08Z"
                    fill="black"
                  />
                </svg>
              </>
            </button>
          </div>
          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <div
              className="absolute top-0 right-0 lg:px-20 lg:py-[70px] px-7 py-16 cursor-pointer	"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-9 w-9 text-gray-600 hidden sm:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>

              <svg
                className="h-10 w-10 text-black block sm:hidden"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-2xl">
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer">
                <Link href="/" passHref>
                  <span className="font-spartan-bold md:text-5xl hover:opacity-60">
                    Home
                  </span>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer	">
                <Link href="https://blog.podobro.pl" passHref>
                  <span className="font-spartan-bold md:text-5xl hover:opacity-60">
                    Blog
                  </span>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer">
                <Link href="/rezerwacja" passHref>
                  <span className="font-spartan-bold md:text-5xl hover:opacity-60">
                    Umów się na sesję
                  </span>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer">
                <Link href="/kontakt" passHref>
                  <span className="font-spartan-bold md:text-5xl hover:opacity-60">
                    Kontakt
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const Navigation = ({ isMobile }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav
      className={`bg-transparent ${
        !isMobile ? "sticky" : "relative"
      } top-0 z-50 sm:relative`}
    >
      <div className=" px-8 py-8 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" passHref>
              <Image
                src="/images/logo-podobro-pl.png"
                alt="logo"
                width={isMobile ? "113" : "187"}
                height={isMobile ? "83" : "137"}
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
              <svg
                width="42"
                height="33"
                viewBox="0 0 42 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="18.5"
                  y1="7.5"
                  x2="39.5"
                  y2="7.5"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <line
                  x1="18.5"
                  y1="16.5"
                  x2="39.5"
                  y2="16.5"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <line
                  x1="18.5"
                  y1="25.5"
                  x2="39.5"
                  y2="25.5"
                  stroke="black"
                  stroke-width="5"
                  stroke-linecap="round"
                />
                <path
                  d="M2 0.95L9.66 0.95V0.96L3.86 5.05L4 4.43L9.66 8.51V8.53L2 8.53V7.08L6.39 7.08L5.64 7.17L2.1 4.68V4.66L5.64 2.1L6.33 2.35L2 2.35L2 0.95ZM9.36 10.4324L9.36 15.4524H7.96L7.96 11.8824H6.39L6.39 15.0424L4.99 15.0424L4.99 11.8824H3.4L3.4 15.5924H2L2 10.4324L9.36 10.4324ZM1.7 23.6826L6.74 18.1026L6.5 18.5326L2 18.5626L2 17.0926H9.65V17.1526L4.63 22.6126L4.77 22.2926L9.36 22.2626V23.7226L1.7 23.7226V23.6826ZM4.72 26.918C4.48667 26.918 4.26333 26.988 4.05 27.128C3.83667 27.268 3.66333 27.4513 3.53 27.678C3.39667 27.9113 3.33 28.1646 3.33 28.438C3.33 28.738 3.39667 29.0046 3.53 29.238C3.66333 29.4713 3.83667 29.6546 4.05 29.788C4.26333 29.928 4.48667 29.998 4.72 29.998H9.36V31.428H4.69C4.15 31.428 3.67 31.2946 3.25 31.028C2.83667 30.7613 2.51 30.4013 2.27 29.948C2.03667 29.4946 1.92 28.9913 1.92 28.438C1.92 27.8913 2.03667 27.3913 2.27 26.938C2.51 26.4913 2.83667 26.1346 3.25 25.868C3.67 25.6013 4.15 25.468 4.69 25.468H9.36V26.918H4.72Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <div
              className="absolute top-0 right-0 px-7 py-16"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-9 w-9 text-gray-600"
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
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-2xl">
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer">
                <Link href="/" passHref>
                  <span className="font-spartan-bold">Home</span>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer	">
                <Link href="/blog" passHref>
                <span className="font-spartan-bold">Blog</span>
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase cursor-pointer">
                <Link href="/kontakt" passHref>
                <span className="font-spartan-bold">Kontakt</span>
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

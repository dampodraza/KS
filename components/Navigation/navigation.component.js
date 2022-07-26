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
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
          <div className={isNavOpen ? styles.showMenuNav : styles.hideMenuNav}>
            <div
              className="absolute top-0 right-0 px-7 py-16"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
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
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/blog" passHref>
                  Blog
                </Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link href="/kontakt" passHref>
                  Kontakt
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
"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import Next.js hooks
import smoothscroll from "smoothscroll-polyfill";
import styles from "./styles.module.css";

export const Header = () => {
  const router = useRouter(); // Use router for page navigation
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLSpanElement>,
    targetId: string
  ) => {
    event.preventDefault();
    
    if (pathname !== "/") {
      // If not on the home page, navigate home first
      router.push(`/#${targetId}`);
    } else {
      // If already on home page, scroll smoothly
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className='fixed w-[88vw] top 10px mx-auto py-5 flex flex-col gap-5 md:flex-row justify-between items-center z-50 bg-transparent'>
      <div className="flex relative">
        <h1 className={`${styles.logoHeading} text-3xl font-bold mix-blend-difference drop-shadow-xl`}>
          WICYS
        </h1>
      </div>
      <div className="flex px-6 py-4 justify-center bg-white bg-opacity-60 backdrop-blur-lg rounded-full text-slate-900 font-semibold text-sm">
        <ul className="flex flex-nowrap gap-5">
        <li>
            <Link href="/#hero">
              <span onClick={(event) => handleScroll(event, "hero")}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <span onClick={(event) => handleScroll(event, "about")}>About</span>
            </Link>
          </li>
          <li>
            <Link href="/#ticket">
              <span onClick={(event) => handleScroll(event, "ticket")}>Register</span>
            </Link>
          </li>
          <li>
            <Link href="/#gallery">
              <span onClick={(event) => handleScroll(event, "gallery")}>Gallery</span>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard">
              <span>LeaderBoard</span>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <span onClick={(event) => handleScroll(event, "contact")}>Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

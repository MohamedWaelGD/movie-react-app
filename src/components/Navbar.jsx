import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const navRef = useRef(null);

  const searchQuery = (e) => {
    if (e.key === "Enter" && search) {
      window.location.href = `/search?query=${search}`;
    }
  };

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      ease: "power2.out",
      duration: 1,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-dark shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div>
          <Link to={"/"} className={"text-lg font-bold"}>
            Movie<span className={"text-red-500"}>App</span>
          </Link>
        </div>
        <div>
          <div
            className={"relative rounded-full bg-white/20 px-2 py-1 text-white"}
          >
            <input
              type="search"
              className="pe-6 outline-none"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchQuery}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-[10px] -translate-y-1/2 transform"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
        </div>
        <div>
          <Link to={"/wishlist"}>
            <div
              className={
                "h-[40px] w-[40px] overflow-hidden rounded-full border-3 border-white/20"
              }
            >
              <img
                src={"/placeholder.png"}
                alt={"profile"}
                className={"h-full w-full object-cover"}
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

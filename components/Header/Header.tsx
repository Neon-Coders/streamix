import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const movieTypes = ["Action"];

  return (
    <header className={`${isScrolled && "bg-[#232533]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={Logo}
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="streamix logo"
        />
      </div>

      <div>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        {movieTypes.map((movieType) => (
          // eslint-disable-next-line react/jsx-key
          <p className="hidden lg:inline">{movieType}</p>
        ))}
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://rb.gy/g1pwyx"
            className="cursor-pointer rounded"
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

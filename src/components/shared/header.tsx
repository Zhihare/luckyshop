"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { Container } from "./container";
import Image from "next/image";
import { SearchBar } from "../ui";
import { ShoppingCart, User, Heart } from "lucide-react";
import Link from "next/link";
import { BurgerMenu } from "./burgerMenu";
import { TopBar } from "./top-bar";

export interface IAppProps {
  className?: string;
}

export const Header: React.FC<IAppProps> = ({ className }) => {
  const [isScrollingUp, setIsScrollingUp] = React.useState(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full bg-white shadow-md z-20",
        className
      )}
    >
      {/* Основний хедер (Логотип, пошук, іконки) */}
      <Container className="flex items-center justify-between py-2 px-4">
        {/* Логотип */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <BurgerMenu className="md:hidden" />
            <Image src="/man.png" alt="Logo" width={50} height={50} className="hidden md:block" />
            <span className="text-sm md:text-2xl ml-4 font-bold text-blue-600 uppercase">
              Man Lucky Shop
            </span>
          </div>
        </Link>

        {/* Пошукова панель */}
        <div className="hidden md:flex flex-1 justify-center mx-4">
          <SearchBar placeholder="Пошук" />
        </div>

        {/* Іконки */}
        <div className="flex items-center gap-4">
          <Link href="/profile" className="text-blue-600">
            <User size={24} />
          </Link>
          <Link href="/wishlist" className="text-blue-600">
            <Heart size={24} />
          </Link>
          <Link href="/cart" className="relative text-blue-600">
            <ShoppingCart size={24} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              1
            </span>
          </Link>
        </div>
      </Container>

      {/* Навігаційна панель з категоріями */}
      <nav
        className={cn(
            "justify-center py-1 bg-white shadow-sm transition-all duration-300 ease-in-out",
            isScrollingUp ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 invisible"
        )}
        style={{ position: "absolute", top: "100%", left: 0, width: "100%" }}
        >
        <TopBar className="hidden md:block" />
        <SearchBar className="flex justify-center md:hidden" />
    </nav>
    </header>
  );
};

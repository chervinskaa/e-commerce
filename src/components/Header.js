"use client";

import { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const showIcons = pathname !== "/signup" && pathname !== "/login";

    const links = [
        { href: "/", label: "Home" },
        { href: "/contact", label: "Contact" },
        { href: "/about", label: "About" },
        { href: "/signup", label: "Sign Up" },
    ];

    return (
        <header>
            <div className="bg-gray-900 text-gray-300 py-2 text-center text-sm">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="#" className="font-semibold border-b-2 inline-block ml-2">
                    ShopNow
                </a>
            </div>

            <div className="bg-white border-b border-gray-300 py-4 pt-10 shadow-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                    <div className="text-2xl font-bold text-gray-900">Exclusive</div>

                    {/* Навігація для великих екранів */}
                    <nav className="hidden md:flex gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-gray-700 hover:text-gray-900 ${pathname === link.href ? "underline underline-offset-4 font-semibold" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Пошук + іконки + бургер */}
                    <div className="flex items-center gap-4 w-full max-w-xs">
                        {/* Пошук */}
                        <div className="relative w-full ">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full px-3 pr-10 h-10 rounded-md bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none"
                            />
                            <button className="absolute right-0 top-0 h-full px-3 text-black rounded-r-md hover:bg-gray-300 flex items-center justify-center transition-colors">
                                <Search size={20} />
                            </button>
                        </div>

                        {/* Іконки */}
                        {showIcons && (
                            <div className="hidden md:flex gap-5 text-black">
                                <Link href="/wishlist" className="hover:text-gray-700">
                                    <Heart size={22} />
                                </Link>
                                <Link href="/cart" className="hover:text-gray-700">
                                    <ShoppingCart size={22} />
                                </Link>
                            </div>
                        )}

                        {/* Бургер для мобільних */}
                        <div className="md:hidden text-gray-900">
                            <button onClick={() => setMenuOpen(!menuOpen)}>
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Мобільне меню */}
                <div
                    className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 
                        ${menuOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={() => setMenuOpen(false)}
                ></div>

                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-white text-gray-900 shadow-lg z-50 flex flex-col p-3 gap-4
                  transform transition-transform  duration-300 ease-in-out
                   ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <button className="self-end mb-4" onClick={() => setMenuOpen(false)}>
                        <X size={24} />
                    </button>

                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-gray-700 hover:text-gray-900  w-max text-lg ${pathname === link.href ? "underline font-semibold" : ""}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Іконки */}
                    {showIcons && (
                    <div className="flex gap-6 mt-6">
                        <Link href="/wishlist" className="hover:text-gray-700">
                            <Heart size={22} />
                        </Link>
                        <Link href="/cart" className="hover:text-gray-700">
                            <ShoppingCart size={22} />
                        </Link>
                    </div>
                    )}
                </div>
            </div>

        </header>
    );
}

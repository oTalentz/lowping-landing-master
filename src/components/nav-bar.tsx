"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Logo from "./logo"
import { usePathname } from "next/navigation"
import Link from "next/link"
import CreateServerButton from "./ui/CreateServer"
import SelectLangButton from "./ui/SelectLang"

interface NavLinks {
    name: string
    href: string
}

const links: NavLinks[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
]

export default function NavBar() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-5"}`}
            initial={false}
            animate={isScrolled ? "scrolled" : "top"}
            variants={{
                top: {
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    borderBottom: "1px solid rgba( 255, 255, 255, 0 )",
                },
                scrolled: {
                    backgroundColor: "rgba( 255, 255, 255, 0.05 )",
                    backdropFilter: "blur( 11.5px )",
                    borderBottom: "1px solid rgba( 255, 255, 255, 0.10 )",
                },
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center text-white"
                        transition={{ duration: 0.3 }}
                    >
                        <motion.span className="text-xl font-bold mr-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href={"/"}>
                                <Logo />
                            </Link>
                        </motion.span>

                        <div className="hidden md:flex space-x-6">
                            {links.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className={`${pathname === link.href ? "text-blue-600" : "text-white"} font-medium text-xl`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-center space-x-4 text-white"
                        transition={{ duration: 0.3 }}
                    >
                        <SelectLangButton/>
                        <CreateServerButton />
                    </motion.div>
                </div>
            </div>
        </motion.nav>
    )
}


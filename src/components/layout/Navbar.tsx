"use client"

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { DotsThreeOutlineVertical } from "phosphor-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const links = [
        {name: "Home", href: "/"},
        {name: "Nosotros", href: "/nosotros"},
        {name: "LR Cloud", href: "/lr-cloud"},
        {name: "Contacto", href: "/contacto"}
    ]
    return (
        <nav className="flex justify-center bg-primary h-16 fixed top-0 z-50 w-screen">
            {/* NAVBAR DESKTOP */}
            <section className="w-full items-center justify-around text-xl text-white mx-20 hidden md:flex">
                {links.slice(0, 2).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <div key={link.name} className="relative px-2 py-2">
                       <Link href={link.href} >
                        <span className={isActive ? "text-secondary" : ""}>{link.name}</span>
                        </Link>

                        {isActive && 
                        <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        className="absolute left-0 right-0 h-[2px] bg-blue-600"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                        }
                        </div>
                       
                    )
                })}<Link href="/"><Image src="/hero/logo-LR.png" alt="LR Logo" width={80} height={80}/></Link>

                {links.slice(2).map((link) => {
                    const isActive = pathname === link.href;
                    return (
                       <div key={link.name} className="relative px-2 py-2">
                       <Link href={link.href} >
                        <span className={isActive ? "text-secondary" : ""}>{link.name}</span>
                        </Link>

                        {isActive && 
                        <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        exit={{ width: 0 }}
                        className="absolute left-0 right-0 h-[2px] bg-blue-600"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                        }
                       </div>
                    )
                })}
            </section>
            
            {/* NAVBAR MOBILE */}
            <section className="w-full items-center justify-center text-xl text-white flex md:hidden relative">
            <Link href="/"><Image src="/hero/logo-LR.png" alt="LR Logo" width={80} height={80}/></Link>
            <div className="flex flex-col">
            <DotsThreeOutlineVertical onClick={() => {
                setIsOpen(!isOpen);
            }} className="cursor-pointer absolute right-5 top-[50%] translate-y-[-50%]" size={24}/>
            <article className={`${isOpen ? "block" : "hidden"} flex flex-col absolute top-16 h-screen w-1/2 bg-primary z-50 right-0 items-center pt-16 gap-10`}>
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <div key={link.name} className="relative px-2 py-2" onClick={() => {
                        setIsOpen(false);
                    }}>
                    <Link href={link.href}>
                        <span className={isActive ? "text-secondary" : ""}>{link.name}</span>
                    </Link>

                    {isActive && 
                    <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-600"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                    }
                    </div>
                )
            })}
            </article>
            </div>
            </section>
        </nav>
    )
}
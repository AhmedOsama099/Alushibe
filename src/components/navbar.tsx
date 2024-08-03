"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"

import logo1 from "../../public/images/logo.png"
import StandardWrapper from "./standard-wrapper"

const data = [
  {
    key: "HomeItem01",
    name: "Home",
  },
  {
    key: "ProfileItem01",
    name: "Profile",
  },
  {
    key: "ServicesItem01",
    name: "Services",
  },
  {
    key: "CompaniesItem01",
    name: "Companies",
  },
  {
    key: "ProductsItem01",
    name: "Products",
  },
  {
    key: "ContactsItem01",
    name: "Contacts",
  },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <StandardWrapper
      className={`fixed left-0 top-0 transition-colors duration-300  ${isScrolled ? "bg-black shadow-md " : "bg-transparent shadow-none"}`}
    >
      <nav
        className={`flex items-center justify-between text-slate-200  ${isScrolled ? "h-20" : "h-32"}`}
      >
        <div className="flex items-center">
          <Image
            src={logo1}
            alt="Logo"
            className={`w-auto  ${isScrolled ? "h-14" : "h-20"} `}
          />
        </div>
        <ul className="flex gap-5">
          {data.map(({ key, name }) => (
            <li
              key={key}
              className="hover:text-brandColor   cursor-pointer transition-colors duration-200"
            >
              {name}
            </li>
          ))}
        </ul>
      </nav>
    </StandardWrapper>
  )
}

export default Navbar

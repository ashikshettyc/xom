// components/Navbar.js

import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const menuItems = [
    "Home",
    "What We Do",
    "Where We Operate",
    "Innovation",
    "About",
    "Meet Our Team",
    "Contact",
    "Careers",
    "Login",
    "Members",
  ];

  return (
    <Navbar disableAnimation isBordered className="bg-[#161635] text-white">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit">XOM</p>
        </NavbarBrand>
        <NavbarMenuToggle />
      </NavbarContent>

 

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">XOM</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
          What We Do
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
          Innovation
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
          About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
          Meet Our Team
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
          Contact
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="font-bold" href="#" aria-current="page" color="warning">
          Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold text-inherit" href="#">
          Members
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* 
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

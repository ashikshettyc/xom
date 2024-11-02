// components/Navbar.js
'use client';
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { Link as ScrollLink } from 'react-scroll';

export default function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const menuItems = [
    { name: 'Home', href: 'home' },
    { name: 'What We Do', href: 'what-we-do' },
    { name: 'Where We Operate', href: 'where-we-operate' },
    { name: 'Innovation', href: 'innovation' },
    { name: 'About', href: 'about' },
    // { name: 'Meet Our Team', href: 'meet-our-team' },
    // { name: 'Contact', href: 'contact' },
    // { name: 'Careers', href: 'careers' },
    // { name: 'Login', href: 'login' },
    // { name: 'Members', href: 'members' },
  ];

  const handleScroll = () => {
    const sections = menuItems.map((item) =>
      document.getElementById(item.href)
    );
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollY + 60 &&
        section.offsetTop + section.offsetHeight > scrollY + 60
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      disableAnimation
      isBordered
      className="bg-[#161635] text-white h-24 font-serif"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl">XOM</p>
        </NavbarBrand>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit text-3xl">XOM</p>
        </NavbarBrand>
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={activeSection === item.href}>
            <ScrollLink
              className="font-bold text-inherit text-lg"
              to={item.href}
              smooth={true}
              duration={500}
              offset={-90} // Adjust this to account for fixed header
            >
              {item.name}
            </ScrollLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <ScrollLink
              className="w-full"
              to={item.href}
              smooth={true}
              duration={500}
              offset={-90} // Adjust this to account for fixed header
            >
              {item.name}
            </ScrollLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

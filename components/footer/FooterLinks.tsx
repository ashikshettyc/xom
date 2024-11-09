"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function FooterLinks() {
    const pathname = usePathname() as string
  return (
    <>
         
                    <div className="footer-widget links-widget">
                      <h5>Company</h5>
                      <div className='md:flex gap-4 '>
                      <ul className="list-link">
                        <li>
                        <Link
                    href={`${
                      pathname === '/about-us' || pathname === '/contact-us'
                        ? '/'
                        : '/#intro'
                    }`}>
                    Home</Link>
                        {/* //   <a href="#intro"></a> */}
                        </li>
                        <li>
                        <Link
                    href={`${
                      pathname === '/about-us' || pathname === '/contact-us'
                        ? '/'
                        : '/#what_we_do'
                    }`}>What We Do</Link>
                         
                        </li>
                        <li>
                        <Link
                    href={`${
                      pathname === '/about-us' || pathname === '/contact-us'
                        ? '/'
                        : '/#where_we_operate'
                    }`}>Where We Operate</Link>                          
                        </li>
                        {/* <li>
                        <Link
                    href={`${
                      pathname === '/about-us' || pathname === '/contact-us'
                        ? '/'
                        : '/#innovation'
                    }`}>Innovation</Link>                              
                          
                        </li> */}
                        {/* <li>
                          <Link href="about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="contact-us">Contact</Link>
                        </li> */}
                      </ul>
                      <ul className="list-link">
                      <li>
                          <Link href="about-us">About Us</Link>
                        </li>
                        <li>
                          <Link href="contact-us">Contact</Link>
                        </li>
                      </ul>
                      </div>
                    
                    </div>
                  </>
    
  )
}

export default FooterLinks
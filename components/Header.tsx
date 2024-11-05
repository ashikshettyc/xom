/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
export default function HeaderComp() {
  const pathname = usePathname();

  return (
    <>
      <header className={`main-header ${pathname !== '/' && 'style-two'}`}>
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container clearfix">
              {/* Top Left */}
              <div className="top-left">
                {/* Info List */}
                <ul className="info-list">
                  <li>
                    <a href="tel:+96824621546">
                      <span className="icon icofont-phone"></span> +968 24621546
                    </a>
                  </li>
                  <li>
                    <a href="tel:+96824625907">
                      <span className="icon icofont-phone"></span> +968 24625907
                    </a>
                  </li>
                </ul>
              </div>

              {/* Top Right */}
              <div className="top-right pull-right">
                <ul className="info-list">
                  <li>
                    <a href="contact">
                      <span className="icon icofont-location-pin"></span> P.O
                      Box 2467 . PC 133 Al Khuwair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <Link
                    href={`${
                      pathname === '/about-us' || pathname === '/contact-us'
                        ? '/'
                        : '/'
                    }`}
                  >
                    <Image
                      src="/images/logo.webp"
                      width={153}
                      height={80}
                      alt="XOM Oman"
                      title=""
                    />
                  </Link>
                </div>
              </div>

              <div className="nav-outer pull-left clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className="navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link
                          href={`${
                            pathname === '/about-us' ||
                            pathname === '/contact-us'
                              ? '/'
                              : '#what_we_do'
                          }`}
                        >
                          What We Do
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${
                            pathname === '/about-us' ||
                            pathname === '/contact-us'
                              ? '/'
                              : '#where_we_operate'
                          }`}
                        >
                          Where We Operate
                        </Link>
                      </li>
                      <li>
                        <Link href="about-us">About</Link>
                      </li>
                      <li>
                        <Link href="contact-us">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Outer Box */}
              <div className="outer-box">
                {/* Search Btn */}
                <div className="search-box-btn search-box-outer">
                  <span className="icon icofont-search"></span>
                </div>
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler">
                  <span className="icon ti-menu"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Upper */}

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon lnr lnr-cross"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="#intro">
                <Image
                  src="/images/logo.png"
                  alt=""
                  width={153}
                  height={80}
                  title=""
                />
              </Link>
            </div>
            <div className="menu-outer">
              {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
    </>
  );
}

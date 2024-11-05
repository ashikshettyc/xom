'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function ClientLogo() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if on the homepage
    if (pathname === '/') {
      // Dynamically create a script tag to load script.js
      const script = document.createElement('script');
      script.src = '/js/customScript.js'; // Adjust the path to where script.js is located in the public directory
      script.async = true;

      // Append the script to the document body
      document.body.appendChild(script);

      // Clean up: remove script when the component unmounts or pathname changes
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [pathname]);
  return (
    <div className="sponsors-section">
      <div className="auto-container">
        <div className="carousel-outer">
          {/* Sponsors Slider */}
          <ul className="sponsors-carousel owl-carousel owl-theme">
            <li>
              <div className="image-box" style={{ filter: 'none', opacity: 1 }}>
                <a href="javascript:void(0);">
                  <div className="h-[100px] overflow-hidden">
                    <Image
                      src="/images/PDO.webp"
                      alt="PDO"
                      width={100}
                      height={50}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="image-box" style={{ filter: 'none', opacity: 1 }}>
                <a href="javascript:void(0);">
                  <div className="h-[100px] overflow-hidden">
                    <Image
                      src="/images/Shell Oman.webp"
                      alt="Shell Oman"
                      width={100}
                      height={50}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="image-box" style={{ filter: 'none', opacity: 1 }}>
                <a href="javascript:void(0);">
                  <div className="h-[100px] overflow-hidden">
                    <Image
                      src="/images/anton.webp"
                      alt="Anton"
                      width={200}
                      height={50}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="image-box" style={{ filter: 'none', opacity: 1 }}>
                <a href="javascript:void(0);">
                  <div className="h-[100px]  overflow-hidden">
                    <Image
                      src="/images/Daleel.webp"
                      alt="Daleel"
                      width={200}
                      height={50}
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

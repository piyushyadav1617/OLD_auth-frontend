"use client"

import React, { useState } from 'react';
import getstarted from "./images/gettingstartedicon.svg";
import application from "./images/applicationicon.svg";
import forwardicon from "./images/forwardicon.svg";
import authenticate from "./images/authenticationicon.svg";
import forward from "./images/forwardarrow.svg";
import backward from "./images/backwardarrow.svg";
import security from "./images/security.svg";
import Link from 'next/link';
import Image from 'next/image';

const nav_element = "font-[500] p-2 text-sm text-black rounded-[4px] gap-x-2 w-full duration-150 flex items-center hover:text-[rgba(99, 93, 255)] active:text-[rgba(99, 93, 255)]"

const nav_text = "hover:text-[rgb(99,93,255)] active:text-[rgb(99,93,255)]"
const nav_img = "w-[1em] h-[1em]"

const Navbar = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>
      <div className='nav-wrap'>
        <ul>
          {/* navbar element 1  */}
          <li>
            <Link className={nav_element} href="/dashboard/page4">
              <Image className={nav_img} src={getstarted} alt='getting_started' />
              <span className={nav_text}>
                Getting Started
              </span>
            </Link>
          </li>

          {/* navbar element 2nd */}
          <li>
            <button className="drodown-btn" onClick={toggleDropdown}>
              <Link href="#" className={nav_element}>
                <Image className={nav_img} src={application} alt='getting_started' />
                <span className={nav_text}>
                  Application Steps
                </span>
                <Image className={`nav_img ml-4`} src={forwardicon} alt='getting_started' />

              </Link>
            </button>
            {/* dropdown */}
            <ul className={`dropdown-menuu ${isDropdownOpen ? "show1" : ""}`}>
              <li>
                <Link className={nav_element} href='#'>
                  <span className="text-xs pl-1 font-normal">
                    Step 1
                  </span>
                </Link>
              </li>
              <li>
                <Link className={nav_element} href="/dashboard/page3">
                  <span className="text-xs pl-1 font-normal">
                    Step 2
                  </span>
                </Link>
              </li>

            </ul>
            {/* dropdown */}
          </li>


          {/* navbar element 3  */}
          <li>
            <Link className={nav_element} href="">
              <Image className={nav_img} src={authenticate} alt='getting_started' />
              <span className={nav_text}>
                Authentication
              </span>
            </Link>
          </li>
          {/* navbar element next element  */}

          {/* navbar element 1  */}
          <li>
            <Link className={nav_element} href="/dashboard/page5">
              <Image className={nav_img} src={security} alt='getting_started' />
              <span className={nav_text}>
                Passwordless
              </span>
            </Link>
          </li>
          {/* navbar element 1  */}
          <li>
            <Link className={nav_element} href="/dashboard/page6">
              <Image className={nav_img} src={authenticate} alt='getting_started' />
              <span className={nav_text}>
                Organizations
              </span>
            </Link>
          </li>
          {/* navbar element 7  */}
          <li>
            <Link className={nav_element} href="/dashboard/page7">
              <Image className={nav_img} src={getstarted} alt='getting_started' />
              <span className={nav_text} >
                Email Provider
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='bottombtn p-2'>
        <button className="downbtn" onClick={toggleSidebar}>
          <div className='d-flex'>
            <span className={`forwardarr ${isSidebarOpen ? "hide" : ""}`}><Image alt='forward' src={forward} /> </span>
            <span className={`backward ${isSidebarOpen ? "" : "hide"}`}><Image alt='backward' src={backward} /> </span>
          </div>
        </button>
      </div>
    </nav>

  )
}

export default Navbar
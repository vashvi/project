import React from 'react'

import './Header.css'

import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GrLicense } from "react-icons/gr";


export default function Header() {
  return (
    <div>
      <header className="header">
        
        <div className="header-content">
          <div className="title">
            <h1>Find, evaluate, and choose the perfect software for your business needs</h1>
          </div>
          <div className="container">
            <form action="" className="search-bar">
              <input type="text" name="q" placeholder="Search by Category" />
              <button type="submit" aria-label="Search">
                {/* <img src="..\frontend\src\Images\WhatsApp Image 2024-12-07 at 22.06.46_ab09f4fb.jpg" alt="Search"  /> */}
              </button>
            </form>
          </div>
          <div className="header-buttons">
            <button><FaPhoneVolume /> Free Expert Consultation</button>
            <button><GrLicense />  Get Instant License</button>
            <button><MdOutlineAddShoppingCart /> Easy & Secure Checkout</button>
          </div>
        </div>
      </header>
    </div>
  )
}

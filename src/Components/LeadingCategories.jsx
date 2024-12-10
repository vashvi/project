import React from 'react'
import Textcarousel from "./Textcarousel";
import './LeadingCategories.css'


export default function LeadingCategories() {
  return (
    <div>

        <section className="categories">
            <h2>Leading Categories</h2>
            <div className="categories-slider">
            <Textcarousel />
            </div>
      </section>
      
    </div>
  )
}

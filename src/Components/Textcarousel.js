import React, { useRef, useEffect, useState } from "react";
import Mytext from "./Mytext"; // Assuming Mytext component is correctly implemented

function Textcarousel() {
  const boxRef = useRef(null);
  const numItems = 30; // Total number of items
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Initialize the carousel to the first item
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollLeft = 0; // Start at the first item
    }
  }, []);

  // Handle the previous button
  const btnpressprev = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft -= width;

      // Loop to the last item if at the start
      if (boxRef.current.scrollLeft <= 0) {
        boxRef.current.scrollLeft = (numItems - 1) * width;
      }
    }
  };

  // Handle the next button
  const btnpressnext = () => {
    if (boxRef.current) {
      const width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft += width;

      // Loop to the start if past the last item
      if (boxRef.current.scrollLeft >= boxRef.current.scrollWidth - width) {
        boxRef.current.scrollLeft = 0;
      }
    }
  };

  // Check button states (for "next" and "prev" buttons)
  const checkButtons = () => {
    if (boxRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = boxRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Add scroll event listener to update the button states
  useEffect(() => {
    const handleScroll = () => {
      checkButtons();
    };

    const container = boxRef.current;
    container.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Create an array of item numbers
  const items = Array.from({ length: numItems }, (_, i) => i + 1);

  return (
    <div className="product-carousel">
      <button
        className="pre-btn"
        onClick={btnpressprev}
        disabled={isAtStart}
      >
        &lt;
      </button>
      <div
        className="product-container"
        ref={boxRef}
      >
        {items.map((item) => (
          <Mytext key={item} cardno={item} />
        ))}
      </div>
      <button
        className="next-btn"
        onClick={btnpressnext}
        disabled={isAtEnd}
      >
        &gt;
      </button>
    </div>
  );
}

export default Textcarousel;

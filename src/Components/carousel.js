import React, { useRef, useState, useEffect } from 'react';
import Mycard from './Mycard';

function Carousel() {
  const boxRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const btnpressprev = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth * 0.8; // Scroll by 80% of the width
      boxRef.current.scrollLeft -= width;
      checkButtons(); // Update button states
    }
  };

  const btnpressnext = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth * 0.8; // Scroll by 80% of the width
      boxRef.current.scrollLeft += width;
      checkButtons(); // Update button states
    }
  };

  const checkButtons = () => {
    if (boxRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = boxRef.current;
      setIsAtStart(scrollLeft <= 1); // Tolerate minimal inaccuracy
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // Allow tolerance
    }
  };

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollLeft = 0; // Ensure the carousel starts at the beginning
      checkButtons(); // Update button states
    }
  }, []);

  const cards = Array.from({ length: 12 }, (_, index) => (
    <Mycard key={index} cardno={index + 1} />
  ));

  return (
    <div className="product-carousel">
      <button
        className="pre-btn"
        onClick={btnpressprev}
        disabled={isAtStart}
        aria-label="Scroll left"
      >
        <p>&lt;</p>
      </button>

      <div className="product-container" ref={boxRef} onScroll={checkButtons}>
        {cards}
      </div>

      <button
        className="next-btn"
        onClick={btnpressnext}
        disabled={isAtEnd}
        aria-label="Scroll right"
      >
        <p>&gt;</p>
      </button>
    </div>
  );
}

export default Carousel;

import React, { useRef, useEffect } from "react";
import Mycard from "./Mycard";

function Carousel() {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollLeft = 0; // Ensure the carousel starts at the first card
    }
  }, []);

  const btnpressprev = () => {
    if (boxRef.current) {
      boxRef.current.scrollLeft -= boxRef.current.clientWidth; // Scroll left by container width
    }
  };

  const btnpressnext = () => {
    if (boxRef.current) {
      boxRef.current.scrollLeft += boxRef.current.clientWidth; // Scroll right by container width
    }
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        &lt;
      </button>
      <div className="product-container" ref={boxRef}>
        {Array.from({ length: 12 }, (_, index) => (
          <Mycard key={index} cardno={index + 1} />
        ))}
      </div>
      <button className="next-btn" onClick={btnpressnext}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;

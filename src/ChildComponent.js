import React, { useRef, useEffect } from "react";

function ChildComponent() {
  const childRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const childElem = childRef.current;
    const parentElem = parentRef.current;

    const handleAnimationEnd = () => {
      const childRect = childElem.getBoundingClientRect();
      const parentRect = parentElem.getBoundingClientRect();

      if (childRect.bottom > parentRect.bottom) {
        console.log("Child div has gone out of the parent div");
      }
    };

    childElem.addEventListener("animationend", handleAnimationEnd);

    return () => {
      childElem.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div ref={parentRef} style={{ height: "300px", position: "relative" }}>
      <div
        ref={childRef}
        className="slide bg-blue-500 absolute"
      >
        Child div
      </div>
    </div>
  );
}

export default ChildComponent;

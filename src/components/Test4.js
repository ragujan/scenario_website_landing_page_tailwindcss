import React, { useEffect, useRef, useState } from "react";
import throttle from "raf-throttle";
function Test4() {
  const tri1Ref = useRef(null);
  const tri3Ref = useRef(null);

  const RAFThrottle = (fn) => {
    let throttled = false;
    return () => {
      if (throttled) return;
      throttled = true;
      requestAnimationFrame(() => {
        throttled = false;
        fn();
      });
    };
   
  };

  const setUpListener = (container) => {
    const tri1 = tri1Ref.current;
    const tri3 = tri3Ref.current;
    const tri1XInitial = tri1.getBoundingClientRect().y;
    const tri3XInitial = tri3.getBoundingClientRect().y;

    const handleScroll = () => {
      let substractionAmount = container.offsetTop;
      const containerTop = container.getBoundingClientRect().top;

      if (containerTop <= 0) {
        const dist = 100;
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
        const total = height - substractionAmount;

        const current = window.scrollY - substractionAmount;

        const per = current / total;

        console.log("top ", container.offsetTop);
        console.log("total is ", total);
        console.log("current ", current);
        console.log("per ", per);

        tri1.style.top =
          -(dist * per * 15) + (tri1XInitial - substractionAmount) + "px";
        tri3.style.top =
          dist * per * 15 + (tri3XInitial - substractionAmount) + "px";
      }
    };
    window.addEventListener("scroll", RAFThrottle(handleScroll), {
      passive: true,
    });
  };
 

  return (
    <div ref={setUpListener} className="containerRag">
      <div ref={tri1Ref} id="triangle1"></div>
      <div id="triangle2"></div>
      <div ref={tri3Ref} id="triangle3"></div>
      <a className="sd">Scroll Down</a>
    </div>
  );
}

export default Test4;

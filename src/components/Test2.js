import React, { useEffect, useRef, useState } from "react";

function Test2() {
  let tri1 = useRef(null);
  let tri3 = useRef(null);
  useEffect(() => {
    // const tri1 = document.querySelector("#triangle1");
    // const tri3 = document.querySelector("#triangle3");

    const tri1XInitial = tri1.current.getBoundingClientRect().y;
    const tri3XInitial = tri3.current.getBoundingClientRect().y;

    const handleScroll = () => {
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
      const total = height;

      const current = window.scrollY;

      const per = current / total;

      tri1.current.style.top = -(dist * per * 5) + tri1XInitial + "px";
      tri3.current.style.top = dist * per * 5 + tri3XInitial + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="containerRag">
      <div ref={tri1} id="triangle1"></div>
      <div id="triangle2"></div>
      <div ref={tri1} id="triangle3"></div>
      <a className="sd">Scroll Down</a>
    </div>
  );
}

export default Test2;

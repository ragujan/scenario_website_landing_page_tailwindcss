import React, { useEffect, useRef, useState } from "react";
import throttle from "raf-throttle";
import "./../test.css";
import TopDiv from "./TopDiv";
import TopDiv2 from "./TopDiv2";
import { observe } from "react-intersection-observer";
function Test6() {
  const tri1Ref = useRef(null);
  const tri3Ref = useRef(null);
  const container = useRef(null);
  const bottom = useRef(null);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [aniStatus1, setAniStatus1] = useState(false);

  const [tri1StartPos, setTri1StartPos] = useState(0);
  const [tri3StartPos, setTri3StartPos] = useState(0);

  const [oldValue1, setOldValue1] = useState(0);
  const [oldValue3, setOldValue3] = useState(0);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

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
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsBottomVisible(entry.isIntersecting);
      } else {
        setIsBottomVisible(false);
      }
    }, options);
    observer.observe(bottom.current);
    if (isBottomVisible) {
      // console.log("bottom is visible");
    }
    if (!isBottomVisible) {
      // console.log("bottom is un visible");
    }

    const tri3 = tri3Ref.current;

    const tri3XInitial = tri3.getBoundingClientRect().y;

    const tri3OffsetTop = tri3.offsetTop;

    setTri3StartPos(tri3XInitial);

    const handleScroll1 = () => {
      let substractionAmount = container.current.offsetTop;
      let bottomContainer =
        container.current.offsetTop + container.current.offsetHeight;
      const containerHeight = container.current.offsetHeight;
      const containerTop = container.current.getBoundingClientRect().top;

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

     

      if (containerTop <= 0) {
        // tri3.style.top = oldValue3;

        tri3.style.top =
          dist * per * 15 + (tri3XInitial - substractionAmount) + "px";
        setOldValue3(dist * per * 15 + (tri3XInitial - substractionAmount));
      }
      if (containerTop > 0) {
        tri3.style.top = tri3StartPos + tri3OffsetTop + "px";
      }
    };

    const onScroll = () => {
      const containerTopArg = container.current.getBoundingClientRect().top;
      if (containerTopArg <= 0) {
        requestAnimationFrame(handleScroll1);
      }
      if (isBottomVisible) {
        console.log("bottom visible ", isBottomVisible);
        cancelAnimationFrame(handleScroll1);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      if (bottom.current) observer.unobserve(bottom.current);
    };
  }, [isBottomVisible]);

  return (
    <>
      <div ref={container} className="containerRag">
        <div ref={tri1Ref} id="triangle1"></div>
        <div id="triangle2"></div>
        <div ref={tri3Ref} id="triangle3"></div>
        <a className="sd">Scroll Down</a>
      </div>
      <div ref={bottom} className="bottomDiv"></div>
    </>
  );
}

export default Test6;

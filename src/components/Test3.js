import React, { useEffect, useRef, useState } from "react";
import throttle from "raf-throttle";
import "./../test.css";
import TopDiv from "./TopDiv";
import TopDiv2 from "./TopDiv2";
function Test3() {
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
    threshold: 1,
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
    console.log("bro");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsBottomVisible(entry.isIntersecting);
    }, options);
    observer.observe(bottom.current);
  });

  useEffect(() => {
    const tri1 = tri1Ref.current;
    const tri1XInitial = tri1.getBoundingClientRect().y;
    const tri1OffsetTop = tri1.offsetTop;

    setTri1StartPos(tri1XInitial);

    const handleScroll = () => {
      let substractionAmount = container.current.offsetTop;
      const containerTop = container.current.getBoundingClientRect().top;

      if (containerTop <= 0) {
        tri1.style.top = oldValue1;
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

        console.log("top ", container.current.offsetTop);
        console.log("total is ", total);
        console.log("current ", current);
        console.log("per ", per);

        tri1.style.top =
          -(dist * per * 15) + (tri1XInitial - substractionAmount) + "px";

        setOldValue1(-(dist * per * 15) + (tri1XInitial - substractionAmount));
      }
      if (containerTop > 0) {
        tri1.style.top = tri1StartPos + tri1OffsetTop + "px";
      }
    };
    window.addEventListener("scroll", RAFThrottle(handleScroll), {
      passive: true,
    });
  }, []);

  useEffect(() => {
    const tri3 = tri3Ref.current;

    const tri3XInitial = tri3.getBoundingClientRect().y;

    const tri3OffsetTop = tri3.offsetTop;

    setTri3StartPos(tri3XInitial);
    const containerTopArg = container.current.getBoundingClientRect().top;

    const handleScroll1 = () => {
      let substractionAmount = container.current.offsetTop;
      let bottomContainer =
        container.current.offsetTop + container.current.offsetHeight;
      const containerHeight = container.current.offsetHeight;
      const containerTop = container.current.getBoundingClientRect().top;
      // const containerBottom = container.current.getBoundingClientRect().bottom;
      console.log("height is ", containerHeight);
      console.log("bottom is ", bottomContainer);

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

      console.log("top ", container.current.offsetTop);
      console.log("total is ", total);
      console.log("current ", current);
      console.log("per ", per);

      if (containerTop <= 0) {
        console.log("bro");
        setAniStatus1(true);
        console.log("ani status 01 ", aniStatus1);
      }
      if (isBottomVisible) {
        console.log("bootom is visible");
        setAniStatus1(false);
      }
      console.log("ani status 02 ", aniStatus1);

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
      if (containerTopArg <= 0) {
        
      }
    };
    window.addEventListener("scroll", RAFThrottle(handleScroll1), {
      passive: true,
    });

    // requestAnimationFrame(RAFThrottle(handleScroll1))
  }, []);

  return (
    <>
      <div ref={container} className="containerRag">
        <div ref={tri1Ref} id="triangle1"></div>
        <div id="triangle2"></div>
        <div ref={tri3Ref} id="triangle3"></div>
        <a className="sd">Scroll Down</a>
      </div>
      <div ref={bottom} className="topDiv"></div>
    </>
  );
}

export default Test3;

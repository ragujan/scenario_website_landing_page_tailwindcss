import React, { useEffect, useRef, useState } from "react";
function Test() {
  const tri1Ref = useRef(null);
  const tri3Ref = useRef(null);
  const containerRef = useRef(null);
  const [containerTouched, setContainerTouched] = useState(false);


  //   let tri1XInitial = tri1.current.getBoundingClientRect().y;
  //   let tri3XInitial = tri3.current.getBoundingClientRect().y;


  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      const containerTop = containerRef.current.getBoundingClientRect().top;

      if (containerTop <= 0) {
        //container touched and passed the top viewport of the browser
        console.log('touched')
        setContainerTouched(true);
      }
      if (containerTop > 0) {
        //container haven't touched the top viewport of the browser
        console.log('not touched')
        setContainerTouched(false);
      }
    });
   
  });

  useEffect(() => {
    const tri1 = tri1Ref.current;
    const tri3 = tri3Ref.current;
    const tri1XInitial = tri1.getBoundingClientRect().y;
    const tri3XInitial = tri3.getBoundingClientRect().y;

    const handleScroll = () => {
      if (containerTouched) {
        // alert('bro')
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

        tri1.style.top = -(dist * per * 5) + tri1XInitial + "px";
        tri3.style.top = dist * per * 5 + tri3XInitial + "px";
      }else{
        console.log('bro')
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="containerRag">
        <div ref={tri1Ref} id="triangle1"></div>
        <div id="triangle2"></div>
        <div ref={tri3Ref} id="triangle3"></div>
        <a className="sd">Scroll Down</a>

        <script src="src/index.js"></script>
      </div>
    </div>
  );
}

export default Test;

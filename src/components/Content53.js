import React, { useEffect, useRef } from "react";
import PlaceImagesCol1 from "../util_components/PlaceImagesCol1";
import PlaceImagesCol2 from "../util_components/PlaceImagesCol2";

function Content53() {
  const tri1Ref = useRef(null);
  const tri2Ref = useRef(null);
  const tri3Ref = useRef(null);

  const mainContainer = useRef(null);
  const container = useRef(null);

  const RAFThrottle = (fn) => {
    let throttled = false;
    return () => {
      if (throttled) return;

      requestAnimationFrame(() => {
        throttled = false;
        fn();
      });
    };
  };
  function debounce(func, delay) {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  }

  useEffect(() => {
    const tri1 = tri1Ref.current;
    const tri1XInitial = tri1.getBoundingClientRect().y;

    const handleScroll = () => {
      let substractionAmount = container.current.offsetTop;
      const containerTop = container.current.getBoundingClientRect().top;

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

        console.log("top ", container.current.offsetTop);
        console.log("total is ", total);
        console.log("current ", current);
        console.log("per ", per);

        tri1.style.transition = "top 0.3s ease-out";
        tri1.style.top =
          -(dist * per * 20) + (tri1XInitial - substractionAmount) + "px";
      }
    };

    window.addEventListener(
      "scroll",
      () => {
        const containerTop = container.current.getBoundingClientRect().top;
        if (containerTop <= 0) requestAnimationFrame(handleScroll);
      },
      {
        passive: true,
      }
    );
  }, []);

  useEffect(() => {
    const tri2 = tri2Ref.current;
    const tri2XInitial = tri2.getBoundingClientRect().y;

    const handleScroll = () => {
      let substractionAmount = container.current.offsetTop;
      const containerTop = container.current.getBoundingClientRect().top;
      console.log("bro");
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

        console.log("top ", container.current.offsetTop);
        console.log("total is ", total);
        console.log("current ", current);
        console.log("per ", per);

        tri2.style.transition = "top 0.3s ease-out";

        tri2.style.top =
          dist * per * 50 + (tri2XInitial - substractionAmount) + "px";
      }
    };
    window.addEventListener(
      "scroll",
      () => {
        const containerTop = container.current.getBoundingClientRect().top;
        if (containerTop <= 0) requestAnimationFrame(handleScroll);
      },
      {
        passive: true,
      }
    );
  }, []);
  useEffect(() => {
    const tri3 = tri3Ref.current;
    const tri3XInitial = tri3.getBoundingClientRect().y;

    const handleScroll = () => {
      let substractionAmount = container.current.offsetTop;
      const containerTop = container.current.getBoundingClientRect().top;

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

        console.log("top ", container.current.offsetTop);
        console.log("total is ", total);
        console.log("current ", current);
        console.log("per ", per);

        tri3.style.transition = "top 0.3s ease-out";
        tri3.style.top =
          -(dist * per * 20) + (tri3XInitial - substractionAmount) + "px";
      }
    };
    window.addEventListener(
      "scroll",
      () => {
        const containerTop = container.current.getBoundingClientRect().top;
        if (containerTop <= 0) requestAnimationFrame(handleScroll);
      },
      {
        passive: true,
      }
    );
  }, []);

  useEffect(() => {
    const containerTop = container.current.getBoundingClientRect().top;

    if (containerTop <= 0) {
      mainContainer.current.classList.add("fixed");
      mainContainer.current.classList.add("top-0");
    }
  });
  return (
    <>
      <div className="">
        <div
          ref={mainContainer}
          className="h-[100vh]  overflow-hidden no-scrollbar  bg-green-800 "
        >
       
          <div className="py-3 ">
            <div ref={container} className="grid grid-cols-3 py-10 ">
              <div
                ref={tri1Ref}
                className="relative flex flex-col justify-center h-full bg-blue-400"
              >
                <PlaceImagesCol1 column={1} />
              </div>
              {/* </div> */}
              {/* roller two or column 2 */}
              <div
                ref={tri2Ref}
                className="relative flex flex-col justify-center h-full  bg-red-400 top-[-65%]"
              >
                <PlaceImagesCol2 column={2} />
              </div>
              {/* roller three or column 3 */}
              <div
                ref={tri3Ref}
                className="relative flex flex-col justify-center h-full bg-blue-400"
              >
                <PlaceImagesCol1 column={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content53;

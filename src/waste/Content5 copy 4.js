import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function Content5() {
  const containerRef1 = useRef(null);

  const rollerRef1Container = useRef(null);
  const rollerRef1 = useRef(null);

  const rollerRef2Container = useRef(null);
  const rollerRef2 = useRef(null);

  const rollerRef3Container = useRef(null);
  const rollerRef3 = useRef(null);

  const [containerTouched, setContainerTouched] = useState(false);

  let translateY = 0;
  let translateYRight = 0;
  let translateYLeft = 0;

  let valTopMoveCol1 = 0;
  let valTopMoveCol2 = 0;
  let valTopMoveCol3 = 0;

  function mouseMovemen3(event) {
    let delta = event.deltaY;
    console.log(delta);
  }
  function mouseMovemen2(event) {
    let movingAmount = 140;
    event.preventDefault(); // Prevent the default scrolling behavior
    const delta = event.deltaY; // Get the vertical scroll delta
    console.log("event is ", event);

    let col1Top = rollerRef1.current.getBoundingClientRect().top;
    let col2Top = rollerRef2.current.getBoundingClientRect().top;
    let col3Top = rollerRef3.current.getBoundingClientRect().top;

    console.log("relative to ", rollerRef2.current.offsetTop);
    console.log("bro bro");
    console.log(col1Top);
    console.log(col2Top);
    console.log(col3Top);
    console.log("delta is ", delta);

    let body = document.body;
    let html = document.documentElement;

    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    let total = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    let current = window.scrollY;

    let per = current / total;
    console.log("per is ", per);

    //   translateY += 250;
    if (delta > 0) {
      valTopMoveCol2 = console.log("rag");
    } else if (delta < 0) {
      valTopMoveCol2 -= delta;
    }

    // rollerRef2.current.style.top = valTopMoveCol2;
    let tri1XInitial = rollerRef2.current.getBoundingClientRect().y;
    rollerRef2.current.style.top =
      -(tri1XInitial * per * 1.25) + tri1XInitial + "px";

    console.log(
      "moving amount is ",
      -(tri1XInitial * per * 1.25) + tri1XInitial
    );
  }

  function movement(event) {
    let movingAmount = 140;
    event.preventDefault(); // Prevent the default scrolling behavior
    const delta = event.deltaY; // Get the vertical scroll delta

    //   translateY += 250;
    if (delta > 0) {
      translateY += movingAmount;
      translateYLeft -= movingAmount;
      translateYRight -= movingAmount;
      // The user is scrolling down
    } else if (delta < 0) {
      // The user is scrolling up
      translateY -= movingAmount; // Update the translateY value based on the delta
      translateYLeft += movingAmount;
      translateYRight += movingAmount;
    }

    rollerRef2Container.current.style.transition = "transform 0.3s ease-out";
    rollerRef2Container.current.style.transform = `translateY(${translateY}px)`;

    rollerRef1Container.current.style.transition = "transform 0.3s ease-out";
    rollerRef1Container.current.style.transform = `translateY(${translateYRight}px)`;

    rollerRef3Container.current.style.transition = "transform 0.3s ease-out";
    rollerRef3Container.current.style.transform = `translateY(${translateYLeft}px)`;
  }

  useEffect(() => {
    // let observer = new IntersectionObserver(function(entries) {
    //     entries.forEach(function(entry) {
    //         console.log(entry.boundingClientRect.top)
    //       if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
    //         // Div has touched the top of the viewport
    //         console.log('Div has touched the top of the viewport!');
    //         setContainerTouched(entry.isIntersecting)
    //         // You can add any notification logic here
    //       }
    //     });
    //   });
    // observer.observe(containerRef1.current)
  });

  useEffect(() => {
    window.addEventListener("wheel", (event) => {
      const containerTop = containerRef1.current.getBoundingClientRect().top;

      if (containerTop <= 0) {
        setContainerTouched(true);
      }
      if (containerTop > 0) {
        setContainerTouched(false);
      }
    });

    if (containerTouched) {
      console.log("touched bro");
      //   window.addEventListener("wheel", mouseMovemen2);
    }
    if (!containerTouched) {
      console.log("nope");
    }

    // return () => window.removeEventListener("wheel", mouseMovemen2);
  });

  let array = Array.from(Array(6).keys());
  const placeImagesCol1 = (imageCount, column) =>
    array.map((index) => (
      <div key={index} className="flex flex-row justify-center ">
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-3xl object-cover object-center object"
        />
      </div>
    ));
  const placeImagesCol2 = (imageCount, column) =>
    array.map((index) => (
      <div key={index} className="flex flex-row justify-center ">
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-3xl object-cover object-center object "
        />
      </div>
    ));
  const placeImagesCol3 = (imageCount, column) =>
    array.map((index) => (
      <div key={index} className="flex flex-row justify-center ">
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-3xl object-cover object-center object "
        />
      </div>
    ));
  return (
    <div
      ref={containerRef1}
      className="grid grid-cols-3 pb-40 mt-24 bg-amber-500"
    >
      <div
        ref={rollerRef1Container}
        className="relative flex flex-row justify-center h-full overflow-hidden translate-y-24 bg-red-800"
      >
        <div
          ref={rollerRef1}
          className="absolute flex flex-col justify-center py-4 bg-green-700 gap-y-10 "
        >
          {placeImagesCol1(6, 1)}
        </div>
      </div>

      <div
        ref={rollerRef2Container}
        className="relative flex flex-row justify-center h-full overflow-hidden bg-pink-500 "
      >
        <div
          ref={rollerRef2}
          className="absolute flex flex-col justify-center py-4 top-[-200%] gap-y-10 bg-green-700 "
        >
          {placeImagesCol2(6, 2)}
        </div>
      </div>

      <div
        ref={rollerRef3Container}
        className="relative flex flex-row justify-center h-full overflow-hidden translate-y-24 bg-red-800"
      >
        <div
          ref={rollerRef3}
          className="absolute flex flex-col justify-center py-4 bg-green-700 gap-y-10 "
        >
          {placeImagesCol3(6, 3)}
        </div>
      </div>
    </div>
  );
}

export default Content5;

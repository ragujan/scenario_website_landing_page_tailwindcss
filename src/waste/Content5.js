import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function Content5() {
  let mainContainer = useRef(null);
  let rollerDiv1 = useRef(null);
  let rollerDiv2 = useRef(null);
  let rollerDiv3 = useRef(null);
  const [containerTouched, setContainerTouched] = useState(false);


  const [tri1XInitial, setTri1XInitial] = useState(0);
  const [tri3XInitial, setTri3XInitial] = useState(0);

  const scrollFunc = (event) => {
    const tri1 = rollerDiv1.current;
    const tri3 = rollerDiv3.current;
    let dist = 100;
    let body = document.body;
    let html = document.documentElement;
    let height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    let total = height;

    let current = window.scrollY;

    let per = current / total;

    rollerDiv1.current.style.top = -(dist * per * 5) + tri1XInitial + "px";
    rollerDiv3.current.style.top = -(dist * per * 5) + tri3XInitial + "px";
    // tri3.style.top = dist * per * 5 + tri3XInitial + "px";
  };



  useEffect(() => {
    if (rollerDiv1.current != null) {
      console.log("its not null")
      setTri1XInitial(rollerDiv1.current.getBoundingClientRect().y);
    }
    if (rollerDiv2.current != null) {
      setTri3XInitial(rollerDiv3.current.getBoundingClientRect().y);
    }

    window.addEventListener("wheel", (event) => {
      const containerTop = mainContainer.current.getBoundingClientRect().top;

      if (containerTop <= 0) {
        //container touched and passed the top viewport of the browser
        setContainerTouched(true);
      }
      if (containerTop > 0) {
        //container haven't touched the top viewport of the browser
        setContainerTouched(false);
      }
    });

    if (containerTouched) {
      window.addEventListener("scroll", scrollFunc);
    }
    if (!containerTouched) {
    }

    return () => window.removeEventListener("scroll", scrollFunc);
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
      <div key={index} className="flex flex-row justify-center bg-purple-800">
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-3xl object-cover object-center object "
        />
      </div>
    ));
  return (
    // main container
    <div ref={mainContainer} className="grid grid-cols-3 py-10 overflow-hidden bg-yellow-900">
      {/* roller one or column 1 */}
      {/* <div className="relative flex flex-row justify-center h-full overflow-hidden bg-blue-400"> */}
      <div
        ref={rollerDiv1}
        className="relative flex flex-col justify-center h-full overflow-hidden bg-blue-400"
      >
        {placeImagesCol1(6, 1)}
      </div>
      {/* </div> */}
      {/* roller two or column 2 */}
      <div
        ref={rollerDiv2}
        className="relative flex flex-col justify-center h-full overflow-hidden bg-red-400"
      >
        {placeImagesCol2(6, 2)}
      </div>
      {/* roller three or column 3 */}
      <div
        ref={rollerDiv3}
        className="relative flex flex-col justify-center h-full overflow-hidden bg-blue-400"
      >
        {placeImagesCol3(6, 3)}
      </div>
    </div>
  );
}

export default Content5;

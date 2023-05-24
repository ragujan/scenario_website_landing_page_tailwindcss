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

  function movingAnimation(event) {
    let delta = event.deltaY;
    console.log(delta);

    if (delta > 0) {
      //mouse scrolled down
      rollerDiv1.current.style.top =
        rollerDiv1.current.getBoundingClientRect().top - 15 + "px";
      console.log(rollerDiv1.current.style.top);
    }
    if (delta < 0) {
      rollerDiv1.current.style.top =
        rollerDiv1.current.getBoundingClientRect().top + 15 + "px";
      console.log(rollerDiv1.current.style.top);
      //mouse scrolled up
    }
  }
  function movingAnimation2() {
    console.log('bro')
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    console.log(val)
     
    rollerDiv1.current.style.transform = `translateY(${0.45 * val}%)`;
  }
  useEffect(() => {
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
      window.addEventListener("wheel", movingAnimation);
    }
    if (!containerTouched) {
    }

    return () => window.removeEventListener("wheel", movingAnimation);
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
    <div ref={mainContainer} className="grid grid-cols-3 py-10 bg-yellow-900">
      {/* roller one or column 1 */}
      {/* <div className="flex h-full flex-row justify-center relative overflow-hidden bg-blue-400"> */}
        <div ref={rollerDiv1} className="relative h-full px-2 bg-red-700">
          {placeImagesCol1(6, 1)}
        </div>
      {/* </div> */}
      {/* roller two or column 2 */}
      <div className="flex h-full flex-row justify-center relative overflow-hidden bg-red-400">
        <div
          ref={rollerDiv2}
          className="relative h-full px-2 top-[-90%] bg-green-700"
        >
          {placeImagesCol2(6, 2)}
        </div>
      </div>
      {/* roller three or column 3 */}
      <div className="flex h-full flex-row justify-center relative overflow-hidden bg-blue-400">
        <div ref={rollerDiv3} className="relative h-full px-2 bg-green-700">
          {placeImagesCol3(6, 3)}
        </div>
      </div>
    </div>
  );
}

export default Content5;

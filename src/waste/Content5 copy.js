import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function Content5() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const rollerRef = useRef(null);
  const containerRef = useRef(null);
  const [movedPos, setMovedPos] = useState(0);
  const [count, setCount] = useState(0);
  const [movedAmount, setMovedAmount] = useState(0);

  let body = document.body;
  let html = document.documentElement;

  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  let prevCurrent = 0;

  useEffect(() => {
    const observer1 = new IntersectionObserver(([entry]) => {
      setIsAnimationStarted(entry.isIntersecting);
    }, options);

    observer1.observe(containerRef.current);
  });

  const scrollFuncStart = () => {
    let total = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    let current = window.scrollY;
    console.log("current is ", current);
    console.log("total is ", total);
    //
    // setMovedPos(current/total);
    let per = current / total;

    let roller = rollerRef.current;

    let rollerPosY = roller.getBoundingClientRect().y;

    // console.log(rollerPosY)

    // console.log("moved pos is ",movedPos)
    // console.log("current pos ",per)
    if (per > movedPos) {
      console.log("scrolled down", rollerPosY);
      console.log(Math.round(-rollerPosY / 100 + 50));
      setMovedAmount(Math.round(-rollerPosY / 100 + 50));
      // console.log("sum version is ")
      // console.log((rollerPosY ));
      // console.log((rollerPosY * per * 1.5));
      // roller.style.transform = "translateY("+(movedAmount+50)+"px)";
    } else {
      // console.log("scrolled up")
      // roller.style.top =  (rollerPosY * per * 1.5) + rollerPosY +  "px";
    }
    console.log("some calculations ", rollerPosY * per * 1.5 - rollerPosY);

    // roller.style.transform = "translateY(" + ((rollerPosY) * (per) * 1.5) - (rollerPosY) + "px)";
    roller.style.transform =
      "translateY(" + rollerPosY * per * 1.5 - rollerPosY + "px)";
    // roller.style.top = Math.round(-(rollerPosY/100))  +  "px";
    // roller.style.top =  ((rollerPosY/25) * (per) * 1.5) - (rollerPosY/2.5) +  "px";
    //  roller.style.bottom = ( ((rollerPosY/25) * (per) * 1.5) + (rollerPosY/5)) +  "px";
    // roller.style.transform = "translateY("+-(rollerPosY * per * 1.5) + rollerPosY+")"
    // console.log(-(rollerPosY * per * 1.5) + rollerPosY);
    // console.log("top is "+roller.style.top)
  };
  useEffect(() => {
    // console.log(isAnimationStarted)
    if (isAnimationStarted) {
      // console.log("animation started")
      window.addEventListener("scroll", scrollFuncStart);
    }

    return () => window.removeEventListener("scroll", scrollFuncStart);
  });

  let array = Array.from(Array(6).keys());
  const placeImagesCol1 = (imageCount, column) =>
    array.map((index) => (
      <div key={index}>
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-lg object-cover object-center object"
        />
      </div>
    ));
  const placeImagesCol2 = (imageCount, column) =>
    array.map((index) => (
      <div key={index}>
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-lg object-cover object-center object "
        />
      </div>
    ));
  const placeImagesCol3 = (imageCount, column) =>
    array.map((index) => (
      <div key={index}>
        <img
          src={require(`../resources/col_${column}_${index + 1}.png`)}
          className="w-[380px] h-[380px] rounded-lg object-cover object-center object "
        />
      </div>
    ));
  return (
    <div className="grid grid-cols-1 px-5 py-20 bg-purple-800 md:grid-cols-3 lg:grid-cols-3 gap-x-10">
      {/* column 1 */}
      <div className="flex flex-col py-4 mt-10 gap-y-10">
        {placeImagesCol1(6, 1)}
      </div>
      <div
        ref={containerRef}
        className="relative flex flex-col overflow-hidden text-center bg-red-600 justify-items-center"
      >
        <div
          ref={rollerRef}
          className="absolute flex flex-col justify-center py-4  gap-y-10 bg-green-700 top-[0]"
        >
          {placeImagesCol2(6, 2)}
        </div>
      </div>
      <div className="flex flex-col py-4 mt-10 gap-y-10">
        {placeImagesCol3(6, 3)}
      </div>
    </div>
  );
}

export default Content5;

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function Content5() {

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }

    const [isAnimationStarted, setIsAnimationStarted] = useState(false);
    const rollerRef1 = useRef(null);
    const containerRef1 = useRef(null);

    const rollerRef2 = useRef(null);
    const containerRef2 = useRef(null);

    const rollerRef3 = useRef(null);
    const containerRef3 = useRef(null);

    const [posY, setPosY] = useState(0);

    let body = document.body,
        html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);

    let prevCurrent = 0;




    useEffect(() => {
        const observer1 = new IntersectionObserver(
            ([entry]) => {
                setIsAnimationStarted(entry.isIntersecting);
            }, options
        )
        // const observer2 = new IntersectionObserver(
        //     ([entry]) => {
        //         setIsAnimationStarted(entry.isIntersecting);
        //     }, options
        // )
        // const observer3 = new IntersectionObserver(
        //     ([entry]) => {
        //         setIsAnimationStarted(entry.isIntersecting);
        //     }, options
        // )

        observer1.observe(containerRef1.current);
        // observer2.observe(containerRef2.current);
        // observer3.observe(containerRef3.current);
    })
    let translateY = 0;
    function rag(event) {
        event.preventDefault(); // Prevent the default scrolling behavior

        const delta = event.deltaY; // Get the vertical scroll delta

        //   translateY += 250;
        if (delta > 0) {
            translateY += 250;
            // The user is scrolling down
        } else if (delta < 0) {
            // The user is scrolling up
            translateY -= 250; // Update the translateY value based on the delta
        }


        rollerRef1.current.style.transition = "transform 0.3s ease-out";
        rollerRef1.current.style.transform = `translateY(${translateY}px)`;

    }


    useEffect(() => {


        if (isAnimationStarted) {
            console.log("animation started")
            // window.addEventListener('wheel',
            //     rag
            // )

        }

        return () => window.removeEventListener('wheel',
            rag
        )
    })


    let array = Array.from(Array(6).keys());
    const placeImagesCol1 = (imageCount, column) => (
        array.map((index) => (
            <div key={index} className='flex flex-row justify-center '>
                <img src={require(`../resources/col_${column}_${index + 1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object' />
            </div>
        )
        )

    )
    const placeImagesCol2 = (imageCount, column) => (
        array.map((index) => (
            <div key={index}>
                <img src={require(`../resources/col_${column}_${index + 1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object ' />
            </div>
        )
        )

    )
    const placeImagesCol3 = (imageCount, column) => (
        array.map((index) => (
            <div key={index}>
                <img src={require(`../resources/col_${column}_${index + 1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object ' />
            </div>
        )
        )

    )
    return (
        <div className='grid h-32 grid-cols-1 px-5 py-20 gap-x-10'>
            {/* column 1 */}

            <div ref={containerRef1} className='relative h-full px-4 overflow-hidden text-center bg-red-600 '>

                <div ref={rollerRef1} className='absolute h-full px-3 bg-green-800 left-28 top-8'>
                    <div  className=''>
                        <img src={require(`../resources/col_${1}_${1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object' />
                    </div>

                </div>
            </div>
            {/* <div ref={containerRef2} className='relative z-40 flex flex-col overflow-hidden text-center bg-red-600 justify-items-center'>

                <div ref={rollerRef2} className='absolute flex flex-col justify-center py-4 bg-green-700 gap-y-10 top-[-90%]'>
                    {
                        // placeImagesCol2(6, 2)
                    }

                </div>
            </div> */}
            {/* <div ref={containerRef3} className='relative flex flex-col overflow-hidden text-center bg-red-600 justify-items-center'>

                <div ref={rollerRef3} className='absolute flex flex-col justify-center py-4 bg-green-700 gap-y-10'>
                    {
                        // placeImagesCol3(6, 3)
                    }

                </div>
            </div> */}


        </div>
    )
}

export default Content5

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function Content5() {

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }

    const [isAnimationStarted, setIsAnimationStarted] = useState(false);
    const rollerRef = useRef(null);
    const containerRef = useRef(null);
    const [movedPos,setMovedPos] = useState(0);

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

        observer1.observe(rollerRef.current);
    })



    const scrollFuncStart = () => {


        let total = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        let current = window.scrollY;

        let per = current / total;

        let roller = rollerRef.current;

        let rollerPosY = roller.getBoundingClientRect.y;
        
        let currentMovedPos = per;
        
        console.log(per)

    }
    useEffect(() => {



        console.log(isAnimationStarted)
        if (isAnimationStarted) {
            console.log("animation started")
            window.addEventListener('scroll',
                scrollFuncStart
            )

        }
        if (!isAnimationStarted) {
            console.log("animation stopped")
            window.removeEventListener('scroll',
                scrollFuncStart
            )
        }
        return () => window.removeEventListener('scroll',
            scrollFuncStart
        )
    })


    let array = Array.from(Array(6).keys());
    const placeImagesCol1 = (imageCount, column) => (
        array.map((index) => (
            <div key={index}>
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
        <div className='grid grid-cols-1 px-5 py-20 bg-purple-800 md:grid-cols-3 lg:grid-cols-3 gap-x-10'>
            {/* column 1 */}
            <div className='flex flex-col py-4 mt-10 gap-y-10'>
                {
                    placeImagesCol1(6, 1)
                }

            </div>
            <div ref={containerRef} className='relative overflow-hidden text-center bg-red-600'>

                <div ref={rollerRef} className='absolute flex flex-col justify-center py-4 gap-y-10'>
                    {
                        placeImagesCol2(6, 2)
                    }

                </div>
            </div>
            <div className='flex flex-col py-4 mt-10 gap-y-10'>
                {
                    placeImagesCol3(6, 3)
                }

            </div>


        </div>
    )
}

export default Content5

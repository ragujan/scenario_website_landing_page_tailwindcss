import React, { useEffect, useRef } from 'react'

function Content5() {

    const rollerRef = useRef(null);
    const containerRef = useRef(null);
    

    useEffect(() => {
       const observer1 = new IntersectionObserver(
        ([entry])=>{

        }
       )
    })

    useEffect(() => {

    })


    let array = Array.from(Array(6).keys());
    const placeImagesCol1 = (imageCount, column) => (
        array.map((index) => (
            <div>
                <img src={require(`../resources/col_${column}_${index + 1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object' />
            </div>
        )
        )

    )
    const placeImagesCol2 = (imageCount, column) => (
        array.map((index) => (
            <div>
                <img src={require(`../resources/col_${column}_${index + 1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object ' />
            </div>
        )
        )

    )
    const placeImagesCol3 = (imageCount, column) => (
        array.map((index) => (
            <div>
                <img src={require(`../resources/col_${column}_${index + 1}.png`)} className='w-[380px] h-[380px] rounded-lg object-cover object-center object ' />
            </div>
        )
        )

    )
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-10 px-5 py-20'>
            {/* column 1 */}
            <div className='flex flex-col py-4 gap-y-10 mt-10'>
                {
                    placeImagesCol1(6, 1)
                }

            </div>
            <div ref={containerRef} className='relative overflow-hidden'>

                <div ref={rollerRef} className='flex flex-col py-4 gap-y-10 absolute'>
                    {
                        placeImagesCol2(6, 2)
                    }

                </div>
            </div>
            <div className='flex flex-col gap-y-10 py-4 mt-10'>
                {
                    placeImagesCol3(6, 3)
                }

            </div>
            {/* <div>
           <img src={require("../resources/col_1_1.png")} className='w-[350px] h-[350px] rounded-lg p-5' />
           <img src={require("../resources/col_1_1.png")} className='w-[350px] h-[350px] rounded-lg p-5' />
           <img src={require("../resources/col_1_1.png")} className='w-[350px] h-[350px] rounded-lg p-5' />
           <img src={require("../resources/col_1_1.png")} className='w-[350px] h-[350px] rounded-lg p-5' />
           <img src={require("../resources/col_1_1.png")} className='w-[350px] h-[350px] rounded-lg p-5' />
           <img src={require("../resources/col_1_1.png")} className='w-[350px] h-[350px] rounded-lg p-5' />
       </div> */}

        </div>
    )
}

export default Content5

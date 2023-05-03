import React from 'react'

function Content4() {
    return (
        <div className='flex flex-col gap-y-16'>
            {/* step 1 */}
            <div className='grid grid-cols-2 px-16 '>
                <div className='flex flex-col px-10 justify-self-center '>
                    <img src={require("../resources/step_1_image.png")} className='w-[400px] h-[400px]  ' alt="" />
                </div>
                <div className='flex flex-col px-24'>
                    <div className='px-12 py-16 bg-white rounded-xl'>
                        <div className='py-3'>
                            <button className='px-4 py-2 text-2xl font-bold text-white bg-yellow-500 rounded-3xl'>Step 1</button>
                        </div>
                        <div>

                            <h1 className='pb-3 text-5xl font-bold text-gray-900'>Choose a set of visuals</h1>
                            <p className='text-lg'>Pick and upload your own training data: characters, props, vehicles, weapons, skins, buildings, concept art, pixel art, sketches, etc.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* step 2 */}
            <div className='grid items-center grid-cols-2 px-16'>

                <div className='flex flex-col px-24'>
                    <div className='px-12 py-16 bg-white rounded-xl'>
                        <div className='py-3'>
                            <button className='px-4 py-2 text-2xl font-bold text-white bg-yellow-600 rounded-3xl'>Step 2</button>
                        </div>
                        <div>

                            <h1 className='pb-3 text-5xl font-bold text-gray-900'>Train bespoke AI models</h1>
                            <p className='text-lg text-gray-900'>Create your own generative AI engines, in a few clicks. 100% online; no technical skill required.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col px-10 justify-self-center '>
                    <img src={require("../resources/step_2_iamge.gif")} className='w-[450px] h-[450px] rounded-xl ' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Content4


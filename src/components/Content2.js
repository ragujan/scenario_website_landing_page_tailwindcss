import React from 'react'

function Content23() {
    return (
        <div className=' pt-7'>
            <div className='grid grid-cols-1 px-10 pt-10 pb-20 bg-mainGray md:grid-cols-2 lg:grid-cols-3 gap-x-20'>
                {/* first div */}

                <div class="w-full  md:translate-y-8 py-8 bg-imageCardBg  rounded-lg">
                    <div className="box-border flex flex-row px-8 gap-x-4">
                        <img src={require("../resources/engine.png")} className='w-12 h-12' alt="" />
                        <p className='text-3xl font-bold text-white'>Build your own AI Engine</p>
                    </div>

                    <div className=' px-28 mt-52'>
                        <p className='' >Create proprietary AI models, custom-trained with your own data</p>
                    </div>
                </div>
                {/* second div */}
                <div class="  py-8 rounded-lg bg-imageCardBg">
                    <div className="box-border flex flex-row px-8 gap-x-4">
                        <img src={require("../resources/unlock.png")} className='w-12 h-12' alt="" />
                        <p className='text-3xl font-bold text-white'>Unlock astounding creativity</p>
                    </div>

                    <div className='mt-32 px-28'>
                        <p className='' style={{ margin: '0 -10px' }}>Quickly test new game concepts and ideas, with more efficient prompting</p>
                    </div>
                </div>
                {/* third div */}
                <div class=" md:translate-y-8  py-8 rounded-lg bg-imageCardBg">
                    <div className="box-border flex flex-row px-8 gap-x-4">
                        <img src={require("../resources/rocket.png")} className='w-12 h-12' alt="" />
                        <p className='text-3xl font-bold text-white'>Speed up
your production</p>
                    </div>

                    <div className='px-28 mt-52'>
                        <p className='' style={{ margin: '0 -10px' }}>Generate unique, high-quality content, cohesive to your art direction</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Content23

import React from 'react'

function Rjdarjeeling() {
    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 px-5 lg:px-10 gap-6'>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className=''>
                            <h2 className='mb-3 text-4xl text-themecolor-themebrown font-bold'>RJ Resort, Darjeeling</h2>
                            <p className='mb-3 text-md text-black font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className='text-md text-white hover:text-themecolor-darkgreen bg-black px-8 py-2 rounded-md'>Read More</button>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6'>
                        <div className='relative w-full max-w-lg 2xl:max-w-2xl'>
                            <img className='w-full rounded-lg shadow-md' src='/images/rj-darjeeling.jpg' alt=''/>
                            <img className='absolute bottom-[-20px] right-[-20px] w-2/5 rounded-lg border-2 border-themecolor-themebrown shadow-lg' src='/images/room-darjeeling.jpg' alt=''/>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 px-5 lg:px-10 py-12 gap-6 mt-[3rem] bg-orange-50'>
                <div className='col-span-12 lg:col-span-6 order-2 md:order-1'>
                        <div className='relative w-full max-w-lg 2xl:max-w-2xl'>
                            <img className='w-full rounded-lg shadow-md' src='/images/rj-darjeeling.jpg' alt=''/>
                            <img className='absolute bottom-[-20px] right-[-20px] w-2/5 rounded-lg border-2 border-themecolor-themebrown shadow-lg' src='/images/room-darjeeling.jpg' alt=''/>
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-6 order-1 md:order-2'>
                        <div className=''>
                            <h2 className='mb-3 text-4xl text-themecolor-themebrown font-bold'>Aurom, Siliguri</h2>
                            <p className='mb-3 text-md text-black font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className='text-md text-white hover:text-themecolor-darkgreen bg-black px-8 py-2 rounded-md'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rjdarjeeling

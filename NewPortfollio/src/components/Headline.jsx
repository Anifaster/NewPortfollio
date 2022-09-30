import React from 'react'

const Headline = () => {
    return (
        <div className='max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Though 8/261</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>x
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/824635/pexels-photo-824635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaraunts</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://media.istockphoto.com/photos/kebab-grilled-meat-on-a-cutting-board-with-flour-and-vinaigrette-picture-id1270859209?s=612x612" alt="/" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4 '>We Deliver Deserts Too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl  ' src="https://images.pexels.com/photos/110934/pexels-photo-110934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            
        </div>
    )
}

export default Headline

import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='bg-blue-900 w-full h-5/6 pb-5 pe-12 ps-12'>
        <section className='xl:flex lg:flex md:flex sm:block block' data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
            <div className='xl:ml-32 lg:ml-32 md:ms-16 sm:ms-8 ms-0 pt-16'>
                <img src="cp.png" className=' w-20' loading='lazy' alt="connectpro_logo" />
            </div>
            <div className='flex xl:justify-end lg:justify-end md:justify-center sm:justify-start justify-start pt-10'>
                <h1 className='text-white xl:w-7/12 lg:w-7/12 md:7/12 sm:w-9/12 w-full leading-8'>ConnectPro Apps Limited is an IT firm that develops and deploys Technology platforms and solutions that make life easier, and work smarter. <br/> Our leading technological transformations have affected lives across various landscapes within the continent.</h1>
            </div>
        </section>
        <div className='xl:flex lg:flex md:flex sm:block block justify-evenly pt-12' data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
            <Link to="/company">
                <aside className='bg-white w-52 h-52 rounded-full flex justify-center text-center items-center content-center font-bold text-xl hover:bg-blue-400 border-blue-600 hover:border-yellow-500 border-2 mt-6'>
                    About Us <br/>Who we are
                </aside>
            </Link>
            <Link to="/company#why">
                <aside className='bg-white w-52 h-52 rounded-full flex justify-center text-center items-center content-center font-bold text-xl hover:bg-blue-400 border-blue-600 hover:border-yellow-500 border-2 mt-6'>
                    Why work with us
                </aside>
            </Link>
            <Link to="/solutionn">
                <aside className='bg-white w-52 h-52 rounded-full flex justify-center text-center items-center content-center font-bold text-xl hover:bg-blue-400 border-blue-600 hover:border-yellow-500 border-2 mt-6'>
                    Our Impact
                </aside>
            </Link>
        </div>
    </section>
  )
}

export default About
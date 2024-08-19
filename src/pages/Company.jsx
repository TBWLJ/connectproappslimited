import React from 'react'
import Boards from '../components/Boards'
import Booking from '../components/Booking'
import Footer from '../components/Footer'

const Company = () => {
    return (
        <>
            <div className="mt-32 text-center">
                <h1 className='text-4xl font-bold'>Mission, Vision and Values</h1>
            </div>
            <section className="pt-14">
                <div className="w-full h-auto px-4 py-8 lg:px-24 bg-white border-y-2 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 font-bold text-xl">Our Mission</div>
                    <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                    Creating technology platforms with the goal of making work more efficient and improving quality of life.
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-8 lg:px-24 bg-blue-100 border-y-2 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 font-bold text-xl">Our Vision</div>
                    <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                    Being the partner of choice for transforming businesses and lives.
                    </div>
                </div>
                <div className="w-full h-auto px-4 py-8 lg:px-24 bg-white border-y-2 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 font-bold text-xl">Our Values</div>
                    <div className="lg:w-2/3 text-xl mt-4 lg:mt-0 lg:ml-8 text-center lg:text-left">
                    Connectpro foundation is grounded in a corporate culture that not only defines our identity but also shapes our unchanging dedication to our clients. These principles are the core of our being.
                    </div>
                </div>
            </section>
            <div className="mt-32 mb-32 text-center">
                <h1 className='text-4xl font-bold'>Management Team</h1>
            </div>
            <Boards />
            <Booking />
            <Footer />
        </>
    )
}


export default Company
import React from 'react'

const Partner = () => {
  return (
    <section className='flex justify-center pb-14'>
        <aside>
            <div className='text-center pt-28'>
                <h1 className='text-3xl font-bold'>Some of our clients over the years</h1>
            </div>
            <div className='flex mt-10'>
                <img className='xl:w-36 lg:w-36 md:w-28 sm:w-20 w-20' loading='lazy' src="afric.png" alt="" />
                <img className='xl:w-36 lg:w-36 md:w-28 sm:w-20 w-20 xl:ml-44 lg:ml-44 md:ml-24 sm:ml-12 ml-12' loading='lazy' src="tech.png" alt="" />
                <img className='xl:w-36 lg:w-36 md:w-28 sm:w-20 w-20 xl:ml-44 lg:ml-44 md:ml-24 sm:ml-12 ml-12' loading='lazy' src="titos.png" alt="" />
                <img className='xl:w-36 lg:w-36 md:w-28 sm:w-20 w-20 xl:ml-44 lg:ml-44 md:ml-24 sm:ml-12 ml-12' loading='lazy' src="badge.png" alt="" />
            </div>
        </aside>
    </section>
  )
}

export default Partner
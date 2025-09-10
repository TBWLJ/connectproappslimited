import React from 'react'

const Services = () => {
  return (
    <div>
        <div className='mt-32 text-center pb-10' data-aos="zoom-in" data-aos-easing="linear"
        data-aos-duration="1500">
            <h1 className='text-3xl font-bold'>Our Core Services</h1>
        </div>
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-red-200 text-center shadow">
            <div class="flex flex-1 flex-col p-8">
            <img class="mx-auto flex-shrink-0 h-48" src="ui.png" loading='lazy' alt=""/>
            <h3 class="mt-6 text-xl font-bold text-gray-900">UI/UX Design</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-xl text-gray-500">Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.</dd>
            </dl>
            </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-red-200 text-center shadow">
            <div class="flex flex-1 flex-col p-8">
            <img class="mx-auto flex-shrink-0 h-48" src="5829456.webp" loading='lazy' alt=""/>
            <h3 class="mt-6 text-xl font-bold text-gray-900">Graphic Design</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-xl text-gray-500">Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.</dd>
            </dl>
            </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-cyan-200 text-center shadow">
            <div class="flex flex-1 flex-col p-8">
            <img class="mx-auto flex-shrink-0 h-48" src="mob.png" loading='lazy' alt=""/>
            <h3 class="mt-6 text-xl font-bold text-gray-900">Web Development</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-xl text-gray-500">Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.</dd>
            </dl>
            </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-orange-200 text-center shadow">
            <div class="flex flex-1 flex-col p-8">
            <img class="mx-auto flex-shrink-0 h-48" src="mobile.webp" loading='lazy' alt=""/>
            <h3 class="mt-6 text-xl font-bold text-gray-900">Mobile Apps</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-xl text-gray-500">We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.</dd>
            </dl>
            </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-pink-200 text-center shadow">
            <div class="flex flex-1 flex-col p-8">
            <img class="mx-auto flex-shrink-0 h-48" src="5829456.webp" loading='lazy' alt=""/>
            <h3 class="mt-6 text-xl font-bold text-gray-900">IoT</h3>
            <dl class="mt-1 flex flex-grow flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-xl text-gray-500">Hire IoT programmers who develop bespoke and innovative IoT solutions to simplify and automate complex business processes to save overall operational cost.</dd>
            </dl>
            </div>
        </li>
        </ul>
    </div>
  )
}

export default Services
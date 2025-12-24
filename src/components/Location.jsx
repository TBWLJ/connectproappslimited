import React from 'react'

const Location = () => {
  return (
    <>
        <div className="text-center mt-28">
          <h1 className="text-3xl font-bold">Our Contacts</h1>
        </div>
        <section className="flex flex-wrap justify-evenly px-5 pb-10">
            <div
              className="w-full sm:w-96 bg-red-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">Call us:</h1>
              <a href="tel:+2348120940814">
                <p className="text-lg text-center pt-5">+2348120940814 <br/> +2348141242512</p>
              </a>
            </div>
            <div
              className="w-full sm:w-96 bg-blue-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">Email us:</h1>
              <p className="text-lg text-center pt-5">devjtaiwo@gmail.com</p>
            </div>
            <div
              className="w-full sm:w-96 bg-green-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">GHANA OFFICE:</h1>
              <p className="text-lg text-center pt-5">Tema Express Road, Along Tema Sea port, Accra, Ghana</p>
            </div>
            <div
              className="w-full sm:w-96 bg-green-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">ogbomoso OFFICE:</h1>
              <p className="text-lg text-center pt-5">1500LT Junction, Under G Lautech Area, Ogbomoso, Oyo State, Nigeria.</p>
            </div>
            <div
              className="w-full sm:w-96 bg-red-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl uppercase">Asipa OFFICE:</h1>
              <p className="text-lg text-center pt-5">Asipa-Akinlalu Express Road, Asipa, Ife North, Osun State, Nigeria.</p>
            </div>
        </section>
        <hr />
        <div className="text-center mt-28">
          <h1 className="text-3xl font-bold">USE A FORM</h1>
        </div>
    </>
  )
}

export default Location
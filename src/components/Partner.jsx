import React from 'react';

const Partner = () => {
  return (
    <>
      <div className="text-center pt-28">
        <h1 className="text-3xl font-bold">Some of our clients over the years</h1>
      </div>
      <section className="flex justify-center pb-14">
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {['afric.png', 'icon.png', 'shop4mi-icon.png', 'cp.png', 'logonew.png'].map((src, index) => (
            <img
              key={index}
              className="w-20 sm:w-24 md:w-28 lg:w-24 xl:w-24 h-20 sm:h-24 md:h-24 lg:h-24 xl:h-24 object-contain"
              loading="lazy"
              src={src}
              alt={`Client logo ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Partner;

import React from 'react';

const boardsData = [
  {
    name: 'TAIWO AYOMIDE',
    role: 'Chief Executive Officer',
    imgSrc: 'ayomi.png',
  },
  {
    name: 'OLUWAGBEMI JEDUTHUN',
    role: 'Chief Operating Officer',
    imgSrc: 'Jedman.png',
  },
  {
    name: 'AKERELE TIOLUWANIMI',
    role: 'Head of Marketing',
    imgSrc: 'Tiolu.png',
  },
  { 
    name: 'EWUOLA REUBEN',
    role: 'Head, Business Unit',
    imgSrc: 'Ewuola.png',
  },
  {
    name: 'OYEYIPO FAVOUR',
    role: 'Head of Operation',
    imgSrc: 'favour.png',
  },
  {
    name: 'AJIBADE OLUWATOYIN',
    role: 'Chief Product Officer',
    imgSrc: 'Toyin_prev_ui.png',
  },
];

const Boards = () => {
  return (
    <fieldset>
      <section className="flex flex-wrap justify-center px-3 xl:px-20 lg:px-20 md:px-9 sm:px-9 gap-6">
        {boardsData.map((board, index) => (
          <div key={index} className="w-full sm:w-80 md:w-64 lg:w-80 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-96 object-cover"
              src={board.imgSrc}
              alt={`${board.name}`}
            />
            <section className="flex justify-center -mt-6">
              <div className="bg-blue-600 w-4/5 h-16 text-center pt-2 rounded-md shadow-lg">
                <h1 className="text-white text-xl font-bold">{board.name}</h1>
                <h2 className="text-white">{board.role}</h2>
              </div>
            </section>
          </div>
        ))}
      </section>
    </fieldset>
  );
};

export default Boards;

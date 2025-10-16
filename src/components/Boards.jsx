import React from 'react';

const boardsData = [
  {
    name: 'TAIWO AYOMIDE',
    role: 'Principal Software Architect',
    imgSrc: 'ayomi.png',
    link: 'https://thetbwlj.vercel.app'
  },
  {
    name: 'OLUWAGBEMI JEDUTHUN',
    role: 'Software Engineer',
    imgSrc: 'Jedman.png',
    // link: 'https://github.com/jedi-jedi'
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
              <div className="bg-blue-600 w-4/5 h-auto text-center pt-2 rounded-md shadow-lg">
                <h1 className="text-white text-xl font-bold">{board.name}</h1>
                <h2 className="text-white">{board.role}</h2>
                {board.link && (
                  <a href={board.link} target="_blank" rel="noopener noreferrer" className="text-white underline">
                    View Profile
                  </a>
                )}
              </div>
            </section>
          </div>
        ))}
      </section>
    </fieldset>
  );
};

export default Boards;

import { Link } from 'react-router-dom'

const Solutionn = () => {
    const solutions = [
      {
        title: "ConnectPro Chat App",
        description:
          "ConnectPro is a professional networking app designed to help people make business connections, share their experiences and resume, and find job by bringing professionals in different fields together.",
        imgSrc: "cp.png",
        imgAlt: "ConnectPro Logo",
        linkText: "Visit Link",
        anchor: "https://connectpros.netlify.app"
      },
      {
        title: "AssessLive",
        description:
          "AssessLive is an app designed for real-time assessments, allowing instructors and students to interact seamlessly and track progress effectively.",
        imgSrc: "cp.png",
        imgAlt: "AssessLive Logo",
        linkText: "Visit Link",
        anchor: "https://connectproappslimited.vercel.app"
      },
      {
        title: "LiveKick",
        description:
          "LiveKick is a platform that connects fitness enthusiasts with personal trainers through live video sessions, offering customized workout plans.",
        imgSrc: "cp.png",
        imgAlt: "LiveKick Logo",
        linkText: "Visit Link",
        anchor: "https://connectproappslimited.vercel.app"
      },
    ];
  
    return (
      <>
        <div className="text-center mt-28">
          <h1 className="text-3xl font-bold">Our Solutions</h1>
        </div>
        <section className="flex flex-wrap justify-evenly px-5 pb-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="w-full sm:w-96 bg-gray-200 mt-10 p-5 flex flex-col items-center"
            >
              <h1 className="font-bold text-xl">{solution.title}</h1>
              <p className="text-lg text-center pt-5">{solution.description}</p>
              <img
                src={solution.imgSrc}
                className="w-12 hover:w-16 mt-5 transition-all duration-300"
                alt={solution.imgAlt}
              />
              <Link to={solution.anchor}>
                <h1 className="font-bold text-xl pt-5">{solution.linkText}</h1>
              </Link>
            </div>
          ))}
        </section>
        <hr />
      </>
    );
  };
  
  export default Solutionn;
  
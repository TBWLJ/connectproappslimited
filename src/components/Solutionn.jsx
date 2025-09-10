import { Link } from 'react-router-dom'

const Solutionn = () => {
    const solutions = [
      {
        title: "Panelly",
        description:
          "Panelly is a cloud-based platform that lets freelancers and service-based businesses create dedicated, secure client portals for each of their projects, without writing a single line of code.",
        imgSrc: "icon.png",
        imgAlt: "Panelly Logo",
        linkText: "Visit Link",
        anchor: "https://www.panelly.name.ng"
      },
      {
        title: "CoonnectPro Logistics",
        description:
          "ConnectPro Logistics services is a branch of ConnectPro that deals with delivery of goods both home and abroad. It is available in Africa and some part of North America.",
        imgSrc: "cm.png",
        imgAlt: "ConnectPro Logo",
        linkText: "Visit Link",
        anchor: "https://connectmarket.vercel.app"
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
        <div className="text-center mt-28" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
          <h1 className="text-3xl font-bold">Our Solutions</h1>
        </div>
        <section className="flex flex-wrap justify-evenly px-5 pb-10" data-aos="fade-up" data-aos-easing="linear"
        data-aos-duration="1500">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="w-full sm:w-96 bg-gray-200 mt-10 p-5 flex flex-col items-center rounded-xl"
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
  
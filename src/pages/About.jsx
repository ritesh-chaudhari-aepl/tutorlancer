import MainCard from "../components/cards/MainCard";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";

const About = () => {
  return (
    <section id="services" className="bg-primaryWhite py-10">
      <div className="mx-auto max-w-screen-xl sm:">
        <div className="py-10 sm:px-6">
          <div className="" aria-label="card components">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-10">
              <div className="">
                <h2 className="text-3xl text-center sm:text-left sm:text-[51px] sm:leading-[51px] mb-4 font-Inter font-bold">
                  Why are we best
                  <br /> from others
                </h2>
                <p className="font-medium text-center px-3 sm:px-0 sm:text-left font-Inter sm:text-base sm:mb-4 sm:tracking-[0.8px]">
                  Get all your Assignments/Projects covered by our highly
                  experienced teams of Writers.
                </p>
                <div className="mt-10">
                  <a
                    href="#contact"
                    className="bg-yellow-dark text-black px-8 py-3 rounded-full sm:mb-10 sm:ml-0 ml-24 mt-6"
                  >
                    Start now
                  </a>
                </div>
              </div>
              {/* card components */}
              <div className="px-4 mt-14 sm:pt-4 lg:pt-2 sm:mt-0 md:gap-8 md:grid md:grid-cols-2 ">
                <MainCard
                  icon={service1}
                  // iconBgColor="bg-violet-dark"
                  title="Apps for Mobile & Web"
                  description="Our tutors will make very user-friendly and efficient apps, exactly matching your needs. Boost your business now !"
                />
                <MainCard
                  icon={service2}
                  // iconBgColor="bg-green-lime"
                  title="Homework Help"
                  description="Stuck with homewok? PhD tutors have a distinctive mode of expression assisting students to solve assignments flawlessly."
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 sm:mt-4 sm:gap-5 lg:grid-cols-4 ">
            <MainCard
              icon={service3}
              // iconBgColor="bg-blue-slateBlue"
              title="Live Sessions"
              description="We provide the best tutors for you to interact with in real time to get instant solutions for your problems. Pickup your phone now !"
            />
            <MainCard
              icon={service4}
              // iconBgColor="bg-green-lime"
              title="Lab Work"
              description="PSpice, Orcad, AutoCAD, Solidworks, and many more simulation softwares, our Lab tutors can handle them all."
            />
            <MainCard
              icon={service5}
              // iconBgColor="bg-green-lime"
              title="Project Help"
              description="Get the most professional project assistance from our PhD tutors who can guide and walk you through your project online."
            />
            <MainCard
              icon={service6}
              // iconBgColor="bg-green-lime"
              title="Writing Help"
              description="Our Native essay tutors help you meet university standards in terms of writing and structuring of academic essays."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import user from "../assets/user.svg";
import find from "../assets/find.svg";
import MainCard from "../components/cards/MainCard";

const About = () => {
  return (
    <section className="bg-primaryWhite py-10">
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
                  lorem ipsum is simply dummy text of the printing and
                  <br />
                  typesetting industry.
                </p>
                <button className="bg-yellow-dark text-black px-8 py-3 rounded-full sm:mb-10 sm:ml-0 ml-24 mt-6">
                  Start now
                </button>
              </div>
              {/* card components */}
              <div className="px-4 mt-14 sm:mt-0 md:gap-8 md:grid md:grid-cols-2 ">
                <MainCard
                  icon={user}
                  iconBgColor="bg-blue-blue"
                  title="Online tutoring"
                  description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the 1500s, when"
                />
                <MainCard
                  icon={find}
                  iconBgColor="bg-green-lime"
                  title="Online tutoring"
                  description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the 1500s, when"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 sm:mt-4 sm:gap-5 lg:grid-cols-4 ">
            <MainCard
              icon={find}
              iconBgColor="bg-green-lime"
              title="Online tutoring"
              description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the 1500s, when"
            />
            <MainCard
                  icon={find}
                  iconBgColor="bg-green-lime"
                  title="Online tutoring"
                  description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the 1500s, when"
                />
                <MainCard
                  icon={find}
                  iconBgColor="bg-green-lime"
                  title="Online tutoring"
                  description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the 1500s, when"
                />
                <MainCard
                  icon={find}
                  iconBgColor="bg-green-lime"
                  title="Online tutoring"
                  description="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the 1500s, when"
                />
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;

import { BsFillPlayFill } from "react-icons/bs";
import hero from "../../assets/heroImage.png";
import torch from "../../assets/light.svg";
import Banner from "./Banner";

const Hero = () => {
  // const bgstyles = {
  //   backgroundImage: `url(${hero})`,
  //   backgroundSize: 'contain',
  //   backgroundPosition: '50%',
  //   backgroundRepeat: 'no-repeat',
  //   height: '100vh',
  // };
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="h-64 pt-20 lg:pt-20 lg:order-last sm:h-[480px]">
            <img
              alt="hero"
              src={hero}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <div className="">
              <div className="flex gap-2 mb-4 items-center sm:flex-row sm:gap-3">
                <img src={torch} alt="torch" className="w-[12px]" />
                <span className="capitalize font-Inter font-semibold text-sm ">
                  best e-learning platform
                </span>
              </div>
              <h1 className="text-6xl md:w1/2 font-bold capitalize xl:text-[67px] xl:leading-[77px] mb-4">
                {/* getting best <br />quality education<br /> is now more <span>easier</span> */}
                The Best Way to take help in your academic
              </h1>

              <p className="mt-4 text-gray-600">
                Hire us for quality solutions to all your coursework at
                affordable prices.
              </p>

              <div className=" mt-8 mb-6 flex flex-col gap-10 sm:flex-row sm:gap-6">
                <div>
                  <a
                    href="#"
                    className="inline-block rounded-full bg-yellow-dark px-12 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
                  >
                    join course
                  </a>
                </div>
                <div className="flex flex-row gap-3 items-center sm:only:justify-center">
                  <a
                    href="#"
                    className="inline-block rounded-full bg-blue-blue p-3 text-sm font-medium text-white transition hover:bg-blue-darkBlue focus:outline-none "
                  >
                    <BsFillPlayFill size={25} />
                  </a>
                  <span className="font-bold text-Inter capitalize">
                    see how it works?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </section>
  );
};

export default Hero;

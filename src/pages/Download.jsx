import downloadImage from "../assets/download.png";
import google from "../assets/google.svg";
import { AiFillApple } from "react-icons/ai";

const Download = () => {
  const bgstyles = {
    backgroundImage: `url(${downloadImage})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section
      className="bg-primaryWhite relative overflow-hidden"
      aria-label="download feature section"
    >
      <div className="text-white xl:overflow-hidden" style={bgstyles}>
        <div className="mx-auto max-w-screen-xl ">
          <div className="py-6 sm:py-12 sm:px-0 px-10">
            <div className="sm:px-10 flex flex-col">
              <p className="font-bold font-QuickSand text-3xl sm:text-[39px] capitalize sm:tracking-[2px] sm:leading-[39px] mb-3">
                instant & dedicated whatsapp support
              </p>
              <p className="font-[300] text-sm font-QuickSand leading-[20px] capitalize sm:leading-[29px] mb-3">
                Real-time tools and rich insights mean our support solution
                amplifies your team for<br /> an unbeatable
                 experience.
              </p>
              <p className="text-sm font-QuickSand sm:text-lg capitalize sm:leading-[39px] mb-3">
                Get the App
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <button className="ring-0 p-2 xl:px-8 xl:py-4 bg-black transition rounded-md hover:bg-black/75 focus:ring-red-100 capitalize flex items-center gap-2">
                  <img src={google} alt="icon" className="w-8" />
                  <span className="flex flex-col">
                    <span className="uppercase text-[10px] text-left font-bold font-Inter">
                      download on
                    </span>
                    <span>Google Playstore</span>
                  </span>
                </button>
                <button className="ring-0 p-2 xl:px-8 xl:py-4 bg-black transition rounded-md hover:bg-black/75 focus:ring-red-100 capitalize flex items-center gap-2">
                  <AiFillApple size={30} color="white" />
                  <span className="flex flex-col">
                    <span className="uppercase text-[10px] text-left font-bold font-Inter">
                      get it on
                    </span>
                    <span>Google Playstore</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[34rem] top-[8rem]  xl:left-[56rem] xl:top-[7rem] ">
          <div className="circle rounded-full h-32 w-32 bg-violet-main flex flex-col justify-center items-center text-center relative left-[-4rem] top-[3rem] z-10">
            <span className="font-QuickSand font-bold sm:text-[40px]">98%</span>
            <span className="text-[15px] font-QuickSand font-light leading-0 text-center">
              satisfied
              <br />
              customers
            </span>
          </div>

          <div className="circle rounded-full h-48 w-48 bg-green-garden flex flex-col p-2 items-center text-center">
            <span className="font-QuickSand font-bold sm:text-[30px]">
              4.5/5
            </span>
            <span className="text-[15px] font-QuickSand font-light leading-0 text-center">
              clients rate on
              <br />
              tutorlancer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
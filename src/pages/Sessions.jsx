import { HiOutlineMail } from "react-icons/hi";
import StepperCard from "../components/cards/StepperCard";
import ar1 from "../assets/down.svg";
import ar2 from "../assets/up.svg";
import bg from "../assets/bg.png";

const Sessions = () => {
  return (
    <section id="sessions" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl mt-16 sm:mt-0">
        <section>
          <div className=" mb-24">
            <h3 className="capitalize font-Inter text-4xl leading-[50px] px-3 sm:px-0 font-bold text-center sm:text-[49px] sm:leading-[60px] mb-6">
              online sessions with the best tutors
            </h3>
            <p className="capitalize text-sm font-Inter font-bold text-center leading-[30px] sm:text-base sm:leading-[27px] sm:px-0 px-6">
              Our tutors are experts from various domains, they have all
              experience to handle your queries
              <br /> with ease. Get the best solutions on your personal phone
              now.
            </p>
          </div>
          <div className=" px-4">
            <div className="flex flex-col gap-10 lg:gap-3 lg:flex-row justify-center items-center">
              <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
                <StepperCard
                  icon={<HiOutlineMail />}
                  bgColor="bg-[#FFDCE5]"
                  badgeCount={1}
                  iconColor="hotpink"
                  title="Connect with us via email/ WhatsApp"
                />
                <img
                  src={ar1}
                  alt="ar1"
                  className="w-20 rotate-90 lg:rotate-0"
                />
              </div>
              <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
                <StepperCard
                  icon={<HiOutlineMail />}
                  bgColor="bg-[#FFDCE5]"
                  badgeCount={2}
                  iconColor="hotpink"
                  title={`Book a session for the\n topic of your choice`}
                />
                <img
                  src={ar2}
                  alt="ar1"
                  className="w-20 rotate-90 lg:rotate-0"
                />
              </div>
              <div className="flex flex-col gap-9 lg:gap-0 lg:flex-row justify-center items-center">
                <StepperCard
                  icon={<HiOutlineMail />}
                  bgColor="bg-[#FFDCE5]"
                  badgeCount={3}
                  iconColor="hotpink"
                  title={"Learn from the best\n Indian Tutors we provide"}
                />
                <img
                  src={ar1}
                  alt="ar1"
                  className="w-20 rotate-90 lg:rotate-0"
                />
              </div>
              <div>
                <StepperCard
                  icon={<HiOutlineMail />}
                  bgColor="bg-[#FFDCE5]"
                  badgeCount={4}
                  iconColor="hotpink"
                  title={"Turn your grades into\n Mega grades"}
                />
                {/* <img src={ar1} alt="ar1" /> */}
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="lg:mt-28 mt-10 px-10">
          <div className="py-8 sm:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
              <div className="relative h-52 sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src={bg}
                  className=" h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-24">
                <h2 className="text-3xl font-bold font-Inter capitalize sm:leading-[66px] sm:text-[50px]">
                  Get all your Assignments/Projects covered by our highly
                  experienced teams of Writers
                </h2>

                <p className="mt-4 text-gray-600">
                  We know that students coming to our essay writing service
                  expect us to provide them with original content. That's
                  exactly what we do. We write a paper from scratch while
                  following your instructions.We assign expert tutors to ensure
                  students get detailed, step-by-step solutions for their
                  assignments.Students across the UK and other countries know
                  who and how professional we are.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block rounded-full bg-yellow-dark px-12 py-3 text-sm font-medium text-black transition hover:bg-yellow-light focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Sessions;

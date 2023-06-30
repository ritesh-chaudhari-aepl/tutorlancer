import logo from "../assets/logo-wthout-bg.png";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#525FE1] text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="flex sm:items-center sm:text-center md:items-start md:text-left flex-col gap lg:flex-row lg:gap-28">
          <div className="flex flex-col basis-1/2 ">
            <div className="flex justify-center text-black sm:justify-start">
              {/* <span className="text-[25px] tracking-[10px] border border-white p-2">
                LOGO
              </span> */}
              <img src={logo} className="w-24" alt="logo" />
            </div>
            <div className="flex flex-col mt-10 gap-2 leading-[30px] ">
              <p>
                Genius Tutors is an online platform that connects online tutors
                with students across the globe who seeks academic help.
              </p>
              {/* <span className="font-inter">
                <strong>Email</strong>: support@thegoodgrades.com
              </span> */}
              <span className="font-inter">
                <strong>Phone</strong>:{" "}
                <a href="tel:917761814102">+91 77618-14102</a>
              </span>
              {/* <span className="font-inter capitalize text-base">
                <strong>Address</strong>: c/o -s.k.mishra, c.m.r.i <br />
                gate, bartand, dhanbad, jharkhand,
                <br /> india (826001){" "}
              </span> */}
            </div>
          </div>

          <div className="flex basis-1/4 flex-col mt-10 lg:mt-0 grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
            <div className="">
              <p className="text-lg font-medium text-white">Services</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-black/75"
                      href="/"
                    >
                      Online Tutoring
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black/75"
                      href="/"
                    >
                      Homework Help
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black/75"
                      href="/"
                    >
                      Live Session
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black/75"
                      href="/"
                    >
                      Project Help
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black/75"
                      href="/"
                    >
                      Lab Work
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-black/75"
                      href="/"
                    >
                      Writing Help
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              {/* mobile image */}
              {/* <Image
                src={phone}
                alt="phone"
                className="absolute lg:left-72 hidden md:block -top-72 h-96 lg:h-[30rem]"
              /> */}
            </div>
          </div>

          <div className="mt-6 lg:mt-0">
            <div className="">
              <span className="font-inter capitalize text-base">
                <strong>Address</strong>: c/o -s.k.mishra, c.m.r.i <br />
                gate, bartand, dhanbad, jharkhand,
                <br /> india (826001){" "}
              </span>
            </div>

            <div>
              {/* mobile image */}
              {/* <Image
                src={phone}
                alt="phone"
                className="absolute lg:left-72 hidden md:block -top-72 h-96 lg:h-[30rem]"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:flex place-content-center md:block w-full border-t border-white pt-6 pb-12">
        <div className=" mx-auto max-w-screen-xl px-4 items-center sm:flex sm:justify-between sm:text-left">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row gap-3 items-center ">
              <a
                className="text-[12px] lg:text-base text-white transition hover:text-white/75"
                href="/termsandcondition"
              >
                Terms & Conditions
              </a>

              <span className="mr-3">|</span>
            </div>

            <div className="flex flex-row gap-3 items-center ">
              <a
                className="text-[12px] lg:text-base text-teal-600 transition hover:text-teal-600/75"
                href="/privacy"
              >
                Privacy Policy
              </a>

              <span className="mr-3">|</span>
            </div>
            <div className="flex sm:flex-row gap-3 ">
              <a
                className="text-[12px] lg:text-base text-teal-600 transition hover:text-teal-600/75"
                href="/refund"
              >
                Refund
              </a>
            </div>
          </div>

          <p className="mt-4 text-[10px] sm:text-sm text-gray-500 sm:order-first sm:mt-0">
            © 2022 thegeniustutor.com. All rights reserved Abhay Education Pvt.
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

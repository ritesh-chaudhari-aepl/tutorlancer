import logo from "../assets/logo-wthout-bg.png";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-[#525FE1] text-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap lg:flex-row lg:gap-28">
          <div className="flex flex-col">
            <div className="flex justify-center text-white sm:justify-start">
              {/* <span className="text-[25px] tracking-[10px] border border-white p-2">
                LOGO
              </span> */}
              <img src={logo} className="w-24" />
            </div>
            <div className="flex flex-col mt-10 gap-2 leading-[30px] ">
              <span className="font-inter">
                <strong>Email</strong>: support@thegradesachievers.com
              </span>
              <span className="font-inter">
                <strong>Phone</strong>:{" "}
                <a href="tel:919155424588">+91 91554 24588</a>
              </span>
              <span className="font-inter capitalize text-base">
                <strong>Address</strong>: c/o -s.k.mishra, c.m.r.i <br />
                gate, bartand, dhanbad, jharkhand,
                <br /> india (826001){" "}
              </span>
            </div>
          </div>

          <div className="grid mt-10 lg:mt-0 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:col-span-2 relative">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Services</p>

              <nav aria-label="Footer About Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#services"
                    >
                      Online Tutoring
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#services"
                    >
                      Homework Help
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#services"
                    >
                      Live Session
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#services"
                    >
                      Lab Work
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#services"
                    >
                      Project Help
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="#services"
                    >
                      Writing Help
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              {/* mobile image */}
              {/* <img
                src={phone}
                alt="phone"
                className="absolute lg:left-72 hidden md:block -top-72 h-96 lg:h-[30rem]"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:flex place-content-center md:block w-full border-t border-white pt-6 pb-12">
        <div className=" mx-auto max-w-screen-xl px-4 text-center sm:flex sm:justify-between sm:text-left">
          <div className="flex flex-row">
            <div className="flex flex-row gap-3 ">
              <a
                className="inline-block text-white transition hover:text-white/75"
                href="/termsandcondition"
              >
                Terms & Conditions
              </a>

              <span className="mr-3">|</span>
            </div>

            <div className="flex flex-row gap-3 ">
              <a
                className="inline-block text-teal-600 transition hover:text-teal-600/75"
                href="/privacy"
              >
                Privacy Policy
              </a>

              <span className="mr-3">|</span>
            </div>
            <div className="flex sm:flex-row gap-3 ">
              <a
                className="inline-block text-teal-600 transition hover:text-teal-600/75"
                href="/refund"
              >
                Refund
              </a>
            </div>
          </div>

          <p className="mt-4 text-[10px] sm:text-sm text-gray-500 sm:order-first sm:mt-0">
            © 2022 thegradesachievers.com. All rights reserved Abhay Education
            Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

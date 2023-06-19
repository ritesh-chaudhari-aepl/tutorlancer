import "./style.css";
const Contact = () => {
  return (
    <section id="contact" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <h3 className="text-center font-bold font-QuickSand text-3xl  sm:text-[28px]">
          Contact Us <br />
        </h3>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className=" p-8 lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
              <div className="flex flex-row gap-4">
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div> */}

                <div>
                  <label className="sr-only" htmlFor="phone">
                    Subject
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Subject"
                    type="text"
                    id="subject"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block uppercase w-full rounded-full bg-pink-900 px-5 py-3 font-light text-white sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-2 lg:py-12">
            <div className="responsive-iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

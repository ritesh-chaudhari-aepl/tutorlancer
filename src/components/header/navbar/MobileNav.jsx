import { nav } from "../../../data/nav";
import { BsWhatsapp } from "react-icons/bs";

function MobileNav() {
  function handleScroll(section) {
    let value = document.getElementById(section);
    console.log(value);
    if (value) {
      value.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }
  return (
    <div className="w-full h-full bg-violet-light">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="no-underline" key={name}>
              <a
                className="link text-black text-xl text no-underline"
                onClick={() => handleScroll(href)}
              >
                {name}
              </a>
            </li>
          );
        })}
        <div className="item-center justify-center gap-8 flex flex-col lg:hidden">
          <a
            href="#"
            className="flex gap-2 items-center rounded-full bg-green-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            <BsWhatsapp className="text-xl font-bold" />
            Chat on Whatsapp
          </a>
          {/* <a
            onClick={()=>handleScroll('contact')}
            className="inline-block rounded-full bg-gradient-to-r from-pink-darkPink to-blue-light px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            Contact Us
          </a> */}
        </div>
      </ul>
    </div>
  );
}

export default MobileNav;

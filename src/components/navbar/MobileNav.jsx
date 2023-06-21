import { nav } from "../../data/nav";
import { BsWhatsapp } from "react-icons/bs";

function MobileNav() {
  return (
    <div className="bg-white w-full h-full">
      <ul className="h-full flex flex-col justify-center no-underline items-center gap-y-8">
        {nav.map((item) => {
          // destructure item
          const { href, name } = item;
          return (
            <li className="no-underline" key={item.name}>
              <a className="link text-black text-xl" href={href}>
                {name}
              </a>
            </li>
          );
        })}
        <div className="item-center justify-center gap-8 flex flex-col">
          {/* <a
            href="#"
            className="inline-block rounded-full bg-transparent px-8 py-4 text-sm font-medium text-black transition hover:bg-indigo-700 capitalize"
          >
            Sign Up
          </a> */}
          <a
            href="#"
            className="flex gap-2 items-center rounded-full bg-green-dark px-8 py-4 text-sm font-medium text-white transition hover:bg-indigo-700 capitalize"
          >
            <BsWhatsapp className="text-xl font-bold" />
            Chat on Whatsapp
          </a>
        </div>
      </ul>
    </div>
  );
}

export default MobileNav;

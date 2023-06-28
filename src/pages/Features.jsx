import { BiHeadphone, BiFileFind, BiRevision } from "react-icons/bi";
import { BsAlarm } from "react-icons/bs";
import { CiDiscount1 } from "react-icons/ci";
import { RiRefund2Line } from "react-icons/ri";
import SmallCard from "../components/cards/SmallCard";

const Features = () => {
  return (
    <section id="features" className="bg-primaryWhite">
      <div className="mx-auto max-w-screen-xl">
        <div className=" py-10 md:py-24">
          <div className="mb-16">
            <h3 className="text-center text-6xl font-bold font-Inter sm:text-[49px]">
              Features
            </h3>
            <p className="text-center text-sm mt-3 font-semibold font-Inter sm:text-base sm:leading-[27px]">
              Genius Tutor is focused on ensuring to meet the needs of the
              students around the globe for their assignments.
            </p>
          </div>

          <div className="">
            <div className="flex items-center justify-center gap-4 flex-wrap sm:justify-center sm:gap-6 sm:items-center">
              <SmallCard
                icon={<BiHeadphone size={20} />}
                bgColor="bg-pink-light"
                title="24/7 support"
                iconColor="#FF1850"
              />
              <SmallCard
                icon={<BsAlarm size={20} />}
                bgColor="bg-violet-light"
                title="Timely Submission"
                iconColor="#952AFF"
              />
              <SmallCard
                icon={<CiDiscount1 size={20} />}
                bgColor="bg-green-light"
                title="Before Time Delivery"
                iconColor="#1FAF38"
              />
              <SmallCard
                icon={<BiFileFind size={20} />}
                bgColor="bg-pink-light"
                title="Plagraism free"
                iconColor="#FF1850"
              />
              <SmallCard
                icon={<RiRefund2Line size={20} />}
                title="Money Back Guarantee"
                iconColor="#952AFF"
                bgColor="bg-violet-light"
              />
              <SmallCard
                icon={<BiRevision size={20} />}
                bgColor="bg-green-light"
                title="Solid Boost in grades"
                iconColor="#1FAF38"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

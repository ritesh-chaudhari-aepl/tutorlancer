/* eslint-disable react/prop-types */

const MainCard = ({ icon, iconBgColor, title, description }) => {
  return (
    <div className="rounded overflow-hidden bg-white p-6 gap-5 flex flex-col mb-10">
      <div className="">
        {/* icon */}
        <div
          // className={`w-10 h-10 rounded items-center justify-center flex ${iconBgColor}`}
        >
          <img src={icon} alt="Icon" className="w-20 h-auto" />
        </div>
      </div>
      <span className="font-semibold md:text-base font-Inter sm:text-[24px]">{title}</span>
      <p className="text-sm  md:text-[14px] font-medium font-Inter">{description}</p>
    </div>
  );
};
export default MainCard;

import imgpart1 from "../../assets/imgpart1.png";
import imgpart2 from "../../assets/imgpart2.png";

const Advertising = () => {
  return (
    <div className="my-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#E4EEFE]">
            <img src={imgpart1} alt="iPhone 13 Pro Max" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 bg-[#E4EEFE] h-full p-5 pt-10 md:pt-[100px] relative">
            <p className="text-center text-base md:text-lg font-medium">iPhone 13 Pro Max Sale!</p>
            <p className="text-[#444444] text-center text-xs md:text-sm font-medium">
              Get Yours Now and Enjoy. Limited Time Offer: Save 40% on the Ultimate Tech Upgrade!
            </p>
            <div className="text-center mt-4">
              <button className="px-4 py-3 bg-[#0C68F4] text-white text-base font-normal rounded-md mb-[60px] md:mb-0">
                Shop Now
              </button>
            </div>
            <div className="text-end mt-4 absolute bottom-0 right-0">
              <button className="px-4 py-3 bg-[#0C68F4] text-white text-base font-normal rounded-tl-md">
                www.techheim.com
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-[#EDEDED] p-8 pr-0">
            <img
              src={imgpart2}
              className="w-full h-auto object-cover md:h-[420px]"
              alt="AirPods Pro"
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#EDEDED] h-full p-5 pt-10 md:pt-[100px] relative">
            <p className="text-center text-base md:text-lg font-medium">Limited Time Offer</p>
            <p className="text-[#444444] text-center text-xs md:text-sm font-medium">
              Elevate Your Audio Experience with AirPods Pro.
            </p>
            <div className="text-center mt-4">
              <button className="px-4 py-3 bg-[#F45E0C] text-white text-base font-normal rounded-md mb-[60px] md:mb-0">
                Shop Now
              </button>
            </div>
            <div className="text-end mt-4 absolute bottom-0 right-0 w-full">
              <button className="px-4 py-3 w-full bg-[#F45E0C] text-white text-base font-normal rounded-tl-md">
                www.techheim.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;

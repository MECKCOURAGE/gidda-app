import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import Chima from "./assets/images/Chima.jpg";
import VideoFrame from "./components/common/iframe";

const PeopleTalk = () => {
  return (
    <div className="">
      <div>
        <SectionTitle title="People Talk" className="text-[35px] " />
        <p className=" text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
          What our customers and partners think about us.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 py-8">
        <Button className="border border-offWhite bg-green font-redhat h-[30px] text-[10px] font-bold text-offWhite px-[20px] w-fit max-w-[300px]">
          BUY
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          SHORT LETS
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          INVEST
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          SELL
        </Button>
        <Button className="border border-green uppercase bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px] ">
          SERVICES
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          ENTERPRISE
        </Button>
      </div>

      <div className="flex justify-center ">
        <div className="flex rounded-[40px] border-2 border-green">
          <div className="border-r-2 border-green rounded-l-[40px] bg-secondary-gradient-alt p-[20px] flex flex-col  space-y-4">
            <img src={Chima} className="w-[206px] h-[207px] rounded-[16px]" />
            <h1 className="font-redhat font-semibold text-[24px] leading-[24px] text-black">
              Chima Okereke
            </h1>
            <h3 className="font-redhat font-semibold text-[12px] leading-[13px] text-green">
              DIRECTOR OF SALES AT BILAAD REALTY
            </h3>
            <p className="font-redhat font-normal text-[16px] leading-[26px] w-[510px]">
              "I had an outstanding experience with the short-let booking
              service! From start to finish, the team made the entire process
              smooth and easy. I needed help finding the perfect place for my
              stay, and they went above and beyond to locate a property that fit
              all my requirements. Once I confirmed and made the payment, they
              handled the reservation with great efficiency.
            </p>
          </div>

          <div className=" w-[550px] h-[550px] rounded-r-[40px]">
            <VideoFrame
              placeholder={Chima}
              iframeSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
              imgClassName="rounded-r-[40px]"
              iframeClassName="rounded-r-[40px]"
            />
          </div>
        </div>

        <Block />
      </div>
    </div>
  );
};

const Block = () => {
  return (
    <div className="flex flex-col items-center ml-[60px] my-auto">
      <div className="w-[57px] h-[57px] rounded-full bg-green text-neutralWhite flex items-center justify-center">
        1
      </div>

      <div className="w-[2px] h-[85px] bg-green bg-[linear-gradient(to_bottom,_#335F32_65%,_#D9D9D9_35%)]"></div>
      <div className="w-[57px] h-[57px] rounded-full bg-midGray flex items-center justify-center"></div>

      <div className="w-[2px] h-[85px] bg-midGray"></div>

      <div className="w-[57px] h-[57px] rounded-full bg-midGray flex items-center justify-center">
        <span className="text-white"></span>
      </div>

      <div className="w-[2px] h-[85px] bg-midGray"></div>

      <div className="w-[57px] h-[57px] rounded-full bg-midGray flex items-center justify-center">
        <span className="text-white"></span>
      </div>
    </div>
  );
};

export default PeopleTalk;

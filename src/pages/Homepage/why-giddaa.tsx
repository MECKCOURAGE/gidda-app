import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import Cooking from "./assets/images/Cooking.png";

const WhyGiddaa = () => {
  return (
    <div className="mb-[250px]">
      <section className="bg-primary-gradient pt-[2px]  rounded-t-[260px] ">
        <div className="bg-offWhite pt-[45px] w-full h-full rounded-t-[260px] ">
          <SectionTitle title="Why Giddaa?" className="text-[35px] mt-[20px]" />
          <p className=" text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
            Reasons why you should embark on your real estate journey with us,
            and our products..
          </p>
        </div>
      </section>

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

      <div className="flex justify-center space-x-[20px]">
        <Block />
        <Block />
        <Block />
      </div>
    </div>
  );
};

const Block = () => {
  return (
    <div className="border-2 w-[345px] h-[205px] rounded-[16px] border-green p-[30px] flex flex-col justify-between">
      <img src={Cooking} className="w-[40px] h-[40px] object-cover" />
      <h1 className="font-redhat font-semibold text-[18px] leading-[18px] text-black">
        Stay Fully Booked
      </h1>
      <p className="font-redhat font-normal text-[16px] leading-[26px]">
        Order from our vendors and restaurant up till 12am
      </p>
    </div>
  );
};

export default WhyGiddaa;

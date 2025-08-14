import Container from "../../components/container";
import { Button } from "../../components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Typography from "../../components/common/typography";
import WavingHand from "./assets/images/WavingHand.png";
import interiorA from "./assets/images/interiorA.png";
import interiorB from "./assets/images/interiorB.png";
import interiorC from "./assets/images/interiorC.png";

const Hero = () => {
  return (
    <Container as={"header"} className="mb-[100px]">
      <div className="flex flex-col items-center mr-[60px] mt-[30px] gap-4 pt-6 relative">
        {/* Welcome Card */}
        <aside
          className="absolute top-0 right-0  p-[2px] rounded-2xl 
        bg-[linear-gradient(to_left,_#335F32_10%,_#3F6E31_30%,_#EAA315_100%)]
        w-[290px] h-[100px]"
        >
          <div className="flex bg-neutral rounded-2xl p-[9px] w-full h-full">
            <img src={WavingHand} alt="hello" className="w-[44px] h-[44px]" />

            <div className="ml-[7px] mt-[5px]">
              <Typography className="font-redhat font-extrabold text-[16px] text-green">
                You're Now on Giddaa <span className="font-normal">Buy</span>
              </Typography>
              <Typography className="font-redhat text-[13px] text-black">
                Find and buy your dream home on various purchase plans.
              </Typography>
            </div>
          </div>
        </aside>

        {/* Centered content */}
        <div className="flex flex-col justify-center items-center text-center ml-[50px]">
          {/* Pill */}
          <h1
            className="flex space-x-2 font-bold font-redhat text-green 
             items-center px-[20px] my-[13px] py-2 w-[1000] h-[48px] rounded-full
             border border-[#F0F0F0] 
             bg-[linear-gradient(to_right,#FFFFFB,#F6FDF4,#FFEDCB)]"
          >
            <Typography className="flex items-center text-[10px] border-r pr-2 uppercase font-redhat h-7">
              We Serve Nigerians Across the Globe
            </Typography>

            <Typography className="text-[10px]">
              👀 10,000 PEOPLE HAVE SEEN THIS
            </Typography>
          </h1>

          {/*Heading*/}
          <h1 className="font-millik text-[48px] font-normal leading-[68px] tracking-[-1.2px] w-[700px] ">
            Find a Home to Buy In Nigeria On Various{" "}
            <span className="text-green"> Purchase Plans. </span>
          </h1>

          {/* Paragraph */}
          <p className=" font-redhat text-[16px] leading-[38px]">
            We have taken real estate beyond{" "}
            <span className="border-b-2  border-green">mere listings</span>.
            Conduct secure real estate transactions on our platform <br />{" "}
            trusted by more than{" "}
            <span className="text-black font-bold">
              4,000 customers, and 30+ companies
            </span>
          </p>

          {/* Button */}
          <Button
            asChild
            size={"xLarge"}
            className="border mt-4 h-[60px] bg-green font-redhat text-[12px] font-bold text-offWhite"
          >
            <div className={"px-8 "}>
              Explore Our Products{" "}
              <span className="ml-2 inline-flex border size-5 items-center bg-offWhite justify-center rounded-full ">
                <BsArrowRight
                  strokeWidth={1.5}
                  color="green"
                  className="size-3 rotate-90"
                />
              </span>
            </div>
          </Button>
        </div>
      </div>

      <div>
        <BlockOfImages />
      </div>
    </Container>
  );
};

export default Hero;

const BlockOfImages = () => {
  return (
    <div className="flex mr-[60px] ml-[60px] my-9 relative">
      <div className="flex space-x-[8px] ">
        <img src={interiorA} className="h-[285px] w-[455px]" />
        <img src={interiorB} className="h-[285px] w-[455px]" />
        <img src={interiorC} className="h-[285px] w-[257px]" />
      </div>

      <div
        className="w-[40px] h-[40px] rounded-full rotate-90 p-[2px] flex items-center justify-center absolute right-0 bottom-[20px]
    bg-[linear-gradient(to_bottom,_#335F32_10%,_#3F6E31_40%,_#EAA315_100%)] border-[1px] border-neutral
            "
      >
        <div className="flex bg-offWhite p-[9px] w-full h-full items-center justify-center rounded-full  ">
          <BsArrowLeft
            strokeWidth={0.5}
            color="green"
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

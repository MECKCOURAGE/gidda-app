import { useState, useEffect } from "react";
import Container from "../../components/container";
import { Button } from "../../components/ui/button";
import { BsArrowRight, BsX } from "react-icons/bs";
import Typography from "../../components/common/typography";
import WavingHand from "./assets/images/WavingHand.png";
import interiorA from "./assets/images/interiorA.png";
import interiorB from "./assets/images/interiorB.png";
import interiorC from "./assets/images/interiorC.png";

const Hero = () => {
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAside(true), 1200); // 1.2s delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <Container as={"header"} className="mb-[100px] relative">
      <div className="flex flex-col items-center xl:mr-[60px] mt-[30px] gap-4 pt-6 relative">
        {showAside && (
          <aside
            className={`
            absolute top-0 right-0 hidden xl:flex p-[2px] rounded-2xl
            bg-[linear-gradient(to_left,#335F32_10%,#3F6E31_30%,#EAA315_100%)]
            w-[290px] h-[100px]
            transform transition-transform duration-500 ease-out
            ${showAside ? "translate-x-0" : "translate-x-full"}
          `}
          >
            <div className="flex bg-neutral rounded-2xl p-[9px] w-full h-full relative">
              <img src={WavingHand} alt="hello" className="w-[44px] h-[44px]" />

              <div className="ml-[7px] mt-[5px]">
                <Typography className="font-redhat font-extrabold text-[16px] text-green">
                  You're Now on Giddaa <span className="font-normal">Buy</span>
                </Typography>
                <Typography className="font-redhat text-[13px] text-black">
                  Find and buy your dream home on various purchase plans.
                </Typography>
              </div>

              <button
                onClick={() => setShowAside(false)}
                className="absolute top-2 right-2 text-black hover:text-red-500"
              >
                <BsX size={18} />
              </button>
            </div>
          </aside>
        )}

        <div className="flex flex-col justify-center items-center text-center xl:ml-[50px]">
          <h1 className="flex space-x-2 font-bold font-redhat text-green items-center px-[20px] my-[13px] py-2 md:w-[1000] h-[48px] rounded-full border border-[#8f8787] bg-[linear-gradient(to_right,#FFFFFB,#F6FDF4,#FFEDCB)]">
            <Typography className="md:flex items-center hidden text-[10px] border-r pr-2 uppercase font-redhat h-7">
              We Serve Nigerians Across the Globe
            </Typography>
            <Typography className="text-[10px]">
              👀 10,000 PEOPLE HAVE SEEN THIS
            </Typography>
          </h1>

          <h1 className="font-millik text-[42px] md:text-[48px] font-normal leading-[68px] tracking-[-1.2px] md:w-[700px] mx-[40px]">
            Find a Home to Buy In Nigeria On Various{" "}
            <span className="text-green"> Purchase Plans. </span>
          </h1>

          <p className="font-redhat md:text-[16px] text-[13px] md:w-[750px] leading-[38px] mx-[40px]">
            We have taken real estate beyond{" "}
            <span className="border-b-2 border-green">mere listings</span>.
            Conduct secure real estate transactions on our platform trusted by
            more than{" "}
            <span className="text-black font-bold">
              4,000 customers, and 30+ companies
            </span>
          </p>

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

      <BlockOfImages />
    </Container>
  );
};

export default Hero;

const BlockOfImages = () => {
  return (
    <div className="flex mx-[60px] my-9 relative">
      <div className="grid grid-cols-[2fr_2fr_1.17fr] gap-2">
        <img src={interiorA} className="w-full h-auto object-cover" />
        <img src={interiorB} className="w-full h-auto object-cover" />
        <img src={interiorC} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

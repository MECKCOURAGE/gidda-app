import Container from "../../components/container";
import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import Typography from "../../components/common/typography";
import { BsArrowRight } from "react-icons/bs";

const OurPartners = () => {
  return (
    <Container className=" gap-[53px] py-20">
      <div className="flex flex-col items-center text-center gap-2">
        <SectionTitle title="Our Partners" className="text-[35px] mt-[20px]" />
        <p className=" text-center mx-auto max-w-[450px]  text-black font-normal font-redhat pt-4 px-6">
          Organizations we’ve partnered with to make real estate in Nigeria a
          pleasant experience for all.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 py-8">
        <Button className="border border-offWhite bg-green font-redhat h-[30px] text-[10px] font-bold text-offWhite px-[20px] w-fit max-w-[300px]">
          GOVERNMENT
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          PROPERTY DEVELOPERS
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          PROPERTY MANAGERS
        </Button>
        <Button className="border border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px]">
          FINANCIAL INSTITUTIONS
        </Button>
        <Button className="border border-green uppercase bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px] ">
          Non-governmental organizations
        </Button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[24px]">
        {partners?.map((_, index) => (
          <div
            key={index}
            className="w-[107px] h-[107px] rounded-full bg-midGray  flex items-center justify-center"
          ></div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center py-[20px]">
        <Typography className="font-redhat font-semibold text-[40px] text-sWhite ">
          Over 50 Partners
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center ">
        <Button
          asChild
          size={"xLarge"}
          className="border mt-4 h-[60px] bg-green font-redhat text-[12px] font-bold text-offWhite"
        >
          <div className={"px-8 "}>
            View All Partners{" "}
            <span className="ml-2 inline-flex border size-5 items-center bg-offWhite justify-center rounded-full ">
              <BsArrowRight
                strokeWidth={1.5}
                color="green"
                className="size-3 -rotate-45"
              />
            </span>
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default OurPartners;

const partners = [
  "https://link",
  "https://link",
  "https://link",
  "https:/link",
  "https://link",
  "https://link",
  "https://link",
  "https://link",
  "https://link",
];

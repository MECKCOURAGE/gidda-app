import Container from "../../components/container";
import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import clsx from "clsx";
import BuyIcon from "./assets/images/BuyIcon.png";
import ShortletsIcon from "./assets/images/ShortletsIcon.png";
import InvestIcon from "./assets/images/InvestIcon.png";
import SellIcon from "./assets/images/SellIcon.png";
import ServicesIcon from "./assets/images/ServicesIcon.png";
import EntrepriseIcon from "./assets/images/EnterpriseIcon.png";
const GetStarted = () => {
  return (
    <div>
      <section className="bg-primary-gradient pt-[2px]  rounded-t-[251px] ">
        <div className="bg-secondary-gradient-alt pt-[45px] w-full h-full rounded-t-[251px] pb-[70px] ">
          <SectionTitle title="Get Started" className="text-[35px] mt-[20px]" />
          <p className=" text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
            Made it this far? What are you waiting for? Get started with one of
            our products today!.
          </p>

          <Container className="grid grid-cols-3 mt-[40px]  ml-[167px] mr-[143px] ">
            <Block
              title="Buy"
              paragraph="Find homes on various purchase plans; apply to buy them with your account executive."
              imageSrc={BuyIcon}
            />
            <Block
              title="Shorts lets"
              paragraph="Explore high quality short lets, with no booking fees and excellent support."
              imageSrc={ShortletsIcon}
            />
            <Block
              title="Invest"
              paragraph="Explore high quality short lets, with no booking fees and reserve them "
              imageSrc={InvestIcon}
            />
            <Block
              title="Sell"
              paragraph="Explore high quality short lets, with no booking fees and reserve them "
              imageSrc={SellIcon}
            />
            <Block
              title="Services"
              paragraph="Explore high quality short lets, with no booking fees and reserve them "
              imageSrc={ServicesIcon}
            />
            <Block
              title="Enterprise"
              paragraph="Explore high quality short lets, with no booking fees and reserve them  "
              imageSrc={EntrepriseIcon}
            />
          </Container>
        </div>
      </section>
    </div>
  );
};

const Block = ({
  title,
  paragraph,
  imageSrc,
  className = "",
}: {
  title: string;
  paragraph: string;
  imageSrc: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        ` border-2 w-[325px] h-fit rounded-[16px] border-green p-[20px] flex flex-col space-y-4 mb-[30px] `,
        className
      )}
    >
      <img src={imageSrc} className="w-[30px] h-[24px] " />
      <h1 className="font-redhat font-semibold text-[24px] leading-[24px] text-black">
        {title}
      </h1>
      <p className="font-redhat font-normal text-[16px] leading-[26px]">
        {paragraph}
      </p>

      <div className=" flex">
        <Button
          asChild
          size={"xLarge"}
          className="border w-full h-[35px] bg-green font-redhat text-[12px] font-bold text-offWhite"
        >
          <div className={" "}>
            Get Started Now{" "}
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
    </div>
  );
};

export default GetStarted;

import Container from "../../components/container";
import SectionTitle from "./components/section-title";
import Buy from "./assets/images/Buy.png";
import Shortlets from "./assets/images/Shortlets.png";
import Invest from "./assets/images/Invest.png";
import Sell from "./assets/images/Sell.png";
import Services from "./assets/images/Services.png";
import Entreprise from "./assets/images/Entreprise.png";
import clsx from "clsx";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "../../components/ui/button";

const Products = () => {
  return (
    <div>
      <section className="bg-primary-gradient pt-[2px]  rounded-t-[251px]">
        <div className="bg-secondary-gradient-alt pt-[45px] w-full h-full rounded-t-[251px] ">
          <SectionTitle title="Products" className="text-[35px] mt-[20px]" />
          <p className=" text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
            Get started with one of our carefully crafted products & services.
          </p>

          <Container className="grid grid-cols-2 mt-[40px] ml-[82px] mr-[27px]">
            <Block
              title="Buy"
              paragraph="Explore and purchase your home from top developers & vetted property sellers(With land titles) on various purchase plans and long term loan options."
              imageSrc={Buy}
              primaryButton="Shop Now"
              className="bg-offWhite"
            />
            <Block
              title="Shorts lets"
              paragraph="Find yoru next gateaway spot, staycation, or business trip spot. Aviod extra changes, find detailed information, and reserve a shortlet."
              imageSrc={Shortlets}
              primaryButton="Buy Now"
              className="bg-tWhite"
            />
            <Block
              title="Invest"
              paragraph="Become a real estate investor without breaking the bank. Invest in real estate assets and grow your portfolio with friends and family (in a private investment group) or with the public (fractionally, like a stock exchange)."
              imageSrc={Invest}
              primaryButton="Find an Investment"
              secondaryButton="Learn More"
              className="bg-onWhite"
            />
            <Block
              title="Sell"
              paragraph="Sell your property with us, a company and partner you can trust. Our simple process makes it easy for sellers to list their properties and sell their properties on various purchase plans to the 1000’s of potential buyers who visit Giddaa monthly."
              imageSrc={Sell}
              primaryButton="Sell Your Property"
              secondaryButton="Talk to Our Team"
              className="bg-aWhite"
            />
            <Block
              title="Services"
              paragraph="Explore and purchase homes from top developers & vetted property sellers (With land titles) on various purchase plans."
              imageSrc={Services}
              primaryButton="Find a Home to Buy"
              className="bg-bWhite"
            />
            <Block
              title="Enterprise"
              paragraph="We’ve built solutions & tools for property developers, and property managers specifically operating in the Nigerian Market - Our solutions fit like a glove. "
              imageSrc={Entreprise}
              primaryButton="Buy Now"
              className="bg-cWhite"
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
  primaryButton,
  secondaryButton,
  className = "",
}: {
  title: string;
  paragraph: string;
  imageSrc: string;
  primaryButton: string;
  secondaryButton?: string;
  className?: string;
}) => {
  const hasSecondButton = Boolean(secondaryButton);

  return (
    <div
      className={clsx(
        `flex ${
          hasSecondButton
            ? "grid grid-rows-2 border-b-[3px] border-t-[3px] border-r-[5px] "
            : "grid grid-cols-2 border-b-[3px] border-t-[3px] border-r-[5px] h-[337px] "
        } w-[585px]  items-center rounded-[40px] border-l border-green mb-[40px] `,
        className
      )}
    >
      <div className="p-8 ">
        <h2 className="text-2xl font-extrabold leading-[24px] font-redhat text-green text-[24px]">
          {title}
        </h2>
        <p className="mt-2 text-[15px]  text-black font-redhat leading-[24px]">
          {paragraph}
        </p>

        <div className="mt-4 flex gap-3">
          <Button
            asChild
            size={"xLarge"}
            className="border mt-4 h-[60px] bg-green font-redhat text-[12px] font-bold text-offWhite"
          >
            <div className={"px-8 "}>
              {primaryButton}{" "}
              <span className="ml-2 inline-flex border size-5 items-center bg-offWhite justify-center rounded-full ">
                <BsArrowRight
                  strokeWidth={1.5}
                  color="green"
                  className="size-3 -rotate-45"
                />
              </span>
            </div>
          </Button>

          {hasSecondButton && (
            <Button
              asChild
              size={"xLarge"}
              className="border-2 mt-4 h-[60px] bg-offWhite font-redhat text-[12px] font-bold text-green"
            >
              <div className={"px-10 border-green "}>{secondaryButton}</div>
            </Button>
          )}
        </div>
      </div>

      <div
        className={`flex items-center justify-center w-full  h-full ${
          hasSecondButton ? "order-last  row-span-1" : ""
        }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default Products;

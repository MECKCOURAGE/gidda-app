import { useState } from "react";
import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import Cooking from "./assets/images/Cooking.png";
import clsx from "clsx";

type TabKey = "BUY" | "SHORT LETS" | "INVEST" | "SELL" | "SERVICES" | "ENTERPRISE";

const tabContents: Record<TabKey, { title: string; text: string }> = {
  BUY: {
    title: "Stay Fully Booked",
    text: "Order from our vendors and restaurant up till 12am",
  },
  "SHORT LETS": {
    title: "Flexible Rentals",
    text: "Book short-term stays with ease and convenience",
  },
  INVEST: {
    title: "Smart Investments",
    text: "Grow your wealth by investing in verified properties",
  },
  SELL: {
    title: "Sell Seamlessly",
    text: "List and sell your properties quickly and safely",
  },
  SERVICES: {
    title: "All-in-One Services",
    text: "Get access to property management and inspection",
  },
  ENTERPRISE: {
    title: "Enterprise Solutions",
    text: "Tailored solutions for corporate and enterprise clients",
  },
};

const tabs: TabKey[] = ["BUY", "SHORT LETS", "INVEST", "SELL", "SERVICES", "ENTERPRISE"];

const WhyGiddaa = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("BUY");

  return (
    <div className="mb-[250px]">
      <section className="bg-primary-gradient pt-[2px] rounded-t-[260px]">
        <div className="bg-offWhite pt-[45px] w-full h-full rounded-t-[260px]">
          <SectionTitle title="Why Giddaa?" className="text-[35px] mt-[20px]" />
          <p className="text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
            Reasons why you should embark on your real estate journey with us, and our products.
          </p>
        </div>
      </section>

      <div className="flex flex-wrap justify-center items-center gap-4 py-8">
        {tabs.map((tab) => (
          <Button
            key={tab}
            className={clsx(
              "border h-[30px] text-[10px] font-bold px-[20px] w-fit max-w-[300px]",
              tab === activeTab
                ? "border-offWhite bg-green text-offWhite font-redhat"
                : "border-green bg-text-offWhite text-green font-redhat"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="flex justify-center space-x-[20px]">
        <ContentBlock content={tabContents[activeTab]} />
        <ContentBlock content={tabContents[activeTab]} className="hidden sm:flex" />
        <ContentBlock content={tabContents[activeTab]} className="hidden xl:flex" />
      </div>
    </div>
  );
};

type ContentBlockProps = {
  content: { title: string; text: string };
  className?: string;
};

const ContentBlock = ({ content, className = "" }: ContentBlockProps) => (
  <div
    className={clsx(
      "border-2 w-[280px] lg:w-[300px] h-[210px] rounded-[16px] border-green p-[30px] flex flex-col justify-between",
      className
    )}
  >
    <img src={Cooking} className="w-[40px] h-[40px] object-cover" />
    <h1 className="font-redhat font-semibold text-[18px] leading-[18px] text-black">
      {content.title}
    </h1>
    <p className="font-redhat font-normal text-[16px] leading-[26px]">{content.text}</p>
  </div>
);

export default WhyGiddaa;

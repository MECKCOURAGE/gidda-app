import { useState, useEffect } from "react";
import Container from "../../components/container";
import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import Typography from "../../components/common/typography";
import { BsArrowRight } from "react-icons/bs";

const tabs = [
  "GOVERNMENT",
  "PROPERTY DEVELOPERS",
  "PROPERTY MANAGERS",
  "FINANCIAL INSTITUTIONS",
  "NON GOVERNMENTAL ORGANIZATIONS",
];

const partners: Record<string, string[]> = {
  GOVERNMENT: [
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
  ],
  "PROPERTY DEVELOPERS": [
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
  ],
  "PROPERTY MANAGERS": [
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
  ],
  "FINANCIAL INSTITUTIONS": [
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
  ],
  "NON GOVERNMENTAL ORGANIZATIONS": [
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
    "https://via.placeholder.com/",
  ],
};

const OurPartners = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressValue = 0;
    let tabIndex = 0;
    const interval = setInterval(() => {
      progressValue += 0.8;
      if (progressValue > 100) progressValue = 100;
      setProgress(progressValue);

      if (progressValue >= 100) {
        tabIndex = (tabIndex + 1) % tabs.length;
        setActiveTab(tabIndex);
        progressValue = 0;
        setProgress(0);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const activeTabName = tabs[activeTab];
  const activePartners = partners[activeTabName];

  return (
    <Container className="gap-[53px] py-20">
      <div className="flex flex-col items-center text-center gap-2">
        <SectionTitle title="Our Partners" className="text-[35px] mt-[20px]" />
        <p className="text-center mx-auto max-w-[450px] text-black font-normal font-redhat pt-4 px-6">
          Organizations we’ve partnered with to make real estate in Nigeria a
          pleasant experience for all.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 py-8">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)}
            className="relative border rounded-[15px] border-green bg-text-offWhite font-redhat h-[30px] text-[10px] font-bold text-green px-[20px] w-fit max-w-[300px] overflow-hidden"
          >
            <span className="relative z-10">{tab}</span>
            {activeTab === index && (
              <div
                className="absolute top-0 left-0 h-full bg-green opacity-30 z-0 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            )}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[24px] transition-all duration-500">
        {activePartners.map((url, idx) => (
          <div
            key={idx}
            className="w-[107px] h-[107px] rounded-full bg-midGray flex items-center justify-center overflow-hidden"
          >
            <img src={url} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center py-[20px]">
        <Typography className="font-redhat font-semibold sm:text-[40px] text-[25px] text-sWhite">
          Over 50 Partners
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center">
        <Button
          asChild
          size={"xLarge"}
          className="border mt-4 h-[60px] bg-green font-redhat text-[12px] font-bold text-offWhite"
        >
          <div className="px-8">
            View All Partners{" "}
            <span className="ml-2 inline-flex border size-5 items-center bg-offWhite justify-center rounded-full">
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

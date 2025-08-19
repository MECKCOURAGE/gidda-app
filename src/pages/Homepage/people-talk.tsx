import { useState, useEffect, useRef } from "react";
import SectionTitle from "./components/section-title";
import { Button } from "../../components/ui/button";
import Chima from "./assets/images/Chima.jpg";
import VideoFrame from "./components/common/iframe";
import clsx from "clsx";

const tabs = ["BUY", "SHORT LETS", "INVEST", "SELL", "SERVICES", "ENTERPRISE"];

const tabsContents: Record<
  string,
  { image: string; title: string; position: string; text: string; iframeSrc: string }
> = {
  BUY: {
    image: Chima,
    title: "Chima Okereke",
    position: "DIRECTOR OF SALES AT BILAAD REALTY",
    text: "I had an outstanding experience with the short-let booking service!",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  "SHORT LETS": {
    image: Chima,
    title: "Chima Okereke",
    position: "DIRECTOR OF SALES AT BILAAD REALTY",
    text: "Short lets experience was amazing.",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  INVEST: {
    image: Chima,
    title: "Chima Okereke",
    position: "DIRECTOR OF SALES AT BILAAD REALTY",
    text: "Investing with Giddaa was seamless and profitable.",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  SELL: {
    image: Chima,
    title: "Chima Okereke",
    position: "DIRECTOR OF SALES AT BILAAD REALTY",
    text: "Selling property has never been easier.",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  SERVICES: {
    image: Chima,
    title: "Chima Okereke",
    position: "DIRECTOR OF SALES AT BILAAD REALTY",
    text: "Their services are top-notch and reliable.",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  ENTERPRISE: {
    image: Chima,
    title: "Chima Okereke",
    position: "DIRECTOR OF SALES AT BILAAD REALTY",
    text: "Enterprise solutions with Giddaa are excellent.",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
};

const PeopleTalk = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0); 
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null); 

  
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const nextTab = (activeTab + 1) % tabs.length;
          setActiveTab(nextTab);
          return 0;
        }
        return prev + 0.25; 
      });
    }, 40);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [activeTab, isPlaying]);

  const handlePlay = () => setIsPlaying(false); 
  const handlePause = () => setIsPlaying(true); 

  return (
    <div className="mb-[250px]">
      <div>
        <SectionTitle title="People Talk" className="text-[35px]" />
        <p className="text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
          What our customers and partners think about us.
        </p>
      </div>


      <div className="flex flex-wrap justify-center items-center gap-4 py-8">
        {tabs.map((tab, idx) => (
          <Button
            key={idx}
            onClick={() => {
              setActiveTab(idx);
              setProgress(0);
            }}
            className={clsx(
              "border font-redhat h-[30px] text-[10px] font-bold px-[20px] w-fit max-w-[300px]",
              activeTab === idx
                ? "bg-green text-offWhite border-offWhite"
                : "bg-text-offWhite text-green border-green"
            )}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="flex md:justify-center mt-8">
        <div className="flex sm:rounded-[40px] border-2 border-green">
          <div className="border-r-2 border-green sm:rounded-l-[40px] bg-secondary-gradient-alt p-[10px] md:p-[20px] flex flex-col space-y-4">
            <img
              src={tabsContents[tabs[activeTab]].image}
              className="w-[175px] md:w-[206px] md:h-[207px] rounded-[16px]"
            />
            <h1 className="font-redhat font-semibold text-[20px] md:text-[24px] text-black">
              {tabsContents[tabs[activeTab]].title}
            </h1>
            <h3 className="font-redhat font-semibold text-[12px] text-green">
              {tabsContents[tabs[activeTab]].position}
            </h3>
            <p className="font-redhat font-normal text-[12px] md:text-[16px] leading-[19px] md:leading-[26px] w-[200px] md:w-[350px] xl:w-[510px]">
              {tabsContents[tabs[activeTab]].text}
            </p>
          </div>

          <div className="sm:w-[300px] hidden sm:flex xl:w-[550px] md:w-[500px] w-[100px] h-[550px] rounded-r-[40px]">
            <VideoFrame
              placeholder={tabsContents[tabs[activeTab]].image}
              iframeSrc={tabsContents[tabs[activeTab]].iframeSrc}
              imgClassName="rounded-r-[40px]"
              iframeClassName="rounded-r-[40px]"
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </div>
        </div>

        <Timeline progress={progress} />
      </div>
    </div>
  );
};

interface TimelineProps {
  progress: number;
}

const Timeline = ({ progress }: TimelineProps) => {
  const circles = 4;
  const perCircle = 100 / circles;

  return (
    <div className="flex flex-col items-center mx-[35px] md:ml-[60px] my-auto">
      {Array.from({ length: circles }).map((_, idx) => {
        let circleFill = 0;
        if (progress >= perCircle * (idx + 1)) {
          circleFill = 100;
        } else if (progress > perCircle * idx) {
          circleFill = ((progress - perCircle * idx) / perCircle) * 100;
        }

        return (
          <div key={idx} className="flex flex-col items-center">
            <div
              className="md:w-[57px] w-[40px] h-[40px] md:h-[57px] rounded-full flex items-center justify-center text-white mb-2"
              style={{
                background: `linear-gradient(to bottom, #335F32 ${circleFill}%, #D9D9D9 ${100 - circleFill}%)`,
              }}
            />
            {idx !== circles - 1 && (
              <div
                className="w-[2px] h-[85px]"
                style={{
                  background: `linear-gradient(to bottom, #335F32 ${circleFill}%, #D9D9D9 ${100 - circleFill}%)`,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PeopleTalk;

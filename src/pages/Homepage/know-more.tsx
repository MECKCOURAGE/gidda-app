import SectionTitle from "./components/section-title";
import VideoFrame from "./components/common/iframe";
import Zoomed from "./assets/images/Zoomed.png";

const KnowMore = () => {
  return (
    <div className=" flex flex-col justify-center my-[90px]">
      <div>
        <SectionTitle
          title="Know More About Us"
          className="text-[35px] mt-[20px] "
        />
        <p className=" text-center mx-auto max-w-[450px] text-body-md text-black font-normal font-redhat pt-4 px-6">
          From our teams lips to your ears — let’s tell you about Giddaa.
        </p>
      </div>

      <div className=" mx-auto xl:w-[1240px] md:w-[800px] sm:w-[550px] w-[300px] h-[350px] sm:h-[500px] my-[30px] ">
        <VideoFrame
          placeholder={Zoomed}
          iframeSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
          imgClassName="rounded-[40px]"
          iframeClassName="rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default KnowMore;

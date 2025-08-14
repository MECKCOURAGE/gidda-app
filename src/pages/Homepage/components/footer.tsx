import { Button } from "../../../components/ui/button";
import FormInput from "../../../components/common/Input";
import { BsArrowRight } from "react-icons/bs";
import Instragram from "../assets/images/Instragram.png";
import TikTok from "../assets/images/TikTok.png";
import Facebook from "../assets/images/Facebook.png";
import X from "../assets/images/X.png";
import Whatsapp from "../assets/images/Whatsapp.png";

const Footer = () => {
  return (
    <div className="border-t-[15px] bg-green h-[630px] border-grade  px-[150px] py-[59px]">
      <div className="flex">
        <div className="space-y-3">
          <h1 className="font-redhat text-[18px] font-semibold leading-[18px] text-offWhite">
            Join Our Newsletter
          </h1>
          <p className="font-redhat text-[12px] font-normal leading-[22px] text-offWhite">
            Stay up to date with news and updates by subscribing to our
            newsletter
          </p>
        </div>

        <div className="flex ml-[230px] space-x-[20px]">
          <FormInput
            placeholder={"Enter your email address"}
            name="mail"
            wrapperClassName=" "
            className=" border pl-[17px] h-[45px] font-redhat font-normal text-deepGray text-[12px] leading-[22px] w-[333px]"
          />
          <Button className="flex items-center pl-[12px] h-[45px] font-bold w-[94px] font-redhat pr-4 rounded-full py-[6.5px] ml-[30px] text-[12px] text-green bg-offWhite border">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="flex space-x-[67px] my-[50px]">
        <Listing title="ABOUT US" items={["Our Company", "Our Team"]} />
        <Listing title="PRODUCTS" items={["Buy ", "Short Lets", "Invest"]} />
        <Listing
          title="PARTNERS"
          items={[
            "Join as a Property Developer",
            "Join as a Lender",
            "Join as an Agent",
            "Sell Your House",
          ]}
        />
        <Listing
          title="RESOURCES"
          items={["Tutorials", "Watch the Demo", "Blog"]}
        />
        <Listing
          title="CONTACT US"
          items={[
            "info@giddaa.com",
            "WhatsApp",
            "Book a Meeting",
            "+234 809 762 1791",
          ]}
        />
        <Listing
          title="SITE NAVIGATION"
          items={["Home", "Properties", "Developers", "Sell Your House"]}
        />
      </div>

      <div className="flex justify-center space-x-[15px]">
        <img src={Instragram} />
        <img src={TikTok} />
        <img src={Facebook} />
        <img src={X} />
      </div>

      <div className="flex justify-center ">
        <Button
          asChild
          size={"xLarge"}
          className="border my-[27px] h-[50px] bg-green font-redhat text-[13px] leading-[23px] font-bold text-green"
        >
          <div className={"px-4 bg-offWhite"}>
            <img
              src={Whatsapp}
              alt="USD"
              className="w-[24px] h-[24px] ml-[2px] p-[1px] "
            />
            Join Our Community{" "}
            <span className=" inline-flex border bg-green size-7 items-center  justify-center rounded-full ">
              <BsArrowRight
                strokeWidth={1.5}
                color="#FFFFFF"
                className="size-4 -rotate-45"
              />
            </span>
          </div>
        </Button>
      </div>

      <div className="border-t-[2px] mt-4 border-offWhite flex justify-between items-center pt-[13px]">
        <h1 className="uppercase font-bold text-[10px] text-offWhite leading-[11px] font-redhat">
          Property of Giddaa Inc.
        </h1>

        <div className="flex space-x-[30px] font-normal text-offWhite text-[13px] leading-[23px] font-redhat">
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
};

const Listing: React.FC<{
  title: string;
  items: string[];
}> = ({ title, items }) => {
  return (
    <div className="  ">
      <h2 className="text-[13px] font-bold text-offWhite font-redhat leading-[23px] mb-3">
        {title}
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-offWhite font-redhat font-normal text-[13px] leading-[23px]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

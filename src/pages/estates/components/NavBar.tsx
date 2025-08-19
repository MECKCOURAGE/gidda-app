import { useState } from "react";
import { NavLink } from "react-router-dom";
import Typography from "../../../components/common/typography";
import { Button } from "../../../components/ui/button";
import FormInput from "../../../components/common/Input";
import VideoIcon from "../../../assets/images/VideoIcon.png";
import Tutorial from "../../../assets/images/Tutorial.png";
import Product from "../../../assets/images/Product.png";
import Share from "../../../assets/images/Share.png";
import Activity from "../../../assets/images/Activity.png";
import Notifications from "../../../assets/images/Notifications.png";
import Icons from "../../../components/common/icons";
import { BiCaretLeft, BiCaretRight, BiCaretUp } from "react-icons/bi";

const NavBar = ({
  houses,
  estates,
  units,
  value,
  onChange,
}: {
  houses: number;
  estates: number;
  units: number;
  value: string;
  onChange: (value: string) => void;
}) => {
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  return (
    <nav className=" h-[90px] bg-neutralWhite border-b border-lightGray pl-[30px] pr-[40px] py-4 ">
      <div className="flex">
        <ul className="flex space-x-2 mt-[3px]">
          <li>
            <Button className="p-[1px] bg-lightGray rounded-sm">
              <BiCaretLeft color="#000000" size={17} />
            </Button>
          </li>
          <li>
            <Button className="p-[1px] bg-lightGray rounded-sm">
              <BiCaretRight color="#979797" size={17} />
            </Button>
          </li>
        </ul>

        <Typography className="font-millik font-light text-[16px] leading-[26px] ml-[15px] text-black">
          My Properties
        </Typography>

        <div className="hidden sm:flex mx-auto">
          <FormInput
            placeholder="Search for anything."
            type="search"
            name="search"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            searchIconSize={20}
            iconColor="#335F32"
            wrapperClassName="h-[35px]"
            className="border h-[39px] bg-lightGray font-redhat text-charcoalGray text-xs w-[350px]"
          />
        </div>

        <div className="flex items-center  space-x-10">
          <div className="relative">
            <Button
              asChild
              className="border h-[39px] font-redhat text-[11px] leading-[11px] font-bold text-green"
              onClick={() => setShowHowItWorks(!showHowItWorks)}
            >
              <span className="px-2 bg-lightGray flex items-center">
                <img
                  src={VideoIcon}
                  alt="USD"
                  className="w-[18px] h-[18px] p-[1px]"
                />
                How It Works{" "}
                <BiCaretUp
                  strokeWidth={1.5}
                  className={`size-2 ml-1 ${showHowItWorks && "rotate-180"}`}
                />
              </span>
            </Button>

            {showHowItWorks && (
              <div className="absolute left-0 mt-2 text-[12px] text-black font-redhat space-y-2 border border-midGray bg-offWhite p-2 rounded-[15px] font-semibold w-[172px]">
                <NavLink to="/" className="py-2 px-1 cursor-pointer flex">
                  <img src={Product} className="w-[18px] h-[18px] mx-1" />
                  Product Tour & Guide
                </NavLink>
                <NavLink to="/" className="py-2 cursor-pointer flex">
                  <img src={Tutorial} className="w-[18px] h-[18px] mx-1" />
                  Video Tutorial
                </NavLink>
              </div>
            )}
          </div>

          <div className="flex space-x-[24px] mt-[0px]">
            <NavLink to="/">
              <img src={Notifications} className="h-[32px] w-[32px]" />
            </NavLink>
            <NavLink to="/">
              <img src={Activity} className="h-[32px] w-[32px]" />
            </NavLink>
            <NavLink to="/">
              <img src={Share} className="h-[32px] w-[32px]" />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex space-x-5 font-redhat font-semibold text-[10px] mt-[3px] leading-[11px] uppercase">
        <h1 className="flex items-center space-x-1">
          <Icons
            iconName="estate"
            className="w-5 h-5 border bg-tertiaryGreen border-lightGray rounded-full"
          />
          <span>{estates} Estates</span>
        </h1>

        <h1 className="flex items-center space-x-1">
          <Icons
            iconName="house"
            className="w-5 h-5 border bg-tertiaryGreen border-lightGray rounded-full"
          />
          <span>{houses} Houses</span>
        </h1>

        <h2 className="flex items-center space-x-1">
          <span className="inline-block w-1 h-1 rounded-full bg-deepGray"></span>
          <span>{units} Units</span>
        </h2>
      </div>
    </nav>
  );
};
export default NavBar;

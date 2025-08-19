import { BsArrowLeft } from "react-icons/bs";
import { MoreVertical } from "lucide-react";
import Edit from "../../../../assets/images/Edit.png";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Icons from "../../../../components/common/icons";

const NavBar = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const [showUpdateEstate, setShowUpdateEstate] = useState(false);
  return (
    <div className="px-[30px] h-[90px] py-[10px] bg-neutralWhite border-b border-lightGray">
      <div className="flex h-[40px] w-full items-center">
        <div className="flex items-center">
          <Button
            onClick={() => navigate(-1)}
            className="h-[32px] w-[81px] border-[2px] border-green rounded-[5px] font-redhat font-semibold text-[13px] leading-[24px] flex items-center gap-1"
          >
            <BsArrowLeft size={19} className="mb-[2px]" />
            Back
          </Button>
          <h1 className="ml-[20px] font-millik text-[20px] font-regular leading-[25px]">
            {name}
          </h1>
        </div>

        <div className="flex items-center ml-auto mt-[2px]">
          <Button
            asChild
            className="border h-[39px] font-redhat text-[13px] leading-[23px] font-bold text-offWhite"
          >
            <span className="px-4 bg-green flex items-center gap-1">
              <img src={Edit} className="w-[12px] h-[12px]" />
              Update Estate
            </span>
          </Button>

          <div className="relative">
            <button
              onClick={() => setShowUpdateEstate(!showUpdateEstate)}
              className="w-5 h-5 ml-2 flex items-center justify-center rounded-full bg-lightGray"
            >
              <MoreVertical className="w-3 h-3 text-new" />
            </button>

            {showUpdateEstate && (
              <div className="absolute top-full right-0 mt-[15px] border border-midGray2 text-[11px] text-special font-redhat space-y-2 bg-offWhite p-2 rounded-[15px] shadow-lg w-[115px]">
                <NavLink to="/" className="px-1 py-1 cursor-pointer flex">
                  <Icons iconName="house" className="w-[15px] h-[15px] mx-1" />
                  Add House
                </NavLink>
                <NavLink to="/" className="px-1 py-1 cursor-pointer flex">
                  <Icons iconName="share" className="w-[15px] h-[15px] mx-1" />
                  Share Estate
                </NavLink>
                <NavLink to="/" className="px-1 py-1 cursor-pointer flex">
                  <Icons iconName="qrCode" className="w-[17px] h-[17px] mx-1" />
                  QR Code
                </NavLink>
                <button className="px-1 py-1 text-red font-extrabold cursor-pointer flex">
                  <Icons iconName="delete" className="w-[15px] h-[15px] mx-1" />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 flex">
        <h2 className="font-redhat text-[12px] text-deepGray ">
          Estates <span className="text-[13px] ml-1">&gt;</span> <span className="font-extrabold ml-1 text-black">{name}</span>
        </h2>
      </div>
    </div>
  );
};

export default NavBar;

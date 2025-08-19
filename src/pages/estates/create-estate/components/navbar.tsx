import { BsArrowLeft } from "react-icons/bs";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate();
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
            Creating Estate
          </h1>
        </div>

       
      </div>

      <div className="mt-3 flex">
        <h2 className="font-redhat text-[12px] text-deepGray ">
          Estates <span className="text-[13px] ml-1">&gt;</span> <span className="font-extrabold ml-1 text-black">Create Estate</span>
        </h2>
      </div>
    </div>
  );
};

export default NavBar;

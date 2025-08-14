import Container from "../../../../components/container";
import Logo from "../common/logo";
import FormInput from "../../../../components/common/Input";
import { BiCaretDown } from "react-icons/bi";
import { Button } from "../../../../components/ui/button";
import flag from "../../assets/images/flag.png";
import Profile from "../../assets/images/Profile.png";

const TopNavBar = () => {
  return (
    <div>
      <Container
        as="nav"
        className="h-[81px] border-midGray shadow px-[60px] bg-neutral flex items-center"
      >
        {/* Logo */}
        <Logo className="w-[99.9px] h-[39px] mr-[45px]" />

        {/* Search + Menu */}
        <div className="flex items-center">
          {/* Search Input */}
          <FormInput
            placeholder={"Search for anything."}
            type="search"
            name="search"
            searchIconSize={15}
            wrapperClassName=" h-[35px]"
            className=" border h-[39px] font-redhat text-deepGray text-xs w-[195px]"
          />

          {/* Menu */}
          <MenuItems />

          {/*Refer & Earn*/}
          <p className=" ml-[20px] w-full text-center px-[20px] border-midGray  border-l h-7 border-r font-redhat text-green text-xs font-extrabold flex items-center justify-center">
            Refer & Earn
          </p>

          {/*Currency*/}
          <Button className="flex items-center pl-[12px] font-extrabold font-redhat pr-4 rounded-full py-[6.5px] ml-[30px] text-[12px] text-black border">
            <img src={flag} alt="USD" className="w-4 h-4 ml-[2px]" />
            <span>USD</span>
            <BiCaretDown
              color="#4B4B4B"
              size={13}
              className="shrink-0 -m-[2px]"
            />
          </Button>

          {/*Profile*/}
          <img src={Profile} alt="USD" className="w-8 h-8 ml-[20px]" />
        </div>
      </Container>
    </div>
  );
};

const MenuItems = () => {
  return (
    <div className="flex items-center space-x-[25px] ml-[10px] mb-[9px] ">
      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-normal ">
        Buy
        <BiCaretDown color="#4B4B4B" className="-ml-1" />
      </Button>

      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-extrabold">
        <span className="relative">
          Shortlets
          {/* Underline */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-[5.9px] w-[25px] h-[3.5px] bg-charcoalGray rounded-full"></span>
        </span>
        <BiCaretDown color="#4B4B4B" className="-ml-1" strokeWidth={2} />
      </Button>

      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-normal ">
        Sell
        <BiCaretDown color="#4B4B4B" className="-ml-1" />
      </Button>

      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-normal ">
        Invest
        <BiCaretDown color="#4B4B4B" className="-ml-1" />
      </Button>

      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-normal ">
        Services
        <BiCaretDown color="#4B4B4B" className="-ml-1" />
      </Button>

      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-normal ">
        Enterprises
        <BiCaretDown color="#4B4B4B" className="-ml-1" />
      </Button>

      <Button className="flex items-center text-charcoalGray font-redhat text-xs font-normal">
        Agents & Realtors
      </Button>
    </div>
  );
};

export { TopNavBar };

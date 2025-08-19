import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoreVertical } from "lucide-react";
import { cn } from "../../utils/classname";
import { use100vh } from "react-div-100vh";
import Typography from "../common/typography";
import Icons from "../common/icons";
import useAuth from "../../hooks/use-auth";
import Props from "../../assets/images/BuyIcon.png";
import { useContext } from "react";
import AuthenticationContext from "../../context/authentication-context";
import { PageRoutes } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { removeAuthUser } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const height = use100vh() || "100vh";
  const { authUser } = useAuth();
  const username = authUser?.user?.name;
  const email = authUser?.user?.email;
  const profilePicture = authUser?.user?.profilePicture;

  const logout = () => {
    removeAuthUser();
    navigate(PageRoutes.Login);
  };

  return (
    <div
      style={{ minHeight: height, height: "100vh" }}
      className={cn(
        
        " fixed top-0 left-0 h-screen w-[233px]  bg-green group/container flex flex-col justify-between",
        "transition-[width] duration-300 ease-in-out w-[233px] "
      )}
    >
      <div>
        <div
          className={cn(
            "border-b pb-[19px] h-[90px] text-white w-full z-20 border-deepGrey px-[24px] pt-6 duration-300 ease-in-out",
          )}
        >
          <NavLink to="/">
            <Icons iconName="logo" className="w-[100px] h-[35px]"/>

            <Typography
              variant="xxSmallTextBold"
              className="text-neutralWhite mt-[8px] uppercase font-redhat font-light text-[9px] leading-[11px]"
            >
              Residencia Moderno Smart...
            </Typography>
          </NavLink>
        </div>

        <nav className="py-[24px] text-offWhite">
          <div className="mx-[10px]">
            <h2 className="ml-4 mb-[25px] mt-[17px] flex items-center gap-3 font-semibold font-redhat  text-[14px]">
              <Icons
                iconName="dashboard"
                fill="#FFFFFF"
                className="w-[23px] h-[23px]"
              />
              Dashboard
            </h2>

            <NavLink
              to="/"
              className={
                cn(
                  "mt-1 flex items-center justify-start gap-2 font-redhat rounded-[100px] px-[10px] w-[185px] h-[40px] text-[13px] bg-aWhite ml-[18px] text-green font-semibold"
                )
              }
            >
              <img src={Props} className="w-[29px] h-[21px]" />
              <span className="leading-none">Properties</span>
            </NavLink>
          </div>
        </nav>
      </div>

      <div className="relative">
        <div className="bg-aWhite h-[48px] w-[185px] border border-midGray rounded-full flex mb-2 mx-auto ">
          <div className="flex my-[auto] gap-2 mx-auto">
            <img
              src={profilePicture || "/no-image.png"}
              alt="profile"
              className="w-[30px] h-[30px] rounded-full"
            />

            <div className="flex flex-col space-y-2 text-left">
              <Typography
                variant="smallTextBold"
                className="font-redhat font-semibold text-[11px] leading-[11px] text-black"
              >
                {username}
              </Typography>
              <Typography
                variant="xxSmallText"
                className="font-redhat font-semibold text-[9px] leading-[8px] text-special"
              >
                {email}
              </Typography>
            </div>
          </div>

          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className=" rounded-full"
          >
            <MoreVertical className="w-[25px] h-[10px] text-gray-400" />
          </button>
        </div>

        {showProfileMenu && (
          <div className="absolute bottom-full right-0 mb-1 mr-[15px] text-[11px] text-special font-redhat space-y-2 bg-aWhite p-2 rounded-[15px] shadow-lg w-[135px]">
            <NavLink to="/" className=" px-[1px] py-1 cursor-pointer flex">
              <Icons
                iconName="user"
                fill="inherit"
                className="w-[20px] h-[20px] mx-1"
              />
              My Profile
            </NavLink>
            <NavLink to="/" className="px-[1px] py-1 cursor-pointer flex">
              <Icons
                iconName="changePassword"
                className="w-[20px] h-[20px] mx-1"
              />
              Change Password
            </NavLink>
            <button
              onClick={logout}
              className="px-[1px] py-1 text-red font-extrabold cursor-pointer flex"
            >
              <Icons iconName="logout" className="w-[20px] h-[20px] mx-1" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;

import { Outlet } from "react-router-dom";
import SideNav from "../sidenav";
const MainLayout = () => {

  return (
    <div className="relative flex  px-0 lg:flex">
      <div className="hidden lg:block">
        <SideNav />
      </div>
      <div className="flex-1 lg:ml-[233px] relative">
       
          <Outlet />
       
      </div>
    </div>
  );
};

export default MainLayout;

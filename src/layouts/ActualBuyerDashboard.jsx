import { Outlet } from "react-router-dom";
import DashboardSearchNav from "../Dashboard/DashboardShared/DashboardSearchNav";
import ActualBuyerSidebar from "../Dashboard/ActualBuyerDashboard/ActualBuyerSidebar";


const ActualBuyerDashboard = () => {
    return (
        <div className="p-5 bg-base-300 dark:bg-white">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-3 hidden md:flex bg-white rounded-md">
            <ActualBuyerSidebar />
          </div>
  
          <div className="lg:col-span-9">
            <DashboardSearchNav />
            <div className="lg:mx-5 rounded-md border pt-2 bg-white dark:bg-black dark:text-white min-h-screen max-h-screen overflow-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ActualBuyerDashboard;
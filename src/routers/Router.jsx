import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Authentication from "../layouts/Authentication";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import ActualBuyerDashboard from "../layouts/ActualBuyerDashboard";
import AdminDashboard from "../layouts/AdminDashboard";
import Profile from "../Dashboard/DashboardShared/Profile";
import AddBlog from "../Dashboard/AdminDashboard/AdminRoute/AddBlog";
import OrderNow from "../Dashboard/DashboardShared/OrderNow";
import OrderRequest from "../Dashboard/AdminDashboard/AdminRoute/OrderRequest";
import DailyScrum from "../Dashboard/AdminDashboard/AdminRoute/DailyScrum";
import WorkingProjectsList from "../Dashboard/AdminDashboard/AdminRoute/WorkingProjectsList";
import AllApproveOrders from "../Dashboard/AdminDashboard/AdminRoute/AllApproveOrders";
import OurBuyer from "../Dashboard/AdminDashboard/AdminRoute/OurBuyer";
import Blog from "../pages/Blog";
import MyOrders from "../Dashboard/ActualBuyerDashboard/MyOrders";
import ControlPanel from "../Dashboard/AdminDashboard/AdminRoute/ControlPanel";
import DynamicNewTaskList from "../Dashboard/AdminDashboard/AdminRoute/DynamicNewTaskList";
import DynamicProvableBuyerProfile from "../Dashboard/AdminDashboard/AdminRoute/DynamicProvableBuyerProfile";
import DynamicActualBuyerProfile from "../Dashboard/AdminDashboard/AdminRoute/DynamicActualBuyerProfile";
import AddService from "../Dashboard/AdminDashboard/AdminRoute/AddService";
import AddShowCaseProject from "../Dashboard/AdminDashboard/AdminRoute/AddShowCaseProject";
import SubmitCompletedProject from "../Dashboard/AdminDashboard/AdminRoute/SubmitCompletedProject";
import AllCompletedTask from "../Dashboard/AdminDashboard/AdminRoute/AllCompletedTask";
import DynamicSingleCompletedTask from "../Dashboard/AdminDashboard/AdminRoute/DynamicSingleCompletedTask";
import Trash from "../Dashboard/AdminDashboard/AdminRoute/Trash";
import OrderRequestCancel from "../Dashboard/AdminDashboard/AdminRoute/OrderRequestCancel";
import DeletedOrderRequests from "../Dashboard/AdminDashboard/AdminRoute/DeletedOrderRequests";
import BlogDetails from "../pages/BlogDetails";
import UserDashboard from "../layouts/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import BuyerRoute from "./BuyerRoute";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error";
import TermsAndConditions from "../pages/TermsAndConditions";
import Privacy from "../pages/Privacy";

const router = createBrowserRouter([
  /* ---------------------------- Main routes--------------------------- */

  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/terms&Condition",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/dynamic-blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(
            `https://selosia-official-server.vercel.app/blog/dynamic/${params.id}`
          ),
      },
    ],
  },

  /* -------------------------- Authentication routes ------------------------- */

  {
    path: "/authentication",
    element: <Authentication />,
    children: [
      {
        path: "/authentication/logIn",
        element: <SignIn />,
      },
      {
        path: "/authentication/register",
        element: <SignUp />,
      },
    ],
  },

  /* --------------------- Provable-Buyer Dashboard routes -------------------- */

  {
    path: "/user/dashboard",
    element: (
      <PrivateRoute>
        <UserDashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/dashboard/order-now",
        element: (
          <PrivateRoute>
            <OrderNow />
          </PrivateRoute>
        ),
      },
    ],
  },

  /* ---------------------- Actual Buyer Dashboard routes --------------------- */

  {
    path: "/actual-buyer/dashboard",
    element: (
      <PrivateRoute>
        <BuyerRoute>
          <ActualBuyerDashboard />
        </BuyerRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/actual-buyer/dashboard",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <Profile />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/actual-buyer/dashboard/my-orders",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <MyOrders />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/actual-buyer/dashboard/order-now",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <OrderNow />
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
    ],
  },

  /* ------------------------- Admin Dashboard routes ------------------------- */

  {
    path: "/admin-profile/dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin-profile/dashboard",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Profile />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/control-panel",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ControlPanel />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/new-order-request",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <OrderRequest />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/daily-scrum",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DailyScrum />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/new-task-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllApproveOrders />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/dynamic-new-task-list/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DynamicNewTaskList />
            </AdminRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://web-tech-official-server.vercel.app/dynamic-new-task/${params.id}`
          ),
      },
      {
        path: "/admin-profile/dashboard/working-all-projects-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <WorkingProjectsList />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/our-all-buyer-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <OurBuyer />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/dynamic-provable-buyer-profile/:email",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DynamicProvableBuyerProfile />
            </AdminRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://codexriddle-official-server.vercel.app/api/v1/user/provableBuyer/${params.email}`
          ),
      },
      {
        path: "/admin-profile/dashboard/dynamic-actual-buyer-profile/:email",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DynamicActualBuyerProfile />
            </AdminRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://selosia-official-server.vercel.app/api/v1/user?email=${params.email}`
          ),
      },
      {
        path: "/admin-profile/dashboard/add-service",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddService />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/add-blog",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddBlog />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/add/showcase-project",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddShowCaseProject />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/all-completed-project",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllCompletedTask />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/submit-completed-task",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <SubmitCompletedProject />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/dynamic-submitted-task/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DynamicSingleCompletedTask />
            </AdminRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://web-tech-official-server.vercel.app/dynamic-submitted-task/${params.id}`
          ),
      },
      {
        path: "/admin-profile/dashboard/trash-bin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Trash />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/trash-bin/all-rejected-projects",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <OrderRequestCancel />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/admin-profile/dashboard/order-request/trash-bin",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <DeletedOrderRequests />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },

  /* ------------------------------- Error Page ------------------------------- */

  {
    path: "*",
    element: <Error />,
  },
]);
export default router;

import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const ForgotPassword = React.lazy(()=> import("../pages/ForgotPassword"))
const SignUp = React.lazy(()=> import("../pages/SignUp"))
const SpotifyTermsAndConditions = React.lazy(()=> import("../pages/SpotifyTermsAndConditions"))
const SignUpSuccessfullyPendingMessage = React.lazy(()=> import("../pages/SignUpSucccessfullyPendingMessage"))
// const Dashboard = React.lazy(()=> import("../pages/Dashboard"))
const DashboardHeader = React.lazy(()=> import("../layout/DashboardHeader"))
const Sidebar = React.lazy(()=>import("../pages/Sidebar"))
const Header = React.lazy(()=>import("../pages/Header"))
const Feedback = React.lazy(()=>import("../pages/Sidebar/SidebarPages/Feedback"))
const MusicCards = React.lazy(()=>import("../pages/Sidebar/SidebarPages/MusicCards"))
const SilverPlan = React.lazy(()=>import("../pages/Sidebar/SidebarPages/SilverPlan"))
const GoldenPlan = React.lazy(()=>import("../pages/Sidebar/SidebarPages/GoldenPlan"))
const DiamondPlan = React.lazy(()=>import("../pages/Sidebar/SidebarPages/DiamondPlan"))
const Help = React.lazy(()=>import("../pages/Sidebar/SidebarPages/Help"))
const PrivateRoutes = React.lazy(()=>import("../routeHandler/PrivateRoutes"))
const CommonRoutes = React.lazy(()=>import("../routeHandler/CommonRoutes"))
const UpdateProfile = React.lazy(()=>import("../pages/Profile/UpdateProfile"))
const MyProfile = React.lazy(()=>import("../pages/Profile/MyProfile"))
const FavoriteMusic = React.lazy(()=>import("../pages/FavoriteMusic"))
const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          {/* all common routes  */}
          <Route path="/" element={<CommonRoutes/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/spotify-term-and-conditions" element={<SpotifyTermsAndConditions />} />
          <Route path="/sign-up-successfully-pending-message" element={<SignUpSuccessfullyPendingMessage />} />
          </Route>


          {/* all private routes  */}
          <Route path="/" element={<PrivateRoutes/>}>
          <Route path="/" element={<Header />}>
          <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<MusicCards />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/silverPlan" element={<SilverPlan />} />
          <Route path="/goldenPlan" element={<GoldenPlan />} />
          <Route path="/diamondPlan" element={<DiamondPlan />} />
          <Route path="/help" element={<Help />} />
          </Route>
          </Route>
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/favorite-music" element={<FavoriteMusic />} />
          </Route>
          
        </Routes>
      </Router>
    </Suspense>
  );
};

export default Routing;

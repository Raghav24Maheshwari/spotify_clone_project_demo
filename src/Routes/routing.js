import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Login = React.lazy(() => import("../pages/Login"));
const ForgotPassword = React.lazy(()=> import("../pages/ForgotPassword"))
const SignUp = React.lazy(()=> import("../pages/SignUp"))
const SpotifyTermsAndConditions = React.lazy(()=> import("../pages/SpotifyTermsAndConditions"))
const SignUpSuccessfullyPendingMessage = React.lazy(()=> import("../pages/SignUpSucccessfullyPendingMessage"))
const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/spotify-term-and-conditions" element={<SpotifyTermsAndConditions />} />
          <Route path="/sign-up-successfully-pending-message" element={<SignUpSuccessfullyPendingMessage />} />

        </Routes>
      </Router>
    </Suspense>
  );
};

export default Routing;

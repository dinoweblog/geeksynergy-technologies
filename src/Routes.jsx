import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import { Signin, Signup, Movies, CompanyInfo } from "./pages";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

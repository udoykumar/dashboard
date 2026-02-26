import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import { useAppContext } from "./context/AuthContext";

const App = () => {
  const { token } = useAppContext();

  return (
    <>
      {token ? (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard/*"
              element={
                <PrivateRoute token={token}>
                  <DashboardLayout />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;

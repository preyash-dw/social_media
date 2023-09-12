import React, { useContext } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/component/Navbar/NavBar";
import LeftBar from "./components/component/LeftBar/LeftBar";
import RightBar from "./components/component/RightBar/RightBar";
import "./AppStyle.scss";
import { DarkModeContext } from "./context/DarkMode";
import { AuthContext } from "./context/Authorization";
import {QueryClient,QueryClientProvider} from "react-query"
const App = () => {
 
  const {currentUser}=useContext(AuthContext);

const {darkMode}=useContext(DarkModeContext)

const queryClient=new QueryClient();


  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" :"light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div> 
          <RightBar />
        </div>
      </div>
      </QueryClientProvider>
    );
  };
  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

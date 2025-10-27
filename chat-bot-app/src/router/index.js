import { createBrowserRouter } from "react-router-dom";
import RootRayout from "../layout/RootRayout";
import Home from "../page/Home";
import signup from "../page/signup";
import Login from "../page/Login";
//import Logout from "../page/Logout";
import AuthLayout from "../layout/AuthLayout";
import Chat from "../page/Chat";
import ChatList from "../page/ChatList";
import Etc from "../page/Etc";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootRayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/etc",
        Component: Etc,
      },
      {
        path: "/signup",
        Component: signup,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "/chat",
        Component: Chat,
      },
      {
        path: "/chatList",
        Component: ChatList,
      },
    ],
  },
]);

export default router;

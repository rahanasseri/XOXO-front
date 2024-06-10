import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TopPlayers from "./TopPlayers";
import PlayGround from "./PlayGround";
import SignupForm from "./SignupForm";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [




      { path: "", element: <App /> },
      { path: "signupForm", element: <SignupForm /> },


      { path: "topScores", element: <TopPlayers /> },
      { path: "playGround", element: <PlayGround /> },
    ],
  },
]);
export default router;

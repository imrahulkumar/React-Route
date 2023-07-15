import { createBrowserRouter, RouterProvider } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import Dashboard from "./CoreComp/Dashboard";
import Error from "./CoreComp/Error"
import PrithvirajKapoor from "./firstGeneration/PrithvirajKapoor";
import TrilokKapoor from "./firstGeneration/TrilokKapoor";

import RajKapoor from "./secondGeneration/RajKapoor";
import ShammiKapoor from "./secondGeneration/ShammiKapoor";
import ShashiKapoor from "./secondGeneration/ShashiKapoor";
import React from "react";
import VijayKapoor from "secondGeneration/VijayKapoor";
import VickyKapoor from "secondGeneration/VickyKapoor";



const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <Dashboard />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "Prithviraj-Kapoor",
        element: <PrithvirajKapoor />,
      },
              {
                path: "Raj-Kapoor",
                element: <RajKapoor />,
              },
              {
                path: "Shammi-Kapoor",
                element: <ShammiKapoor />,
              },
              {
                path: "Shashi-Kapoor",
                element: <ShashiKapoor />,
              },
      {
        path: "Trilok-Kapoor",
        element: <TrilokKapoor />
      },
        {
                path: "Vijay-Kapoor",
                element: <VijayKapoor />,
              },
                {
                path: "Vicky-Kapoor",
                element: <VickyKapoor />,
              },
    ],
  },




]);




function App() {
  return (
    <div>
      <
// @ts-ignore
      RouterProvider router={appRouter}>
        <Dashboard />
      </RouterProvider>
    </div>
  );
}

export default App;

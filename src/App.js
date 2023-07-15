import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
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
import RandhirKapoor from "thirdGeneration/RandhirKapoor";
import RituNanda from "thirdGeneration/RituNanda";
import RishiKapoor from "thirdGeneration/RishiKapoor";
import RimaJain from "thirdGeneration/RimaJain";
import AdityaRajKapoor from "thirdGeneration/AdityaRajKapoor";
import KanchanDesai from "thirdGeneration/KanchanDesai";
import KunalKapoor from "thirdGeneration/KunalKapoor";
import KaranKapoor from "thirdGeneration/KaranKapoor";
import SanjanaKapoor from "thirdGeneration/SanjanaKapoor";
import RajivKapoor from "thirdGeneration/RajivKapoor";
import AadarJain from "fourthGeneration/AadarJain";
import ArmaanJain from "fourthGeneration/ArmaanJain";
import NitashaNanda from "fourthGeneration/NitashaNanda";
import NikhilNanda from "fourthGeneration/NikhilNanda";
import KarismaKapoor from "fourthGeneration/KarismaKapoor";
import KareenaKapoor from "fourthGeneration/KareenaKapoor";
import RiddhimaKapoor from "fourthGeneration/RiddhimaKapoor";
import RanbirKapoor from "fourthGeneration/RanbirKapoor";



const appRouter = createBrowserRouter([


  {
    path: '/',
    element: <Navigate to="/kapoor-family-tree" />
  },
  {
    path: "/kapoor-family-tree", // show path for routing
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
      {
        path: "Randhir-Kapoor",
        element: <RandhirKapoor />,
      },
      {
        path: "Ritu-Nanda",
        element: <RituNanda />,
      },
      {
        path: "Rishi-Kapoor",
        element: <RishiKapoor />,
      },
      {
        path: "Rajiv-Kapoor",
        element: <RajivKapoor />,
      },
      {
        path: "Rima-Jain",
        element: <RimaJain />,
      },
      {
        path: "Aditya-Raj-Kapoor",
        element: <AdityaRajKapoor />,
      },
      {
        path: "Kanchan-Desai",
        element: <KanchanDesai />,
      },

      {
        path: "Kunal-Kapoor",
        element: <KunalKapoor />,
      },
      {
        path: "Karan-Kapoor",
        element: <KaranKapoor />,
      },
      {
        path: "Sanjana-Kapoor",
        element: <SanjanaKapoor />,
      },








      {
        path: "Ranbir-Kapoor",
        element: <RanbirKapoor />,
      },
      {
        path: "Riddhima-Kapoor",
        element: <RiddhimaKapoor />,
      },
      {
        path: "Kareena-Kapoor",
        element: <KareenaKapoor />,
      },
      {
        path: "Karisma-Kapoor",
        element: <KarismaKapoor />,
      },
      {
        path: "Nikhil-Nanda",
        element: <NikhilNanda />,
      },
      {
        path: "Nitasha-Nanda",
        element: <NitashaNanda />,
      },
      {
        path: "Armaan-Jain",
        element: <ArmaanJain />,
      },
      {
        path: "Aadar-Jain",
        element: <AadarJain />,
      },


    ],
  }




]);




function App() {
  return (
    <div>
      <
        RouterProvider router={appRouter}>
        <Dashboard />
      </RouterProvider>
    </div>
  );
}

export default App;

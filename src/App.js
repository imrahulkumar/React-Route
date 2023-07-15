import { createBrowserRouter, RouterProvider } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import  Dashboard  from "./CoreComp/Dashboard";
import Error from "./CoreComp/Error"
import PrithvirajKapoor from "./firstGeneration/PrithvirajKapoor";
import TrilokKapoor from "./firstGeneration/TrilokKapoor";



const appRouter = createBrowserRouter([
  {
    path: "/first-generation", // show path for routing
    element: <Dashboard />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "PrithvirajKapoor",
        element: <PrithvirajKapoor />,
      },
      {
        path: "TrilokKapoor",
        element: <TrilokKapoor />
      },
    ],
  },
]);




function App() {
  return (
   <>
   <RouterProvider router={appRouter}>
    <Dashboard/>
   </RouterProvider>
   </>
  );
}

export default App;

import { Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import '../App.css'
import React from "react";
import Header from "./Header";
const Dashboard = () => {
    return (<div>
        <Header />
        <Outlet /></div>)
}
export default Dashboard;
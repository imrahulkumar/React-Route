import { Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import '../App.css'
const Dashboard = () => {
    return (<><Outlet /></>)
}
export default Dashboard;
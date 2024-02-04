import { Outlet } from "react-router-dom";
import TaskCard from "../TaskCard/TaskCard";

const Layout = (): React.ReactElement => {
  return (
    <>
      <TaskCard />
      <Outlet />
    </>
  );
};

export default Layout;

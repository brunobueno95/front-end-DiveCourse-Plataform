import React, { ReactNode } from "react";
import SideBar from "../../../components/sidebar/SideBar";
import TopBar from "../../../components/topBar/TopBar";
import "./Layout.css"

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <TopBar />
      <div className="mainContent">{children}</div>
    </div>
  );
};

export default Layout;

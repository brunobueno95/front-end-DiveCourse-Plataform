import React from "react";
import "./SideBard.css";
import SbContent from "./SbContent/SbContent";
import { RxDashboard } from "react-icons/rx";
import { PiStudent } from "react-icons/pi";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { MdOutlineContentPaste } from "react-icons/md";
import Logo from "../logo/Logo";

const sideBarContent = [
  {
    icon: RxDashboard,
    displayText: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: PiStudent,
    displayText: "Students",
    path: "/admin/students/allStudents",
  },
  {
    icon: MdOutlineContentPaste,
    displayText: "Courses",
    path: "/admin/courses",
  },
  {
    icon: MdOutlineCreateNewFolder,
    displayText: "Create",
    path: "/admin/create",
  },
];

const SideBar = () => {
  return (
    <div className="sideBar">
      <Logo />
      {sideBarContent.map((c, i) => (
        <SbContent
          icon={c.icon}
          displayText={c.displayText}
          path={c.path}
          key={i}
        />
      ))}
    </div>
  );
};

export default SideBar;

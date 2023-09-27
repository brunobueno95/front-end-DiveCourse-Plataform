import React, { ReactNode } from "react";
import "./AdminStudents.css";
import Layout from "../layout/Layout";

import { BsPersonAdd } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import DisplayBox from "../../../components/displayBox/DisplayBox";

interface AdminStudentProps {
  children: ReactNode;
}

const displayBoxesList = [
  {
    icon: HiOutlineUserGroup,
    text: "All Students",
    path: "/admin/students/allStudents",
  },
  {
    icon: BsPersonAdd,
    text: "Add Student",
    path: "/admin/students/createStudent",
  },
  {
    icon: AiOutlineSearch,
    text: "Search Student",
    path: "/admin/students/search",
  },
];

const AdminStudent: React.FC<AdminStudentProps> = ({ children }) => {
  return (
    <Layout>
      <div className="displayBoxesContainer">
        {displayBoxesList.map((bx, i) => (
          <DisplayBox icon={bx.icon} text={bx.text} path={bx.path} key={i} />
        ))}
      </div>
      
      {children}
    </Layout>
  );
};

export default AdminStudent;

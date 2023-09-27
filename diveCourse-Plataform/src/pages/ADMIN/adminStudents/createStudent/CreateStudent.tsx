import React from "react";
import AdminStudent from "../AdminStudents";
import "./CreateStudents.css";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";

const CreateStudent = () => {
  return (
    <AdminStudent>
      <div className="createStudentPage">
        <div className="boxForm">
          <h1 className="createTxt">Create Student</h1>
          <div className="infoForm">
            <div className="layer" />
            <div className="lineForm">
              <p className="inputTxt">
                <BiUser />
              </p>
              <input className="inputField" type="text" />
            </div>
            <div className="lineForm">
              <p className="inputTxt">
                <AiOutlineLock />
              </p>
              <input className="inputField" type="text" />
            </div>
            <div className="lineCoursesForm">
              OW <input type="radio" />
              AOW <input type="radio" />
              RESCUE <input type="radio" />
              DM <input type="radio" />
            </div>
          </div>
          <div className="btnContainer">
            <button className="btnCreate">Create</button>
          </div>
        </div>
      </div>
    </AdminStudent>
  );
};

export default CreateStudent;

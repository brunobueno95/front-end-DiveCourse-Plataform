/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Layout from "../layout/Layout";
import "./AdminCreate.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import LessonCreate from "./lessonCreate/LessonCreate";

const AdminCreate = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [lesson, setLesson] = useState<string[]>();
  const [finalExam, setFinalExam] = useState<string>();
  const [lessonAddPage, setLessonAddPage] = useState<boolean>(false);
  const [helloWorld, setHelloWorld] = useState<string>();

  const handleLessonClose = (closePageValue: boolean) => {
    setLessonAddPage(!closePageValue);
  };
  return (
    <>
      <Layout>
        <div className="createPage">
          <div className="boxCreation">
            <h1 className="headTxt">Create Course</h1>
            <div className="boxDynamic">
              <div className="layer-blur-dark" />
              <div className="content">
                {
                  //page 1
                }
                {pageNumber === 1 && (
                  <>
                    <h1 className="lessonTxt">General</h1>
                    <div className="generalBox">
                      <div className="rowInput">
                        <p className="pCourseCreation">Title :</p>
                        <input className="inputTitle" type="text" />
                      </div>
                      <div className="infoTxtArea">
                        <p className="pCourseCreation">
                          Information about the course :
                        </p>
                        <textarea className="txtAreaInfo" rows={4} cols={50} />
                      </div>
                    </div>
                  </>
                )}

                {
                  //page 2
                }
                {pageNumber === 2 && (
                  <div className="lessonPg">
                    <h1 className="lessonTxt">LESSONS</h1>

                    {lesson !== undefined && (
                      <ul className="ulLessons">
                        {lesson.map((l, i) => (
                          <li className="lessonName" key={i}>
                            {l}
                          </li>
                        ))}
                      </ul>
                    )}

                    <button
                      onClick={() => setLessonAddPage(true)}
                      className="addBtn"
                    >
                      {" "}
                      Add
                    </button>
                  </div>
                )}
                {
                  //page 3
                }
                {pageNumber === 3 && (
                  <div className="lessonPg">
                    <h1 className="lessonTxt">Final Exam</h1>
                    {finalExam && <div className="boxExam"></div>}
                    <div className="divBtn">
                      {!finalExam && <button className="addBtn">Add</button>}
                    </div>
                  </div>
                )}
                {
                  //page 4
                }
                {pageNumber === 4 && (
                  <button className="createCourseBtn">Create Course</button>
                )}
              </div>
              <div className="btnDiv">
                {pageNumber != 1 ? (
                  <BiLeftArrowAlt
                    className="arrow"
                    onClick={() => setPageNumber(pageNumber - 1)}
                  />
                ) : (
                  <p></p>
                )}{" "}
                {pageNumber == 4 ? (
                  <p></p>
                ) : (
                  <BiRightArrowAlt
                    className="arrow"
                    onClick={() => setPageNumber(pageNumber + 1)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {lessonAddPage && <LessonCreate onClosePage={handleLessonClose} />}
    </>
  );
};

export default AdminCreate;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./LessonCreate.css";
import ChapterCreate from "../chapterCreate/ChapterCreate";
import { Question, Exam, Media, Chapter, Lesson } from "../../../../interfaces";
import ExamCreate from "../examCreate/ExamCreate";

interface LessonCreateProps {
    onClosePage: (closePageValue: boolean) => void;
  }

const LessonCreate: React.FC<LessonCreateProps> = ({
    onClosePage
}) => {
  const [openAddChapter, setOpenAddChapter] = useState<boolean>();
  const [openAddExam, setOpenAddExam] = useState<boolean>();
  const handleCancel = () => {
    onClosePage(true);
  };
  const handleChapterClose = (closePageValue: boolean) => {
    setOpenAddChapter(!closePageValue);
    setOpenAddExam(!closePageValue)
  };

  return (
    <>
      <div className="entirePage">
        <div className="boxLessonForm">
          <h1>Lesson</h1>
          <h2>Chapters: </h2>
          <button onClick={() => setOpenAddChapter(true)}>Add Chapter</button>
          <h2>Exam: </h2>
          <button onClick={() => setOpenAddExam(true)}>Add Exam</button>
          <button onClick={handleCancel}>cancel</button>
        </div>
      
      </div>
      {openAddChapter && <ChapterCreate onClosePage={handleChapterClose} />}

      {openAddExam && <ExamCreate onClosePage={handleChapterClose} testOrExam="exam" />}
    </>
  );
};

export default LessonCreate;

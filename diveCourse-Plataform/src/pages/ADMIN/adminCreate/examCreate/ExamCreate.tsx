/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./ExamCreate.css";
import Test from "../../../../components/test-exam/Test";

interface ExamCreateProps {
    onClosePage: (closePageValue: boolean) => void;
    testOrExam: string
  }

const ExamCreate: React.FC<ExamCreateProps> = ({onClosePage, testOrExam}) => {
    const handleCancel = () => {
       
        onClosePage(true);
      };
 



  return (
    <div className="entirePage">
      <div className="boxExamCreate">
        {testOrExam == "exam"? (
            <p>exam</p>
        ) : (
           <Test/>
        )}
      
        
        <button onClick={handleCancel}>cancel</button>
      </div>
    </div>
  );
};

export default ExamCreate;

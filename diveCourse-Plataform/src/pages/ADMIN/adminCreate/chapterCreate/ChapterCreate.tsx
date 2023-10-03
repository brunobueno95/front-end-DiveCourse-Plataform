import React,{useState} from 'react'

import "./ChapterCreate.css"
import ExamCreate from '../examCreate/ExamCreate';
interface ChapterCreateProps {
    onClosePage: (closePageValue: boolean) => void;
  }

const ChapterCreate: React.FC<ChapterCreateProps> = ({ onClosePage }) => {
    const [openAddExam, setOpenAddExam] = useState<boolean>();
    const handleCancel = () => {
        // Call the callback to communicate closePage state to the parent
        onClosePage(true);
      };

      const handleExamClose = (closePageValue: boolean) => {
        
        setOpenAddExam(!closePageValue)
      };
  return (
   <><div className='entirePage'>
        <div className='boxCreateChapter'>
            <h1>Chapter</h1>
            <h2>Title</h2><input/>
            <div className='media' >media</div>
            <h2>text</h2><input/>
            <h2>knowledge test</h2>
            <button onClick={()=>setOpenAddExam(true)}>Add test</button>
            <button onClick={handleCancel}>Cancel</button>


        </div>
      
    </div>
    {
        openAddExam && (
            <ExamCreate onClosePage={handleExamClose} testOrExam='test'/>
        )
    }
    </> 
  )
}

export default ChapterCreate

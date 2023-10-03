/* eslint-disable @typescript-eslint/no-unused-vars */
import React,{useEffect, useState} from 'react'
import { Question } from '../../interfaces';

const Test = () => {
   const [qList, setqlist] = useState<number>(1)
  const [examQuestion, setExamQuestion] = useState<string>('');
  const [answerA, setAnswerA] = useState<string>('');
  const [answerB, setAnswerB] = useState<string>('');
  const [answerC, setAnswerC] = useState<string>('');
  const [answerD, setAnswerD] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<string>('');

  const [allSavedQuestions, setAllSavedQuestions] = useState<Question[]>([]);

  useEffect(()=>{
    console.log(allSavedQuestions)
  },[allSavedQuestions])

  const saveQuestion = () =>{
 
        if (
          examQuestion !== '' &&
          answerA !== '' &&
          answerB !== '' &&
          answerC !== '' &&
          answerD !== '' &&
          correctAnswer !== ''
        ) {
          const addedQuestion: Question = {
            theQuestion: examQuestion,
            answers: [answerA, answerB, answerC, answerD],
            correctAnswer: correctAnswer,
          };
    
          if (allSavedQuestions !== undefined) {
            setAllSavedQuestions([...allSavedQuestions, addedQuestion]);
          } else {
            setAllSavedQuestions([addedQuestion]);
          }
        }

        else{
            alert('missing required inputs')
        }
      
  }

  const nextQ = () => {
    if (
        examQuestion == '' ||
        answerA == '' ||
        answerB == '' ||
        answerC == '' ||
        answerD == '' ||
        correctAnswer == ''
      ) {
        alert('missing required inputs')
      }
else{


    setqlist(qList + 1);
    setExamQuestion('');
    setAnswerA('')
    setAnswerB('')
    setAnswerC('')
    setAnswerD('')
    setCorrectAnswer('')}


  }

  return (
    <>{
        qList <= 5  ? ( <>
            <div style={{height:"60%", width:"80%", borderRadius:"10px", boxShadow:"0 2px 4px black",display:'flex', flexDirection:"column", margin:"auto"}}>
        <p> Question - {qList}</p>
        <input type='text' value={examQuestion} onChange={(e)=>setExamQuestion(e.target.value)}/>
        <p>Answers</p>
      <div><p>A</p><input type="text" value={answerA} onChange={(e)=>setAnswerA(e.target.value)}/></div>
      <div><p>B</p><input type="text" value={answerB} onChange={(e)=>setAnswerB(e.target.value)}/></div>
      <div><p>C</p><input type="text" value={answerC} onChange={(e)=>setAnswerC(e.target.value)}/></div>
      <div><p>D</p><input type="text" value={answerD} onChange={(e)=>setAnswerD(e.target.value)}/></div>
      <p>Correct Answer</p>
      A <input name="correctAnswer" value={"a"} type="radio" onChange={(e)=>setCorrectAnswer(e.target.value)}/>
      B <input name="correctAnswer" value={"b"} type="radio" onChange={(e)=>setCorrectAnswer(e.target.value)}/>
      C <input name="correctAnswer" value={"c"} type="radio" onChange={(e)=>setCorrectAnswer(e.target.value)}/>
      D <input name="correctAnswer" value={"d"} type="radio" onChange={(e)=>setCorrectAnswer(e.target.value)}/>
      <button onClick={saveQuestion}>save</button>
    </div>
    <button onClick={nextQ}>next</button>
       </> ) : (
            <div>
                    Test is created
                    
            </div>
            
        )
    }
    
    </>
    
  )
}

export default Test

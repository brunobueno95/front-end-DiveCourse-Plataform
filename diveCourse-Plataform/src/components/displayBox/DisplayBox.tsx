import React from 'react';
import { IconType } from 'react-icons';
import "./DisplayBox.css"
import { useNavigate } from 'react-router-dom';

interface DisplayBoxesProps {
  icon: IconType;
  text: string;
  path: string;
}

const DisplayBox: React.FC<DisplayBoxesProps> = ({ icon: Icon, text, path }) => {
    const navigate = useNavigate();
    const goTo = () =>{
navigate(path)
    }
  return (
    <div className="displayBox" onClick={goTo}>
        <Icon className='icnDisplayBox'/>
        <p className='txtDisplayBox'>{text}</p>
      
     
    </div>
  );
};

export default DisplayBox;


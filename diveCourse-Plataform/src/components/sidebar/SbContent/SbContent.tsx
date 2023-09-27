import React from "react";
import "./SbContent.css";
import { useNavigate } from "react-router-dom";
import { IconType } from 'react-icons';

export interface SbContentProps {
    icon: IconType;
    displayText: string;
    path: string;
}

const SbContent: React.FC<SbContentProps> = ({ icon: IconComponent, displayText, path }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    }

    return (
        <div className="sbBtn" onClick={handleClick}>
           {<IconComponent className="icon" />}
            <p className="icnText">{displayText}</p>
        </div>
    );
};

export default SbContent;
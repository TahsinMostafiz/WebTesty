import React from 'react';


const Options = ({option, handleCorrectAnswer}) => {
    // console.log(correctAnswer);
    
    return (
        <div>
            <input onClick={(e) => handleCorrectAnswer(e.target.value)} type="radio" value={option} name="option" /> {option}
        </div>
    );
};

export default Options;
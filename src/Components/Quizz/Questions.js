import React, { useState } from 'react';
import Options from './Options';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({singleQuestion, index}) => {
    // console.log(singleQuestion);
    const {correctAnswer, options, question} = singleQuestion;
    // console.log(correctAnswer.length);
 
    const handleCorrectAnswer = (e) => {
        if (correctAnswer.length === e.length) {
            toast.success(`Answer is Correct ✔.   ${e}` , {
                position: "top-center",
                autoClose: 5000,
            });
        } else {
            toast.error('Answer is Wrong ❌' , {
                position: "top-center",
                autoClose: 500,
            });
        }
        
    }

    return (
        <div className='w-2/3 m-auto shadow-md border rounded-md mb-3 p-5'>
            <h3 className='text-1xl font-semibold'>Quiz {index +1} : {question.slice(3,-4)}</h3>
            {
                options.map((option, idx) => <p key={idx} ><input onClick={(e) => handleCorrectAnswer(e.target.value)} type="radio" value={option} name="option" /> {option}</p>)
            }
            
        </div>
    );
};

export default Questions;
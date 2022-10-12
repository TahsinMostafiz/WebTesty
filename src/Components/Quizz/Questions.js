import React, { useState } from 'react';
import Options from './Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({singleQuestion, index}) => {
    console.log(singleQuestion);
    const {correctAnswer, options, question} = singleQuestion;
    
    // console.log(ans);
    const handleCorrectAnswer = (e) => {
        
        // if (e.length === correctAnswer.length) {
        //     toast.success("Correct Answer", {
        //         position : "top-center",
        //         autoClose: 5000,
        //     });
        // } else {
        //     toast.error("Wrong Answer", {
        //         position : "top-center",
        //         autoClose: 500,
        //     });
        // }
    }

    return (
        <div className='w-2/3 m-auto shadow-md border rounded-md mb-3 p-5'>
            <h3 className='text-1xl font-semibold'>Quiz {index +1} : {question.slice(3,-4)}</h3>
            {
                options.map((option, idx) => <Options
                key={idx}
                option={option}
                handleCorrectAnswer={handleCorrectAnswer}
                ></Options>)
            }
        </div>
    );
};

export default Questions;
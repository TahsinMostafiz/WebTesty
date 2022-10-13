import React from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({singleQuestion, index}) => {
    
    const {correctAnswer, options, question} = singleQuestion;
   
    const showCorrectAnswer = () => {
        toast.success(`Correct Answer : ${correctAnswer}` , {
            position: "top-center",
            autoClose: 5000,
        });
    }
    const handleCorrectAnswer = (e) => {
        if (correctAnswer.includes(e)) {
            toast.success(`Answer is Correct ✔.   ${e}` , {
                position: "top-center",
                autoClose: 7000,
            });
        } else {
            toast.error('Answer is Wrong ❌' , {
                position: "top-center",
                autoClose: 500,
            });
        }
        
    }

    return (
        <div className='relative w-2/3 m-auto shadow-md border rounded-md mb-3 p-5'>
            <h3 className='text-1xl font-semibold'>Quiz {index +1} : {question.slice(3,-4)}</h3>
            <p className='absolute top-2 right-5 cursor-pointer' onClick={() => showCorrectAnswer()}><FontAwesomeIcon icon={faEye} /></p>
            {
                options.map((option, idx) => <p key={idx} > <label htmlFor={option}><input onClick={(e) => handleCorrectAnswer(e.target.value)} id={option} type="radio" value={option} name="option" /> {option}</label> </p>)
            }
            
        </div>
    );
};

export default Questions;
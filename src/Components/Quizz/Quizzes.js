import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Quizzes = () => {
    const quizzesData = useLoaderData();
    
    const {name, questions,total} = quizzesData.data;
    
    return (
        <div>
            <h2 className='text-4xl font-bold pt-7 pb-5'>Quiz of {name}</h2>
            <h2 className='text-1xl font-bold pb-5'>Total Quiz : {total}</h2>

            <div>
                {
                    questions.map((singleQuestion, index) => <Questions
                    key={singleQuestion.id}
                    singleQuestion={singleQuestion}
                    index={index}
                    ></Questions>)
                }
            </div>
        </div>
    );
};

export default Quizzes;
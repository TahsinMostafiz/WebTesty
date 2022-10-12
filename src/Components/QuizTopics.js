import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopics = ({quizTopic}) => {
    const {name, logo,} = quizTopic
    return (
        <div>
            
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm border">
                <img
                    src={logo}
                    className="object-fit w-full h-64 p-3"
                    alt="quizImage"
                />
                <div className=" flex items-center justify-between p-5 border border-b-0 border-l-0 border-r-0">
                    <p
                    aria-label={name}
                    title={name}
                    className="inline-block text-1xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                    {name}
                    </p>
                    <button>
                        <Link
                        to="/"
                        aria-label=""
                        className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 bg-rose-200 px-2 rounded-md"
                        >
                        Start Quiz
                        </Link>
                    </button>
                </div>
            </div>



        </div>
    );
};

export default QuizTopics;
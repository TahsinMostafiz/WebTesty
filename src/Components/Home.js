import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../Assets/img/header.jpg'
import QuizTopics from './QuizTopics';
import { QuizContext } from './Root';

const Home = () => {
    const quizTopics = useContext(QuizContext);


    const handleQuizById = (id) => {
        console.log(id)
    }
    return (
        <div>
            <section>
            <div className='bg-blue-100'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none ">
                        Welcome To WebTesty
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg ">
                        Collect leads, grow your brand
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/blog">
                        <button
                            type="button"
                            className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-rose-400 bg-rose-200"
                        >
                            Blog Page
                        </button>
                        </Link>
                    </div>
                    </div>
                    <div>
                    <img
                        className="object-fit w-full h-56 rounded shadow-lg sm:h-96"
                        src={headerImg}
                        alt="headerImg"
                    />
                    </div>
                </div>
            </div>
        </div>
            </section>
            {/* Quiz Section */}
            <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h2 className='text-center text-4xl pb-7 font-bold'>Quiz Section</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    {
                        quizTopics.data.map(quizTopic => <QuizTopics
                        key={quizTopic.id}
                        quizTopic={quizTopic}
                        handleQuizById={handleQuizById}
                        ></QuizTopics>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;
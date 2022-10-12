import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const QuizContext = createContext([]);

const Root = () => {
    const quizTopics = useLoaderData();
    return (
        <QuizContext.Provider value={quizTopics}>
            <Header></Header>
            <Outlet></Outlet>
        </QuizContext.Provider>
    );
};

export default Root;
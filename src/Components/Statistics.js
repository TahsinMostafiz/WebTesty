import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';
import { QuizContext } from './Root';

const Statistics = () => {
    const quizTopics = useContext(QuizContext);
    const data = quizTopics.data;

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           
            <LineChart 
            width={600}
            height={400}
            data={data} 
            >
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
            </LineChart>
        </div>
    );
};

export default Statistics;
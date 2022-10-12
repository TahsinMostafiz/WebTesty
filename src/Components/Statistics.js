import React, { useContext } from 'react';
import { QuizContext } from './Root';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const Statistics = () => {
    const quizTopics = useContext(QuizContext);

    return (
        <div>
            {/* {
                quizTopics.data.map(quizTopic => <StatisticChart
                key={quizTopic.id}
                quizTopic={quizTopic}
                ></StatisticChart>)
            } */}
            <LineChart 
            width={1200}
            height={500}
            data={quizTopics.data} 
            >
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                <XAxis dataKey='6' />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                
            </LineChart>
        </div>
    );
};

export default Statistics;
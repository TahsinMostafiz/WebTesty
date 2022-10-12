import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const Statistics = () => {
    
    
    const data = [{"id":1,"name":"React","logo":"https://live.staticflickr.com/65535/52413593240_e00326e727_o.png","total":8},{"id":2,"name":"JavaScript","logo":"https://live.staticflickr.com/65535/52412638962_12e932256a_o.png","total":9},{"id":4,"name":"CSS","logo":"https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png","total":8},{"id":5,"name":"Git","logo":"https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png","total":11}]
    

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           
            <LineChart 
            width={1200}
            height={500}
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
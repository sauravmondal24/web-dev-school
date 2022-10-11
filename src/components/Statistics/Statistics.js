import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer
} from 'recharts';

const Statistics = () => {
	const { data } = useLoaderData();

	return (
		<div className=" p-5 text-center container">
			<h3 className=" mb-5 fs-1 border-bottom border-3 w-75 text-center m-auto border-success pb-3 text-primary fw-bold">
				Question Total Chart
			</h3>
			<ResponsiveContainer width="100%" height={400}>
				<LineChart
					width={500}
					height={400}
					data={data}
					margin={{ top: 35, right: 40, bottom: 25, left: 0 }}
					className="border border-2  fw-bold shadow bg-white rounded m-auto"
				>
					<Line type="monotone" dataKey="total" stroke="green" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statistics;

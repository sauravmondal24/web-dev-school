import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts';

const Statistics = () => {
	const { data } = useLoaderData();

	return (
		<div className=" p-5 ">
			<h3 className=" mb-5 fs-1 border-bottom border-3 w-50 text-center m-auto border-success pb-2 text-primary fw-bold">
				Question Total Chart
			</h3>
			<LineChart
				width={800}
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
		</div>
	);
};

export default Statistics;

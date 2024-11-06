import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Statistics = () => {
  const data = useLoaderData();
  const [newData, setNewData] = useState([]);

  const handleNewData = () => {
    let dData = [];
    data.map((item) => {
      item.ratings = item.ratings * 50;
      dData.push(item);
    });

    setNewData(dData);
  };

  useEffect(() => handleNewData, [data]);

  return (
    <>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <section className="pb-16">
        <div className="bg-primary w-full px-5">
          <div className="max-w-7xl mx-auto py-12">
            <div className="text-white text-center max-w-2xl mx-auto">
              <h2 className="text-4xl font-semibold mb-2">Statistics</h2>
              <p>
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>

        <div className="hidden max-w-7xl bg-white p-5 mx-auto mt-16 lg:flex justify-center">
          <LineChart
            width={1280}
            height={600}
            data={newData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="brand" angle={50} />
            <YAxis angle={0} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              strokeDasharray="5 5"
            />
            <Line
              type="monotone"
              dataKey="ratings"
              stroke="#82ca9d"
              strokeDasharray="3 4 5 2 1 1"
            />
          </LineChart>
        </div>
      </section>
    </>
  );
};

export default Statistics;

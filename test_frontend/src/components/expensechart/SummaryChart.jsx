import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useSummary } from "../../context/SummaryContext";

const SummaryChart = () => {
  const { transactions } = useSummary();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const categoryTotals = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + Number(item.amount);
        return acc;
      }, {});

    const formattedData = Object.keys(categoryTotals).map((key) => ({
      name: key,
      value: categoryTotals[key],
    }));

    setChartData(formattedData);
  }, [transactions]);

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899", "#6366f1"];

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg mt-8 text-white w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-100">Expense Category Breakdown</h2>

      {chartData.length === 0 ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500 italic">No expense data to display chart</p>
        </div>
      ) : (
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                innerRadius="40%"
                fill="#8884d8"
                paddingAngle={2}
                labelLine={false}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="focus:outline-none"
                  />
                ))}
              </Pie>
              <Tooltip 
                cursor={{ stroke: 'white', strokeWidth: 1 }}
                contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '8px', color: 'white' }}
                formatter={(value) => [`RS ${value.toFixed(2)}`, "Amount"]}
              />
              <Legend wrapperStyle={{ paddingTop: "20px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default SummaryChart;

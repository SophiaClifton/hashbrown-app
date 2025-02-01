import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for income and expenses
const incomeData = [
    { name: 'Salary', value: 5000 },
    { name: 'Freelance', value: 2000 },
    { name: 'Investments', value: 1500 },
    { name: 'Other', value: 1000 }
];

const expensesData = [
    { name: 'Rent', value: 1200 },
    { name: 'Groceries', value: 800 },
    { name: 'Utilities', value: 300 },
    { name: 'Entertainment', value: 400 },
    { name: 'Other', value: 200 }
];

// Colors for the chart sections
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DoughnutCharts: React.FC = () => {
    return (
        <div className="charts-container">
            {/* Income Doughnut Chart */}
            <div className="chart">
                <h3>Income</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={incomeData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80} // Outer radius of the doughnut
                            innerRadius={60} // Inner radius to create the hole
                            fill="#8884d8"
                            label
                        >
                            {incomeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Expenses Doughnut Chart */}
            <div className="chart">
                <h3>Expenses</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={expensesData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80} // Outer radius of the doughnut
                            innerRadius={60} // Inner radius to create the hole
                            fill="#8884d8"
                            label
                        >
                            {expensesData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DoughnutCharts;

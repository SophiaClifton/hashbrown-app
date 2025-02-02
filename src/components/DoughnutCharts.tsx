import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Import the JSON data
import data from '../dummy_assets/budget.json'; // Adjust the path based on where your data file is located

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DoughnutCharts: React.FC = () => {
    const [incomeData, setIncomeData] = useState<any[]>([]);
    const [expenseData, setExpenseData] = useState<any[]>([]);

    useEffect(() => {
        let incomeCategories: any = {};
        let expenseCategories: any = {};

        // Accessing the transactions from the imported data
        data.transactions.forEach(transaction => {
            const amount = transaction.amount;
            const category = transaction.category;

            if (amount > 0) {
                // Income
                incomeCategories[category] = (incomeCategories[category] || 0) + amount;
            } else {
                // Expense
                expenseCategories[category] = (expenseCategories[category] || 0) + Math.abs(amount);
            }
        });

        // Convert object to array for rendering
        const incomeArr = Object.keys(incomeCategories).map(category => ({
            name: category,
            value: incomeCategories[category]
        }));

        const expenseArr = Object.keys(expenseCategories).map(category => ({
            name: category,
            value: expenseCategories[category]
        }));

        setIncomeData(incomeArr);
        setExpenseData(expenseArr);
    }, []);

    return (
        <div className="charts-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {/* Income Doughnut Chart */}
            <div className="chart" style={{ flex: 1, maxWidth: '500px' }}>
                <h3>Income</h3>
                <ResponsiveContainer width={500} height={250}>
                    <PieChart>
                        <Pie
                            data={incomeData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            innerRadius={60}
                            fill="#8884d8"
                            label
                        >
                            {incomeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Expenses Doughnut Chart */}
            <div className="chart" style={{ flex: 1, maxWidth: '500px' }}>
                <h3>Expenses</h3>
                <ResponsiveContainer width={500} height={250}>
                    <PieChart>
                        <Pie
                            data={expenseData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            innerRadius={60}
                            fill="#FF8042"
                            label
                        >
                            {expenseData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default DoughnutCharts;

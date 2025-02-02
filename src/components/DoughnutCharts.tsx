import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// Import the JSON data
import data from '../dummy_assets/budget.json'; // Adjust the path based on where your data file is located

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export type CategoryColorMap = {
  [category: string]: string;
};

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  date: string;
  description: string;
}

interface DoughnutChartsProps {
  transactions: Transaction[];
}

const DoughnutCharts: React.FC<DoughnutChartsProps> = ({ transactions }) => {
    const [incomeData, setIncomeData] = useState<any[]>([]);
    const [expenseData, setExpenseData] = useState<any[]>([]);
    const [categoryColorMap, setCategoryColorMap] = useState<CategoryColorMap>({});

    useEffect(() => {
        // Process transactions into income and expenses
        let incomeCategories: any = {};
        let expenseCategories: any = {};
        let newCategoryColorMap: CategoryColorMap = {};
        let colorIndex = 0;

        transactions.forEach(transaction => {
            const amount = transaction.amount;
            const category = transaction.category;
            const type = transaction.type;

            // Assign color if category doesn't have one yet
            if (!newCategoryColorMap[category]) {
                newCategoryColorMap[category] = COLORS[colorIndex % COLORS.length];
                colorIndex++;
            }

            if (type === "income" && amount > 0) {
                incomeCategories[category] = (incomeCategories[category] || 0) + amount;
            } else if (type === "expense" && amount > 0) {
                expenseCategories[category] = (expenseCategories[category] || 0) + amount;
            }
        });

        // Update the category color map
        setCategoryColorMap(newCategoryColorMap);

        // Convert object to array for rendering
        const incomeArr = Object.keys(incomeCategories).map(category => ({
            name: category,
            value: incomeCategories[category],
            color: newCategoryColorMap[category]
        }));

        const expenseArr = Object.keys(expenseCategories).map(category => ({
            name: category,
            value: expenseCategories[category],
            color: newCategoryColorMap[category]
        }));

        setIncomeData(incomeArr);
        setExpenseData(expenseArr);
    }, [transactions]); // Update when transactions change

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
                            {incomeData.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={entry.color} />
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
                            {expenseData.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export { DoughnutCharts, COLORS };

import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import myData from '../dummy_assets/user1.json';


const calculateMortgageSchedule = (
    principal: number,
    annualInterestRate: number,
    loanTermYears: number,
    startYear: number
  ): { month: string; year: number; totalDebt: number; principal: number; interest: number }[] => {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfPayments = loanTermYears * 12;
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let remainingPrincipal = principal;
    let schedule = [];
    
    for (let i = 0; i < numberOfPayments; i++) {
      const interestPaid = remainingPrincipal * monthlyInterestRate;
      const principalPaid = monthlyPayment - interestPaid;
      remainingPrincipal -= principalPaid;
      
      schedule.push({
        month: months[i % 12],
        year: startYear + Math.floor(i / 12),
        totalDebt: Math.max(remainingPrincipal, 0),
        principal: principalPaid,
        interest: interestPaid,
        totalPaid: interestPaid+principalPaid
      });
    }
    
    return schedule;
};

const data = calculateMortgageSchedule(myData.loan.home.principal,5,myData.loan.home.year,2025)
  

const DebtChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
  <AreaChart data={data}>
    <defs>
      <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#ff7300" stopOpacity={0.8} />
        <stop offset="95%" stopColor="#ff7300" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#000000" stopOpacity={0.5} />
        <stop offset="95%" stopColor="#000000" stopOpacity={0} />
      </linearGradient>
    </defs>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <CartesianGrid strokeDasharray="3 3" />
    <Area type="monotone" dataKey="principal" stackId="1" stroke="#82ca9d" fill="url(#colorPrincipal)" />
    <Area type="monotone" dataKey="interest" stackId="1" stroke="#ff7300" fill="url(#colorInterest)" />
  </AreaChart>
    </ResponsiveContainer>

  );
};

export default DebtChart;

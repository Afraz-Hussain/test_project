import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpenseForm from '../components/expenseform/ExpenseForm';
import ExpenseList from '../components/expenselist/ExpenseList';
import ExpenseSummary from '../components/summary/ExpenseSummary';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExpenseForm />} />
          <Route path="/list" element={<ExpenseList />} />
          <Route path="/data" element={<ExpenseSummary />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter

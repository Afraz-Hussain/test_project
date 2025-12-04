import React, { Suspense,lazy } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const ExpenseForm=lazy(()=>import ("../components/expenseform/ExpenseForm"))
const ExpenseList=lazy(()=>import ("../components/expenselist/ExpenseList"))
const ExpenseSummary=lazy(()=>import ("../components/summary/ExpenseSummary"))


const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<h2>LOADING </h2>}>
        <Routes>
          <Route path="/" element={<ExpenseForm />} />
          <Route path="/list" element={<ExpenseList />} />
          <Route path="/data" element={<ExpenseSummary />} />
         
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter

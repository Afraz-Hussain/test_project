import React, { Suspense,lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addform from '../components/form/Addform';
import Table from '../components/table/Table';
import Chart from '../components/chart/Chart';



const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <Suspense fallback={<h2>LOADING </h2>}>
        <Routes>
          <Route path="/" element={<Addform />} />
          <Route path="/viewtable" element={<Table />} />
          <Route path="/viewchart" element={<Chart />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter

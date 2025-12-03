import React from 'react'
import AppRouter from './router/AppRouter'
import { SummaryContextProvider } from './context/SummaryContext'


const App = () => {
  return (
    <div>
    <SummaryContextProvider>
    <AppRouter/>
    </SummaryContextProvider>
  
    </div>
  )
}

export default App

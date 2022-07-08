import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//router
import { BrowserRouter } from 'react-router-dom';

import {TransactionsProvider} from './context/TransactionContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <TransactionsProvider>
    <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </TransactionsProvider>
)

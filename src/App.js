import React from 'react';
import Income from './income.js'
import './App.css';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider>
      <Income/>
      </TransactionProvider>
  );
}

export default App;

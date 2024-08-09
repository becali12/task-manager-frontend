import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TasksPage from './pages/TasksPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/login' element={<LogInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/tasks' element={<TasksPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

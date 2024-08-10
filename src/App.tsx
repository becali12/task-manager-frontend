import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TasksPage from './pages/TasksPage';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import WelcomePage from './pages/WelcomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Header />
        <div className='app-content'>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/login' element={<LogInPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/tasks' element={<TasksPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

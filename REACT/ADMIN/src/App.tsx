import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AdminLayout from './components/layout/AdminLayout';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginWrapper />}  />
          <Route path='/logout' element={<LoginWrapper />}  />
          <Route element={<AdminLayout />}>
            <Route path='/dashboard' element={<DashboardPage />}  />
            <Route path='/settings/profile' element={<LoginWrapper />}  />
            <Route path='/settings/security' element={<LoginWrapper />}  />
          </Route>
        </Routes>
        
        </BrowserRouter></>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    // </div>
  );
}

export default App;


const LoginWrapper: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    console.log(`Login successful with username: ${username} and password: ${password}`);
    navigate('/dashboard');
  };

  return <LoginPage onLogin={handleLogin} />;
};
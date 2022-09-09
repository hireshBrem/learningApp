import './App.css';

//Pages
import SignupPage from './components/SignUpPage';
import ErrorPage from './components/ErrorPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

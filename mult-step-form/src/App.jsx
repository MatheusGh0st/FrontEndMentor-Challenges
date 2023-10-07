import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PersonalInfo from './components/PersonalInfo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PersonalInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
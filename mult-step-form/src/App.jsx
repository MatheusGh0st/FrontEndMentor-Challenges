import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from "./components/SelectPlan";
import PickAddOns from './components/PickAddOns';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<SelectPlan/>} /> */}
          {/* <Route index element={<PersonalInfo />} /> */}
          <Route index element={<PickAddOns />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
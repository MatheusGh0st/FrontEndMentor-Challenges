import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from "./components/SelectPlan";
import PickAddOns from './components/PickAddOns';
import FinishUp from './components/FinishUp';
import ThankYou from "./components/ThankYou";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/form" element={<PersonalInfo />} />
          <Route path="/select" element={<SelectPlan/>} />
          <Route path="/pick" element={<PickAddOns />} />
          <Route path="/finish" element={<FinishUp />} />
          <Route path="/thank" index element={<ThankYou/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
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
        <Route path='/' element={<Layout />}>
          <Route index element={<ThankYou/>} />
          {/* <Route index element={<PersonalInfo />} /> */}
          {/* <Route index element={<SelectPlan/>} /> */}
          {/* <Route index element={<PickAddOns />} /> */}
          {/* <Route index element={<FinishUp />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
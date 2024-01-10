import { useState } from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from './components/Header';

function App() {
  const [themeLight, setThemeLight] = useState(true);

  const themeClass = themeLight ? "light" : "dark";

  return (
    <div className={`wrapper ${themeClass}`}>
      <div className='container'>
        <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        <Todos />
      </div>
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import Todos from "./components/Todos";
import Header from './components/Header';

function App() {
  const [themeLight, setThemeLight] = useState(true);

  const themeClass = themeLight ? "light" : "dark";

  return (
    <div className={`App ${themeClass}`}>
      <Header themeLight={themeLight} setThemeLight={setThemeLight} />
      <Todos />
    </div>
  );
}

export default App;
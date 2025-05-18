import { useState } from 'react';
import Toggle from './shared/ui/Toggle/Toggle';
import HomePage from './pages/ui/HomePage/HomePage';

// TODO: add routing? and Layout components?
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <HomePage />
      <Toggle checked={darkMode} onChange={setDarkMode} label="Dark Mode" />
    </div>
  );
}

export default App;

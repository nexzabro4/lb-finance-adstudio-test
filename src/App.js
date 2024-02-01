import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Car from './components/car';
import Weel from './components/weel';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lb/car" element={<Car />} />
        <Route path="/lb/weel" element={<Weel />} />
      </Routes>
    </Router>
  );
};

export default App;

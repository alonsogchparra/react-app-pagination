import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomPagination } from './components/customPagination/CustomPagination';
import { Dashboard } from './components/Dashboard';
import { MuiPagination } from './components/muiPagination/MuiPagination';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/custom-pagination' element={<CustomPagination />} />
        <Route path='/mui-pagination' element={<MuiPagination />} />
      </Routes>
    </Router>
  );
}

export default App;

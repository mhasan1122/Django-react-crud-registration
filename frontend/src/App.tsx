import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import DetailPage from './pages/DetailPage';
import UpdatePage from './pages/UpdatePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="/update/:id" element={<UpdatePage />} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default App;
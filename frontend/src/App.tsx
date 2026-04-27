import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <BrowserRouter>

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
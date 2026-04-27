import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './components/layout/MainLayout';
import UploadVideo from './pages/UploadVideo';

function App() {
  return (
    <BrowserRouter>

      <Routes>

          <Route path="/upload" element={<UploadVideo />} />

          <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
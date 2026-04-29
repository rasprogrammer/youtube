import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './components/layout/MainLayout';
import UploadVideo from './pages/UploadVideo';
import WatchPageLayout from './components/layout/WatchPageLayout';
import WatchPage from './pages/WatchPage';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="/upload" element={<UploadVideo />} />

          <Route element={<WatchPageLayout />}>
            <Route path="/watch/:slug" element={<WatchPage />} />
          </Route>

          <Route element={<MainLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
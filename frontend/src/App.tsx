import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UploadVideo from './pages/UploadVideo';
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

          <Route path="/watch/:slug" element={<WatchPage />} />

          {/* Main Layout */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* Fallback for 404 */}
          
      </Routes>
    </BrowserRouter>
  );
}

export default App;
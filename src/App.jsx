import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import List from './components/List';
import Surah from './components/surah';






export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/chapters" />} />
        <Route path='/chapters' element={<List />} />
        <Route path='/chapters/:id' element={<Surah />} />
      </Routes>
    </BrowserRouter>

  );
}


import './App.css';
import { Routes, Route,BrowserRouter  } from 'react-router-dom';

import Home from './page/Home/Home';
import NotFound from './page/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} >
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


export default App;

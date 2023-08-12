import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Currencies from './pages/Currencies';
import Exchanges from './pages/Exchanges';
import Exchange from './components/Exchange';
import Portfolio from './pages/Portfolio';
import Documentation from './components/Documenation';
import Sources from './components/Sources';
import NotFound from './components/NotFound'

function App() {
  return (
    /*
      Note that my project is using react-router-dom": "^6.14.2",
      which replaced Switch with Routes in v6.
    */
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact path="/"
          element={<Home />}
        />
        <Route
          path="/currencies/:id"
          element={<Currencies />}
        />
        <Route
          path="/exchanges"
          element={<Exchanges />}
        />
        <Route
          path="/exchanges/:id"
          element={<Exchange />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/documentation"
          element={<Documentation />}
        />
        <Route
          path="/sources"
          element={<Sources />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;

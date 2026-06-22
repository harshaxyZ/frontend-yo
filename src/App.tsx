import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Chat from './screens/Chat';
import TopNav from './components/TopNav';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/chat/:scenarioId" element={<Chat />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--color-background)] w-full flex flex-col font-sans overflow-x-hidden">
        <TopNav />
        <main className="flex-grow flex flex-col relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-12">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;

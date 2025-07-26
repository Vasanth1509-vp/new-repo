import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Implementations from './pages/Implementations';
import Certifications from './pages/Certifications';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import ChatbotWidget from './components/ChatbotWidget';
import './styles/App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <CustomCursor />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/implementations" element={<Implementations />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App;

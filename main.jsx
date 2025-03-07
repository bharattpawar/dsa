import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import SearchingVisualizer from "./components/SearchingVisualizer/SearchingVisualizer";
import GraphVisualizer from "./components/GraphVisualizer/GraphVisualizer";
import DynamicProgrammingVisualizer from './components/DynamicProgrammingVisualizer/DynamicProgrammingVisualizer';
import GreedyAlgorithmsVisualizer from './components/GreedyAlgorithmsVisualizer/GreedyAlgorithmsVisualizer';
import BacktrackingVisualizer from './components/BacktrackingVisualizer/BacktrackingVisualizer';
import TreeAlgorithmVisualizer from './components/TreeAlgorithmVisualizer/TreeAlgorithmVisualizer';
import MathematicalAlgorithmsVisualizer from "./components/MathematicalAlgorithmsVisualizer/styles/MathematicalAlgorithmsVisualizer";
import LearnDSA from "./components/LearnDSA/LearnDSA"; // Import LearnDSA Component
import Quiz from "./components/Quiz/Quiz"; // Import Quiz Component
import QuizQuestions from "./components/Quiz/QuizQuestions"; // Import QuizQuestions Component
import DebuggingChallenge from "./components/DebuggingChallenge/DebuggingChallenge"; // Import DebuggingChallenge Component
import ContactUs from "./components/ContactUs/ContactUs";

import "./style.css"; // Ensure you have your global styles here
// Home Component
const Home = () => {
    return (
      <div className="dsa-hero">
        <div className="dsa-hero-content">
          <h1>Data Structures and Algorithms Visualizer</h1>
          <p>Explore various algorithms and data structures with interactive visualizations.</p>
          <div className="dsa-hero-buttons">
            <Link to="/sorting" className="dsa-hero-button">Get Started</Link>
            <Link to="/learn-dsa" className="dsa-hero-button">Learn DSA</Link>
            <Link to="/quiz" className="dsa-hero-button">Take a Quiz</Link>
            <Link to="/debugging-challenge" className="dsa-hero-button">Debugging Challenge</Link>
            <Link to="/contact-us" className="dsa-hero-button">Contact Us</Link>
          </div>
        </div>
      </div>
    );
  };
  
  // Navbar Component
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisualizeHovered, setIsVisualizeHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleVisualizeHover = (hoverState) => {
      setIsVisualizeHovered(hoverState);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return (
      <nav className="dsa-navbar">
        <div className="dsa-navbar-container">
          <Link className="dsa-navbar-brand" to="/">DSA Visualizer</Link>
          <button
            className={`dsa-navbar-toggle ${isOpen ? "dsa-active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="dsa-hamburger"></span>
          </button>
          <div className={`dsa-navbar-links ${isOpen ? "dsa-active" : ""}`}>
            {isMobile ? (
              <>
                <Link className="dsa-nav-link" to="/" onClick={toggleMenu}>Home</Link>
                <Link className="dsa-nav-link" to="/sorting" onClick={toggleMenu}>Sorting Algorithms</Link>
                <Link className="dsa-nav-link" to="/searching" onClick={toggleMenu}>Searching Algorithms</Link>
                <Link className="dsa-nav-link" to="/graph" onClick={toggleMenu}>Graph Algorithms</Link>
                <Link className="dsa-nav-link" to="/dp" onClick={toggleMenu}>Dynamic Programming</Link>
                <Link className="dsa-nav-link" to="/greedy" onClick={toggleMenu}>Greedy Algorithms</Link>
                <Link className="dsa-nav-link" to="/backtracking" onClick={toggleMenu}>Backtracking</Link>
                <Link className="dsa-nav-link" to="/tree" onClick={toggleMenu}>Tree Algorithms</Link>
                <Link className="dsa-nav-link" to="/math" onClick={toggleMenu}>Mathematical Algorithms</Link>
                <Link className="dsa-nav-link" to="/learn-dsa" onClick={toggleMenu}>Learn DSA</Link>
                <Link className="dsa-nav-link" to="/quiz" onClick={toggleMenu}>Quiz</Link>
                <Link className="dsa-nav-link" to="/debugging-challenge" onClick={toggleMenu}>Debugging Challenge</Link>
                <Link className="dsa-nav-link" to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
              </>
            ) : (
              <div
                className="dsa-visualize-container"
                onMouseEnter={() => handleVisualizeHover(true)}
                onMouseLeave={() => handleVisualizeHover(false)}
              >
                <span className="dsa-nav-link" id="dsa-visualize">
                  Visualize <span style={{ fontSize: "0.9em" }}>▼</span>
                </span>
                <div className={`dsa-visualize-dropdown ${isVisualizeHovered ? "dsa-active" : ""}`}>
                  <Link className="dsa-nav-link" to="/" onClick={toggleMenu}>Home</Link>
                  <Link className="dsa-nav-link" to="/sorting" onClick={toggleMenu}>Sorting Algorithms</Link>
                  <Link className="dsa-nav-link" to="/searching" onClick={toggleMenu}>Searching Algorithms</Link>
                  <Link className="dsa-nav-link" to="/graph" onClick={toggleMenu}>Graph Algorithms</Link>
                  <Link className="dsa-nav-link" to="/dp" onClick={toggleMenu}>Dynamic Programming</Link>
                  <Link className="dsa-nav-link" to="/greedy" onClick={toggleMenu}>Greedy Algorithms</Link>
                  <Link className="dsa-nav-link" to="/backtracking" onClick={toggleMenu}>Backtracking</Link>
                  <Link className="dsa-nav-link" to="/tree" onClick={toggleMenu}>Tree Algorithms</Link>
                  <Link className="dsa-nav-link" to="/math" onClick={toggleMenu}>Mathematical Algorithms</Link>
                  <Link className="dsa-nav-link" to="/learn-dsa" onClick={toggleMenu}>Learn DSA</Link>
                  <Link className="dsa-nav-link" to="/quiz" onClick={toggleMenu}>Quiz</Link>
                  <Link className="dsa-nav-link" to="/debugging-challenge" onClick={toggleMenu}>Debugging Challenge</Link>
                  <Link className="dsa-nav-link" to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  };
  
  // Footer Component
  const Footer = () => {
    return (
      <footer className="dsa-footer">
        <div className="dsa-footer-content">
          <div className="dsa-footer-links">
            <Link to="/">Home</Link>
            <Link to="/sorting">Sorting</Link>
            <Link to="/searching">Searching</Link>
            <Link to="/graph">Graph</Link>
            <Link to="/dp">Dynamic Programming</Link>
            <Link to="/greedy">Greedy</Link>
            <Link to="/backtracking">Backtracking</Link>
            <Link to="/tree">Tree</Link>
            <Link to="/math">Mathematical</Link>
            <Link to="/learn-dsa">Learn DSA</Link>
            <Link to="/quiz">Quiz</Link>
            <Link to="/debugging-challenge">Debugging Challenge</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <p>&copy; 2025 DSA Visualizer. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  // App Component
  const App = () => {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          <Route path="/searching" element={<SearchingVisualizer />} />
          <Route path="/graph" element={<GraphVisualizer />} />
          <Route path="/dp" element={<DynamicProgrammingVisualizer />} />
          <Route path="/greedy" element={<GreedyAlgorithmsVisualizer />} />
          <Route path="/backtracking" element={<BacktrackingVisualizer />} />
          <Route path="/tree" element={<TreeAlgorithmVisualizer />} />
          <Route path="/math" element={<MathematicalAlgorithmsVisualizer />} />
          <Route path="/learn-dsa" element={<LearnDSA />} /> {/* Learn DSA Route */}
          <Route path="/quiz" element={<Quiz />} /> {/* Quiz Route */}
          <Route path="/quiz/:topic" element={<QuizQuestions />} /> {/* Quiz Questions Route */}
          <Route path="/debugging-challenge" element={<DebuggingChallenge />} /> {/* Debugging Challenge Route */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us Route */}
        </Routes>
        <Footer />
      </Router>
    );
  };
  
  // Render the App
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
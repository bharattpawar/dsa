import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Corrected import
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import SearchingVisualizer from "./components/SearchingVisualizer/SearchingVisualizer";
import GraphVisualizer from "./components/GraphVisualizer/GraphVisualizer";
import DynamicProgrammingVisualizer from './components/DynamicProgrammingVisualizer/DynamicProgrammingVisualizer';
import GreedyAlgorithmsVisualizer from './components/GreedyAlgorithmsVisualizer/GreedyAlgorithmsVisualizer';
import BacktrackingVisualizer from './components/BacktrackingVisualizer/BacktrackingVisualizer';
import TreeAlgorithmVisualizer from './components/TreeAlgorithmVisualizer/TreeAlgorithmVisualizer';
import MathematicalAlgorithmsVisualizer from "./components/MathematicalAlgorithmsVisualizer/styles/MathematicalAlgorithmsVisualizer";

const Home = () => {
    return (
        <div className="dsa-hero">
            <div className="dsa-hero-content">
                <h1>Data Structures and Algorithms Visualizer</h1>
                <p>Explore various algorithms and data structures with interactive visualizations.</p>
                <Link to="/sorting" className="dsa-hero-button">Get Started</Link>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisualizeHovered, setIsVisualizeHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track mobile view

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleVisualizeHover = (hoverState) => {
        setIsVisualizeHovered(hoverState);
    };

    // Handle window resize to update isMobile state
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
                        // Render direct links in mobile view
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
                        </>
                    ) : (
                        // Render "Visualize" dropdown in desktop view
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
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

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
                 </div>
                 <p>&copy; 2025 DSA Visualizer. All rights reserved.</p>

            </div>
        </footer>
    );
};

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
            </Routes>
            <Footer />
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
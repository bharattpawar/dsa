import React from 'react';
import ActivitySelection from './ActivitySelection';
import HuffmanCoding from './HuffmanCoding';
 import GreedyAlgorithmsVisualization from './GreedyAlgorithmsVisualization';
import './styles/GreedyAlgorithms.css';

const GreedyAlgorithmsVisualizer = () => {
    return (
        <div className="greedy-algorithms">
            <h2>Greedy Algorithms</h2>
            <ActivitySelection />
            <HuffmanCoding />
             <GreedyAlgorithmsVisualization />
        </div>
    );
};

export default GreedyAlgorithmsVisualizer;
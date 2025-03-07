import React, { useState, useRef } from 'react';
import { linearSearch, binarySearch } from './SearchingAlgorithm';
import './styles1.css';

const RaceMode = () => {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState('');
  const [searching, setSearching] = useState(false);
  const [algorithms, setAlgorithms] = useState([
    { name: 'Linear Search', progress: 0, steps: [], explanations: [], found: false },
    { name: 'Binary Search', progress: 0, steps: [], explanations: [], found: false },
  ]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [manualArrayInput, setManualArrayInput] = useState('');
  const intervalRef = useRef(null);

  // Generate a random array (unsorted)
  const generateRandomArray = () => {
    const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
    setArray(randomArray); // Do not sort the array
    setAlgorithms((prev) =>
      prev.map((algo) => ({
        ...algo,
        progress: 0,
        steps: [],
        explanations: [],
        found: false,
      }))
    );
    setLeaderboard([]);
  };

  // Handle manual array input (unsorted)
  const handleManualArrayInput = () => {
    const manualArray = manualArrayInput
      .split(',')
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));
    setArray(manualArray); // Do not sort the array
    setAlgorithms((prev) =>
      prev.map((algo) => ({
        ...algo,
        progress: 0,
        steps: [],
        explanations: [],
        found: false,
      }))
    );
    setLeaderboard([]);
  };

  // Handle race start
  const startRace = () => {
    if (!target || array.length === 0) return;
    setSearching(true);
    setLeaderboard([]);

    const algorithmFunctions = {
      'Linear Search': linearSearch,
      'Binary Search': binarySearch,
    };

    const results = algorithms.map((algo) => {
      const { steps, explanations, found, error } = algorithmFunctions[algo.name](array, parseInt(target));
      return { ...algo, steps, explanations, found, error };
    });

    let stepIndex = 0;
    intervalRef.current = setInterval(() => {
      if (stepIndex < Math.max(...results.map((algo) => algo.steps.length))) {
        setAlgorithms((prev) =>
          prev.map((algo, index) => ({
            ...algo,
            progress: (stepIndex / results[index].steps.length) * 100,
            currentIndex: results[index].steps[stepIndex] || -1,
            explanations: results[index].explanations.slice(0, stepIndex + 1),
          }))
        );
        stepIndex++;
      } else {
        clearInterval(intervalRef.current);
        setSearching(false);
        setLeaderboard(
          results.map((algo) => ({
            name: algo.name,
            time: algo.steps.length,
            found: algo.found,
            error: algo.error,
          }))
        );
      }
    }, 100);
  };

  // Handle race stop
  const stopRace = () => {
    clearInterval(intervalRef.current);
    setSearching(false);
  };

  // Handle race restart
  const restartRace = () => {
    setAlgorithms((prev) =>
      prev.map((algo) => ({
        ...algo,
        progress: 0,
        steps: [],
        explanations: [],
        found: false,
      }))
    );
    setLeaderboard([]);
  };

  return (
    <div className="dsa-race-mode">
      <h2>Race Mode</h2>
      <div className="dsa-controls">
        <button onClick={generateRandomArray}>Generate Random Array</button>
        <div className="dsa-manual-array-input">
          <input
            type="text"
            placeholder="Enter array manually (e.g., 1, 4, 2, 3)"
            value={manualArrayInput}
            onChange={(e) => setManualArrayInput(e.target.value)}
          />
          <button onClick={handleManualArrayInput}>Set Array</button>
        </div>
        <input
          type="text"
          placeholder="Enter target number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <button onClick={startRace} disabled={searching}>
          Start Race
        </button>
        <button onClick={stopRace} disabled={!searching}>
          Stop Race
        </button>
        <button onClick={restartRace}>Restart Race</button>
      </div>
      <div className="dsa-array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className={`dsa-array-bar ${
              algorithms.some((algo) => algo.currentIndex === index) ? 'dsa-array-bar-active' : ''
            } ${
              algorithms.some((algo) => algo.found && algo.steps[algo.steps.length - 1] === index) ? 'dsa-array-bar-found' : ''
            }`}
            style={{ height: `${value}px` }}
            data-value={value}
          ></div>
        ))}
      </div>
      <div className="dsa-race-progress">
        {algorithms.map((algo, index) => (
          <div key={index} className="dsa-algorithm-progress">
            <h3>{algo.name}</h3>
            <div className="dsa-progress-bar">
              <div
                className="dsa-progress"
                style={{ width: `${algo.progress}%` }}
              ></div>
            </div>
            <div className="dsa-calculations">
              {algo.explanations.map((explanation, i) => (
                <p key={i}>{explanation}</p>
              ))}
              {algo.error && <p className="dsa-error">{algo.explanations[algo.explanations.length - 1]}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="dsa-leaderboard">
        <h3>Leaderboard</h3>
        {leaderboard.map((algo, index) => (
          <div key={index} className="dsa-leaderboard-entry">
            <span>{algo.name}</span>
            <span>
              {algo.error
                ? 'Error: Array not sorted'
                : algo.found
                ? `Found in ${algo.time} steps`
                : 'Not Found'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RaceMode;
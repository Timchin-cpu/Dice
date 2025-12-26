import { useState } from 'react';
import RouletteWheel from './RouletteWheel';
import BetControls from './BetControls';
import { createParticles } from '../utils/particles';

const RouletteGame = ({ balance, setBalance, timer }) => {
  const [betAmount, setBetAmount] = useState(0);
  const [selectedBets, setSelectedBets] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const rouletteNumbers = [
    { num: 1, color: 'green', multiplier: '2x' },
    { num: 2, color: 'purple', multiplier: '3x' },
    { num: 3, color: 'purple', multiplier: '2x' },
    { num: 4, color: 'purple', multiplier: '5x' },
    { num: 5, color: 'green', multiplier: '2x' },
    { num: 6, color: 'purple', multiplier: '3x' },
    { num: 7, color: 'purple', multiplier: '2x' },
    { num: 8, color: 'purple', multiplier: '2x' },
    { num: 9, color: 'green', multiplier: '2x' },
    { num: 10, color: 'purple', multiplier: '3x' },
    { num: 11, color: 'purple', multiplier: '2x' },
    { num: 12, color: 'purple', multiplier: '2x' }
  ];

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleBetSelect = (num) => {
    if (isSpinning) return;
    if (selectedBets.includes(num)) {
      setSelectedBets(selectedBets.filter(n => n !== num));
    } else {
      setSelectedBets([...selectedBets, num]);
    }
  };

  const spinRoulette = () => {
    if (betAmount === 0 || selectedBets.length === 0 || isSpinning) return;
    
    setIsSpinning(true);
    setResult(null);
    
    setTimeout(() => {
      const winningNumber = Math.floor(Math.random() * 12) + 1;
      setResult(winningNumber);
      setIsSpinning(false);
      
      if (selectedBets.includes(winningNumber)) {
        const winMultiplier = rouletteNumbers.find(n => n.num === winningNumber).multiplier;
        const multiplierValue = parseFloat(winMultiplier);
        const won = Math.floor(betAmount * multiplierValue);
        setBalance(balance + won);
        createParticles();
      } else {
        setBalance(balance - betAmount);
      }
      
      setTimeout(() => {
        setResult(null);
        setSelectedBets([]);
      }, 5000);
    }, 3000);
  };

  return (
    <div className="game-container">
      {/* Timer */}
      <div className="text-center mb-8">
        <div className="inline-block glass-strong rounded-3xl px-10 py-6 shadow-2xl">
          <div className="text-7xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 tracking-wider neon-text">
            {formatTimer(timer)}
          </div>
          <div className="text-sm text-gray-400 mt-2 uppercase tracking-widest">Next round in</div>
        </div>
      </div>

      {/* Roulette Wheel */}
      <RouletteWheel
        numbers={rouletteNumbers}
        selectedBets={selectedBets}
        result={result}
        isSpinning={isSpinning}
        onSelectNumber={handleBetSelect}
      />

      {/* Selected Numbers Display */}
      {selectedBets.length > 0 && (
        <div className="glass rounded-2xl p-4 mb-5">
          <div className="text-sm text-gray-400 mb-2">Selected Numbers:</div>
          <div className="flex flex-wrap gap-2">
            {selectedBets.map(num => (
              <span key={num} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold">
                {num}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bet Controls */}
      <BetControls
        balance={balance}
        betAmount={betAmount}
        setBetAmount={setBetAmount}
        onPlaceBet={spinRoulette}
        isSpinning={isSpinning}
        disabled={selectedBets.length === 0}
        buttonText={isSpinning ? '🎰 SPINNING...' : '🎯 PLACE A BET'}
      />
    </div>
  );
};

export default RouletteGame;

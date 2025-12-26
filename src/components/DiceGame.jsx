import { useState } from 'react';
import Dice from './Dice';
import BetControls from './BetControls';
import { createParticles } from '../utils/particles';

const DiceGame = ({ balance, setBalance }) => {
  const [betAmount, setBetAmount] = useState(0);
  const [diceValue, setDiceValue] = useState(3);
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState(null);
  const multipliers = [80.3, 13.4, 20.34, 12.5, 2.3];

  const rollDice = () => {
    if (betAmount === 0 || isRolling) return;
    
    setIsRolling(true);
    setResult(null);
    
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDiceValue(roll);
      setIsRolling(false);
      
      if (roll >= 4) {
        const won = Math.floor(betAmount * 3.43);
        setBalance(balance + won);
        setResult('win');
        createParticles();
        
        setTimeout(() => {
          setResult(null);
        }, 3000);
      } else {
        setBalance(balance - betAmount);
        setResult('lose');
        setTimeout(() => setResult(null), 2000);
      }
    }, 2000);
  };

  return (
    <div className="game-container">
      {/* Top Multipliers */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-3">
        {multipliers.map((mult, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-6 py-3 glass-strong rounded-2xl border-2 border-green-500/40 shadow-lg"
          >
            <div className="text-2xl font-black font-orbitron text-green-400">{mult}</div>
          </div>
        ))}
      </div>

      {/* Lucky Number Display */}
      <div className="text-center mb-8">
        <div className="inline-block glass-strong rounded-3xl p-12 shadow-2xl border-2 border-purple-500/30">
          <div className="text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-3 neon-text">
            {diceValue}.43x
          </div>
          <div className="text-base text-gray-400 uppercase tracking-widest">Lucky number</div>
        </div>
      </div>

      {/* Dice Visual */}
      <Dice value={diceValue} isRolling={isRolling} />

      {/* Win/Lose Indicator */}
      {result && !isRolling && (
        <div className={`text-center mb-5 animate-bounce ${result === 'win' ? 'text-green-400' : 'text-red-400'}`}>
          <div className="text-4xl font-black font-orbitron">
            {result === 'win' ? '🎊 YOU WIN!' : '😢 TRY AGAIN'}
          </div>
        </div>
      )}

      {/* Range Slider */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-gray-500 mb-3 font-semibold">
          <span>0</span>
          <span>10</span>
          <span>30</span>
          <span>50</span>
          <span>70</span>
          <span>90</span>
          <span>100</span>
        </div>
        <div className="relative h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full shadow-lg">
          <div className="absolute top-1/2 -translate-y-1/2 left-[12%] w-8 h-8 bg-white rounded-full shadow-2xl cursor-pointer border-4 border-purple-600 hover:scale-110 transition-transform"></div>
        </div>
        <div className="text-center mt-3 text-sm text-gray-400 uppercase tracking-wider">Profit on wins</div>
      </div>

      {/* Bet Controls - Extended for Dice */}
      <div className="glass-strong rounded-3xl p-6 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <span className="text-base text-gray-300 font-semibold">Bet amount</span>
          <button className="text-sm px-4 py-2 bg-purple-600/30 rounded-full hover:bg-purple-600/50 transition-colors">
            Auto
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-3 mb-5">
          {['1/2', '1/3', '1/4'].map(frac => (
            <button
              key={frac}
              onClick={() => setBetAmount(Math.floor(balance * parseFloat(frac.split('/')[0]) / parseFloat(frac.split('/')[1])))}
              className="py-3 glass hover:glass-strong rounded-xl text-base font-bold transition-all hover:scale-105 active:scale-95"
              disabled={isRolling}
            >
              {frac}
            </button>
          ))}
          <button
            onClick={() => setBetAmount(balance)}
            className="py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50"
            disabled={isRolling}
          >
            Full
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="relative">
            <input
              type="number"
              value={betAmount}
              onChange={(e) => setBetAmount(Math.max(0, parseFloat(e.target.value) || 0))}
              placeholder="Enter amount"
              className="w-full bg-purple-900/30 border-2 border-purple-500/40 rounded-2xl px-4 py-4 text-base font-bold focus:outline-none focus:border-purple-500 text-white placeholder-gray-500"
              disabled={isRolling}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-semibold">USDT</span>
          </div>
          <div className="glass rounded-2xl px-4 py-4 flex flex-col items-center justify-center">
            <span className="text-xs text-gray-400 mb-1">Cashout at:</span>
            <span className="text-base font-bold text-green-400">3.43x</span>
          </div>
        </div>

        <button
          onClick={rollDice}
          disabled={isRolling || betAmount === 0}
          className="w-full py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl btn-ripple font-orbitron"
        >
          {isRolling ? '🎲 ROLLING...' : '🎲 PLACE A BET'}
        </button>
      </div>
    </div>
  );
};

export default DiceGame;

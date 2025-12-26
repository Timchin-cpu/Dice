import { Flame } from 'lucide-react';

const RouletteWheel = ({ numbers, selectedBets, result, isSpinning, onSelectNumber }) => {
  return (
    <div className="relative mb-10">
      <div className={`roulette-wheel ${isSpinning ? 'spinning' : ''}`}>
        {numbers.map((item, index) => (
          <button
            key={item.num}
            onClick={() => onSelectNumber(item.num)}
            className={`roulette-number ${item.color} ${
              selectedBets.includes(item.num) ? 'selected' : ''
            } ${result === item.num ? 'winner' : ''}`}
            style={{
              transform: `rotate(${index * 30}deg) translateY(-110px)`,
            }}
            disabled={isSpinning}
          >
            <div style={{ transform: `rotate(${-index * 30}deg)` }}>
              <div className="text-2xl font-black font-orbitron">{item.multiplier}</div>
              <div className="text-sm opacity-80 font-semibold">{item.num}</div>
            </div>
          </button>
        ))}
        <div className="roulette-center">
          <Flame className="w-8 h-8 text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default RouletteWheel;

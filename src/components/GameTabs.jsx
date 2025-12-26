const GameTabs = ({ activeGame, setActiveGame }) => {
  return (
    <div className="flex gap-3 mb-5">
      <button
        onClick={() => setActiveGame('roulette')}
        className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-all transform ${
          activeGame === 'roulette'
            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-xl scale-105'
            : 'glass hover:glass-strong'
        }`}
      >
        🎡 Roulette
      </button>
      <button
        onClick={() => setActiveGame('dice')}
        className={`flex-1 py-4 rounded-2xl font-bold text-lg transition-all transform ${
          activeGame === 'dice'
            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-xl scale-105'
            : 'glass hover:glass-strong'
        }`}
      >
        🎲 Dice
      </button>
    </div>
  );
};

export default GameTabs;

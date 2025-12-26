const BetControls = ({ balance, betAmount, setBetAmount, onPlaceBet, isSpinning, disabled = false, buttonText = 'PLACE A BET' }) => {
  return (
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
            disabled={isSpinning}
          >
            {frac}
          </button>
        ))}
        <button
          onClick={() => setBetAmount(balance)}
          className="py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-base font-bold hover:scale-105 active:scale-95 transition-all shadow-lg disabled:opacity-50"
          disabled={isSpinning}
        >
          Full
        </button>
      </div>

      <div className="relative mb-5">
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(Math.max(0, parseFloat(e.target.value) || 0))}
          placeholder="Enter amount"
          className="w-full bg-purple-900/30 border-2 border-purple-500/40 rounded-2xl px-6 py-5 text-xl font-bold focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
          disabled={isSpinning}
        />
        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-base text-gray-400 font-semibold">USDT</span>
      </div>

      <button
        onClick={onPlaceBet}
        disabled={isSpinning || betAmount === 0 || disabled}
        className="w-full py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 rounded-2xl font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl btn-ripple font-orbitron"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BetControls;

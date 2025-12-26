const BalanceCard = ({ balance }) => {
  return (
    <div className="glass-strong rounded-3xl p-8 mb-5 shadow-2xl transform hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500/20 rounded-2xl flex items-center justify-center border-2 border-green-500/40">
            <span className="text-green-400 text-2xl font-black">₮</span>
          </div>
          <span className="text-gray-400 text-base font-semibold">USDT</span>
        </div>
        <span className="text-xs text-gray-500 uppercase tracking-wider">Balance</span>
      </div>
      <div className="text-5xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 mb-2">
        {balance.toLocaleString()}
      </div>
      <div className="text-sm text-gray-400">USDT</div>
    </div>
  );
};

export default BalanceCard;

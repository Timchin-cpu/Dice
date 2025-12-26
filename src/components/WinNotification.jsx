const WinNotification = ({ show, amount }) => {
  if (!show) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 animate-bounce">
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-black px-12 py-8 rounded-3xl shadow-2xl border-4 border-yellow-300">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <div className="text-3xl font-black font-orbitron mb-2">YOU WIN!</div>
          <div className="text-5xl font-black font-orbitron text-white">+{amount} USDT</div>
        </div>
      </div>
    </div>
  );
};

export default WinNotification;

import { Zap } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-10 flex justify-between items-center p-5 glass-strong">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse-glow">
          <Zap className="w-6 h-6" />
        </div>
        <span className="text-3xl font-black font-orbitron neon-text">AnonBet</span>
      </div>
      <button className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg btn-ripple">
        Sign up
      </button>
    </header>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import GameTabs from './components/GameTabs';
import RouletteGame from './components/RouletteGame';
import DiceGame from './components/DiceGame';
import WinNotification from './components/WinNotification';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [activeGame, setActiveGame] = useState('roulette');
  const [balance, setBalance] = useState(10329);
  const [timer, setTimer] = useState(44);
  const [showWin, setShowWin] = useState(false);
  const [winAmount, setWinAmount] = useState(0);

  const { tg, user, hapticFeedback } = useTelegram();

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 59));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Watch balance changes to trigger win notification
  useEffect(() => {
    const prevBalance = localStorage.getItem('prevBalance');
    if (prevBalance && balance > parseFloat(prevBalance)) {
      const diff = balance - parseFloat(prevBalance);
      setWinAmount(Math.floor(diff));
      setShowWin(true);
      hapticFeedback('heavy');
      setTimeout(() => setShowWin(false), 3000);
    }
    localStorage.setItem('prevBalance', balance.toString());
  }, [balance, hapticFeedback]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1e0b3d] to-[#0f0520] text-white relative overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects />

      {/* Win Notification */}
      <WinNotification show={showWin} amount={winAmount} />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 p-5 max-w-lg mx-auto pb-24">
        {/* Balance Card */}
        <BalanceCard balance={balance} />

        {/* Game Tabs */}
        <GameTabs activeGame={activeGame} setActiveGame={setActiveGame} />

        {/* Games */}
        {activeGame === 'roulette' ? (
          <RouletteGame 
            balance={balance} 
            setBalance={setBalance} 
            timer={timer}
          />
        ) : (
          <DiceGame 
            balance={balance} 
            setBalance={setBalance}
          />
        )}
      </div>

      {/* Decorative Floating Element */}
      <div className="fixed top-24 right-6 animate-float z-0 hidden md:block">
        <div className="relative">
          <div className="w-32 h-40 glass-strong rounded-3xl border-3 border-pink-500 transform rotate-12 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">💀</div>
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-xl border-4 border-yellow-400"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';

export const useTelegram = () => {
  const [tg, setTg] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp;
      setTg(telegram);
      
      // Initialize Telegram WebApp
      telegram.ready();
      telegram.expand();
      telegram.setHeaderColor('#0a0118');
      telegram.setBackgroundColor('#0a0118');
      
      // Get user data
      if (telegram.initDataUnsafe?.user) {
        setUser(telegram.initDataUnsafe.user);
      }
    }
  }, []);

  const showAlert = (message) => {
    if (tg) {
      tg.showAlert(message);
    } else {
      alert(message);
    }
  };

  const showConfirm = (message) => {
    if (tg) {
      return tg.showConfirm(message);
    } else {
      return window.confirm(message);
    }
  };

  const hapticFeedback = (type = 'medium') => {
    if (tg?.HapticFeedback) {
      tg.HapticFeedback.impactOccurred(type);
    }
  };

  return {
    tg,
    user,
    showAlert,
    showConfirm,
    hapticFeedback,
  };
};

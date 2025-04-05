// useDisableScroll.js
import { useEffect } from 'react';

export const useDisableScroll = (isOpen) => {
  useEffect(() => {
    if (isOpen) {
      // Guarda la posición actual y bloquea el scroll
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restaura el scroll al desmontar
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      };
    }
  }, [isOpen]);
};
'use client';

import { Moon, Sun } from '@phosphor-icons/react';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export function ToggleTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    if (systemTheme && !theme) {
      setTheme(systemTheme);
    }
  }, [systemTheme]);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="w-fit absolute top-5 right-5">
      <button
        onClick={handleToggleTheme}
        className="border rounded-lg p-2 border-primary dark:border-secondary"
        aria-label="change theme"
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

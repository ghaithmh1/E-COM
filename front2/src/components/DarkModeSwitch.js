import React, { useEffect, useState } from 'react';


const DarkModeSwitch = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(localStorage.getItem('bsTheme') || (prefersDarkScheme ? 'dark' : 'light'));

  // Toggle dark/light mode
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('bsTheme', theme);
  }, [theme]);

  // Tooltip initialization on mount
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const handleSwitchChange = (event) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        id="darkModeSwitch"
        checked={theme === 'dark'}
        onChange={handleSwitchChange}
        aria-label="Switch between light and dark mode"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Switch between light and dark mode"
      />
      <label className="form-check-label" htmlFor="darkModeSwitch">Dark Mode</label>
    </div>
  );
};

export default DarkModeSwitch;

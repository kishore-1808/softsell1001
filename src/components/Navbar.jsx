import { Menu, X, DollarSign, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check if the theme is saved in localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); // Apply dark theme on page load
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark'); // Apply light theme by default
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Apply the dark mode class to the root element
    if (newTheme) {
      document.documentElement.classList.add('dark'); // Add dark mode class
      localStorage.setItem('theme', 'dark'); // Save the dark mode preference
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode class
      localStorage.setItem('theme', 'light'); // Save the light mode preference
    }
  };

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm dark:bg-gray-800 dark:bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600 dark:text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">SoftSell</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 transition-colors">Contact</a>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 focus:outline-none"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            {/* Dark Mode Toggle Button for Mobile */}
            <button 
              onClick={toggleTheme} 
              className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar2.css';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../Homepage/AuthContext';
import Noty from 'noty'; // Import Noty

const Navbar2 = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    logout();
    new Noty({
      text: 'Logout successful',
      type: 'success',
      timeout: 3000,
    }).show();
    navigate('/'); // Redirect to homepage after logout
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.account-icon2') &&
        !event.target.closest('.dark-mode-toggle')
      ) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar2 ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-logo2"></div>
      <div className="navbar-links2">
        <div
          className="account-icon2"
          onClick={toggleDropdown}
          role="button"
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          <FaUser size={32} />
          <div className={`dropdown-menu2 ${dropdownOpen ? 'show' : ''}`}>
            {user ? (
              <div className="dropdown-item2 user-info2">
                 <p>Welcome, {user.username}</p>
              </div>
            ) : (
              <div className="dropdown-item2 user-info2">
                Welcome Guest {/* Show 'Guest' if no user is logged in */}
              </div>
            )}
            <div className="dropdown-item2 logout-item2" onClick={handleLogout}>
              <FaSignOutAlt size={16} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-mode-toggle" onClick={handleDarkModeToggle}>
        {/* Add dark mode toggle icon here */}
      </div>
    </nav>
  );
};

export default Navbar2;

import React, { useState, useEffect, useRef } from 'react';
import useScreenSize from '@hooks/useScreenSize';
import HeroIcon from '@components/atoms/hero-icon';
import UserProfile from '@assets/larissa.png';
import LogoIcon from '@assets/steam-icon.svg';

import style from './navbar.module.css';

const NAV_ITEMS = [
  { href: '/store', label: 'Store' },
  { href: '/library', label: 'Library' },
  { href: '/community', label: 'Community' },
  { href: '/profile', label: 'Profile' },
];

const DROPDOWN_ITEMS = [
  { href: '/profile', label: 'My Profile' },
  { href: '/settings', label: 'Settings' },
  { href: '/logout', label: 'Logout' },
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const isSmallScreen = useScreenSize();

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter') {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={style.Navbar} aria-label="Main Navigation">
      {isSmallScreen && (
        <a href="/" aria-label="Home">
          <img src={LogoIcon} alt="Steam's logo" className="cursor-pointer" />
        </a>
      )}
      <div className={style.NavbarContentPages}>
        <a href="/" aria-label="Home">
          <img src={LogoIcon} alt="Steam's logo" className="cursor-pointer" />
        </a>
        <ul className={style.NavbarList}>
          {NAV_ITEMS.map(item => (
            <li key={item.href} className={style.NavbarListItem}>
              <a href={item.href} className={style.NavbarLink} aria-label={item.label}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.NavbarContentUser}>
        <ul className={style.NavbarList}>
          <li className={style.NotificationIcon}>
            <HeroIcon
              icon="BellIcon"
              type="outline"
              extraClassNames="w-6 h-6 text-brand-tertiary-10 cursor-pointer"
              aria-label="Notifications"
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, toggleDropdown)}
              role="button"
              aria-hidden="false"
            />
          </li>
          <li className={style.NotificationIcon}>
            <HeroIcon
              icon="ChatBubbleOvalLeftIcon"
              type="outline"
              extraClassNames="w-6 h-6 text-brand-tertiary-10 cursor-pointer"
              aria-label="Messages"
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, toggleDropdown)}
              role="button"
              aria-hidden="false"
            />
          </li>
          <li
            className="flex items-center gap-2 relative h-[3rem]"
            onClick={toggleDropdown}
            onKeyDown={e => handleKeyDown(e, toggleDropdown)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            role="button"
            tabIndex={0}
          >
            <div className={style.UserProfile}>
              <img src={UserProfile} alt="Profile Photo" className={style.UserProfileImage} tabIndex={0} />
            </div>
            <HeroIcon
              icon="ChevronDownIcon"
              type="outline"
              extraClassNames="w-6 h-6 text-brand-tertiary-10 cursor-pointer"
              aria-label={dropdownOpen ? 'Close dropdown menu' : 'Open dropdown menu'}
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, toggleDropdown)}
              role="button"
              aria-hidden="false"
            />
            {dropdownOpen && (
              <ul className={style.DropdownMenu} ref={dropdownRef} aria-label="User menu" tabIndex={0}>
                {DROPDOWN_ITEMS.map(item => (
                  <li key={item.href} className={style.DropdownItem} tabIndex={0}>
                    <a href={item.href} aria-label={item.label}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

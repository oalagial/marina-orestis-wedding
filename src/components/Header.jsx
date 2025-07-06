import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm py-3 text-center relative overflow-hidden">
        <div className="relative z-10">
          <span className="mr-2">🎉</span>
          {t('header.welcomeParty')}
          <span className="ml-2">🎉</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-purple-600/90"></div>
      </div>

      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          {/* Date & Location */}
          <div className="text-sm text-gray-700 font-serif">
            <span className="block md:hidden text-base font-semibold tracking-wide">
              <span className="text-pink-500 font-bold">{t('header.date')}</span>
              <span className="mx-2 text-gray-400">·</span>
              <span className="text-gray-700">{t('header.location')}</span>
            </span>
            <span className="hidden md:block text-lg font-semibold tracking-wide leading-tight">
              <div className="text-pink-500 font-bold flex items-center">
                <span className="mr-2">📅</span>
                {t('header.date')}
              </div>
              <div className="text-gray-700 flex items-center mt-1">
                <span className="mr-2">📍</span>
                {t('header.location')}
              </div>
            </span>
          </div>

          {/* Main Title */}
          <div className="flex-1 text-center">
            <h1 className="hidden md:block text-4xl lg:text-5xl font-serif font-bold tracking-wide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              MARINA & ORESTIS
            </h1>
            <h1 className="block md:hidden text-2xl font-serif font-bold tracking-wide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              M & O
            </h1>
          </div>

          {/* Language Switcher and Burger Icon */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            {/* Burger Icon */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-pink-400 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg
                className={`w-6 h-6 transition-transform ${menuOpen ? 'rotate-45' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t border-gray-100">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center py-4 text-lg font-serif space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors hover:text-pink-600 ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t('nav.home')}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/schedule"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors hover:text-pink-600 ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t('nav.schedule')}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/travel"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors hover:text-pink-600 ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t('nav.travel')}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/gallery"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors hover:text-pink-600 ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t('nav.gallery')}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/things-to-do"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors hover:text-pink-600 ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t('nav.thingsToDo')}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/faqs"
              className={({ isActive }) =>
                `relative px-3 py-2 transition-colors hover:text-pink-600 ${
                  isActive 
                    ? "text-pink-600 font-semibold" 
                    : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {t('nav.faqs')}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  )}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/rsvp"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-full transition-all ${
                  isActive 
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg" 
                    : "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg hover:scale-105"
                }`
              }
            >
              {t('nav.rsvp')}
            </NavLink>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in">
              <div className="flex flex-col items-center py-6 text-lg font-serif space-y-4">
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-pink-100 text-pink-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {t('nav.home')}
                </NavLink>
                <NavLink 
                  to="/schedule" 
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-pink-100 text-pink-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {t('nav.schedule')}
                </NavLink>
                <NavLink 
                  to="/travel" 
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-pink-100 text-pink-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {t('nav.travel')}
                </NavLink>
                <NavLink 
                  to="/gallery" 
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-pink-100 text-pink-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {t('nav.gallery')}
                </NavLink>
                <NavLink 
                  to="/things-to-do" 
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-pink-100 text-pink-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {t('nav.thingsToDo')}
                </NavLink>
                <NavLink 
                  to="/faqs" 
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? "bg-pink-100 text-pink-600 font-semibold" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  {t('nav.faqs')}
                </NavLink>
                <NavLink 
                  to="/rsvp" 
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  {t('nav.rsvp')}
                </NavLink>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

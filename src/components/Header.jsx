import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* Minimal Announcement Bar */}
      {/* <div className="bg-gradient-to-r from-rose-500/90 to-pink-500/90 text-white text-sm py-2 text-center relative overflow-hidden">
        <div className="relative z-10 animate-fade-in">
          <span className="font-medium tracking-wide">
            {t('header.welcomeParty')}
          </span>
        </div>
      </div> */}

      <header className="glass-effect sticky top-0 z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center py-6">
            {/* Date & Location - Minimal */}
            <div className="hidden md:block text-sm text-gray-600 space-y-1">
              <div className="font-medium">
                {t('header.date')}
              </div>
              <div className="text-gray-500">
                {t('header.location')}
              </div>
            </div>

            {/* Main Title - Elegant */}
            <div className="flex-1 text-center">
              <h1 className="font-display-bold text-3xl lg:text-4xl xl:text-5xl gradient-text">
                Marina & Orestis
              </h1>
              <p className="text-xs tracking-[0.3em] text-gray-500 mt-1 uppercase font-medium">
                June 27, 2026
              </p>
            </div>

            {/* Language & Menu */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />

              {/* Minimal Burger */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-white/50 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Minimal Navigation */}
          <nav className="border-t border-white/10">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center py-4 space-x-8">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/schedule', label: t('nav.schedule') },
                { to: '/travel', label: t('nav.travel') },
                { to: '/gallery', label: t('nav.gallery') },
                { to: '/things-to-do', label: t('nav.thingsToDo') },
                { to: '/faqs', label: t('nav.faqs') }
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                      ? "text-rose-600"
                      : "text-gray-600 hover:text-gray-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* RSVP Button - Minimal */}
              <NavLink
                to="/rsvp"
                className="btn-minimal btn-primary text-sm"
              >
                {t('nav.rsvp')}
              </NavLink>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden py-6 animate-fade-in">
                <div className="flex flex-col space-y-4 text-center">
                  {[
                    { to: '/', label: t('nav.home') },
                    { to: '/schedule', label: t('nav.schedule') },
                    { to: '/travel', label: t('nav.travel') },
                    { to: '/gallery', label: t('nav.gallery') },
                    { to: '/things-to-do', label: t('nav.thingsToDo') },
                    { to: '/faqs', label: t('nav.faqs') }
                  ].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-2 text-base font-medium transition-colors ${isActive
                          ? "text-rose-600"
                          : "text-gray-700 hover:text-gray-900"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}

                  <NavLink
                    to="/rsvp"
                    onClick={() => setMenuOpen(false)}
                    className="btn-minimal btn-primary mx-auto w-fit"
                  >
                    {t('nav.rsvp')}
                  </NavLink>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="bg-white sticky top-0 z-50 border-b border-elegant soft-shadow">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center py-6">
            {/* Date & Location - Elegant */}
            <div className="hidden md:block text-sm muted-text space-y-1">
              <div className="font-medium elegant-text">
                {t('header.date')}
              </div>
              <div className="text-xs">
                {t('header.location')}
              </div>
            </div>

            {/* Main Title - Sophisticated */}
            <div className="flex-1 text-center">
              <h1 className="font-display-bold text-3xl lg:text-4xl xl:text-5xl elegant-text">
                {t('footer.coupleNames')}
              </h1>
              <p className="text-xs tracking-[0.3em] muted-text mt-1 uppercase font-medium mt-4">
                {t('header.date')}
              </p>
            </div>

            {/* Language & Menu */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />

              {/* Elegant Burger */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
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

          {/* Sophisticated Navigation */}
          <nav className="border-t border-elegant">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center py-4 space-x-8">
              {[
                { to: '/', label: t('nav.home') },
                { to: '/schedule', label: t('nav.schedule') },
                { to: '/travel', label: t('nav.travel') },
                // { to: '/gallery', label: t('nav.gallery') },
                { to: '/things-to-do', label: t('nav.thingsToDo') },
                { to: '/faqs', label: t('nav.faqs') }
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium transition-all duration-300 uppercase tracking-wider ${isActive
                      ? "accent-text"
                      : "muted-text hover:text-gray-900"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-px bg-current"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* RSVP Button - Elegant */}
              <NavLink
                to="/rsvp"
                className="btn-elegant btn-primary text-xs"
              >
                {t('nav.rsvp')}
              </NavLink>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden py-6 animate-fade-in bg-elegant">
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
                        `py-2 text-base font-medium transition-colors uppercase tracking-wider ${isActive
                          ? "accent-text"
                          : "muted-text hover:text-gray-900"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}

                  <NavLink
                    to="/rsvp"
                    onClick={() => setMenuOpen(false)}
                    className="btn-elegant btn-primary mx-auto w-fit mt-4"
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

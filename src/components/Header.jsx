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
      <div className="bg-gray-800 text-white text-sm py-2 text-center">
        {t('header.welcomeParty')}
      </div>
      <header className="bg-neutral-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          <div className="text-sm text-gray-700 font-serif">
            <span className="block md:hidden text-base font-semibold tracking-wide">
              <span className="text-pink-400">{t('header.date')}</span>
              <span className="mx-2 text-gray-400">·</span>
              <span className="text-gray-700">{t('header.location')}</span>
            </span>
            <span className="hidden md:block text-lg font-semibold tracking-wide leading-tight">
              <div className="text-pink-400">{t('header.date')}</div>
              <div className="text-gray-700">{t('header.location')}</div>
            </span>
          </div>
          <div className="flex-1 text-center">
            <h1 className="hidden md:block text-4xl font-serif font-bold tracking-wide">
              ORESTIS & MARINA
            </h1>
          </div>
          {/* Language Switcher and Burger Icon */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            {/* Burger Icon */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center py-2 text-lg font-serif space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black pb-1" : ""
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink to="/schedule">{t('nav.schedule')}</NavLink>
            <NavLink to="/travel">{t('nav.travel')}</NavLink>
            <NavLink to="/gallery">{t('nav.gallery')}</NavLink>
            <NavLink to="/things-to-do">{t('nav.thingsToDo')}</NavLink>
            <NavLink to="/faqs">{t('nav.faqs')}</NavLink>
            <NavLink to="/rsvp">{t('nav.rsvp')}</NavLink>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col items-center py-4 text-lg font-serif space-y-4 bg-neutral-50 shadow">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "border-b-2 border-black pb-1" : ""
                }
              >
                {t('nav.home')}
              </NavLink>
              <NavLink to="/schedule" onClick={() => setMenuOpen(false)}>
                {t('nav.schedule')}
              </NavLink>
              <NavLink to="/travel" onClick={() => setMenuOpen(false)}>
                {t('nav.travel')}
              </NavLink>
              <NavLink to="/gallery" onClick={() => setMenuOpen(false)}>
                {t('nav.gallery')}
              </NavLink>
              <NavLink to="/things-to-do" onClick={() => setMenuOpen(false)}>
                {t('nav.thingsToDo')}
              </NavLink>
              <NavLink to="/faqs" onClick={() => setMenuOpen(false)}>
                {t('nav.faqs')}
              </NavLink>
              <NavLink to="/rsvp" onClick={() => setMenuOpen(false)}>
                {t('nav.rsvp')}
              </NavLink>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

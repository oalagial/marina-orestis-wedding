import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gray-800 text-white text-sm py-2 text-center">
        Welcome Party details posted! Please join us at 7:30pm on June 18th at
        Anestis Restaurant
      </div>
      <header className="bg-neutral-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-sm text-gray-700">
            <div>June 27, 2026</div>
            <div>Athens, Greece</div>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-serif font-bold tracking-wide">
              ORESTIS & MARINA
            </h1>
          </div>
          <div className="w-32" /> {/* Spacer for symmetry */}
        </div>
        {/* Navigation */}
        <nav className="border-t border-gray-200">
          <div className="mt-4 flex justify-center py-2 text-lg font-serif space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 border-black pb-1" : ""}>Home</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/travel">Travel</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/things-to-do">Things To Do</NavLink>
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/rsvp">RSVP</NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}

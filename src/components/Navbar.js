'use client'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Dialog,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const pagesDropdown = [
    { label: "Blog Grid", path: "/pages" },
    { label: "Blog Single", path: "/pages/blog-single" },
    { label: "Sign In", path: "/auth/signin" },
    { label: "Sign Up", path: "/auth/signup" },
    { label: "404", path: "/404" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="h-10 w-auto"
            />
            <span className="text-3xl font-bold text-gray-900">Solid</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10 text-lg text-gray-500 font-medium ml-8 mr-32">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/features" className="hover:text-blue-600 transition-colors">Features</Link>
          <Popover className="relative">
            <div
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              className="relative"
            >
              <PopoverButton
                onClick={() => setOpen(!open)}
                className={`flex items-center gap-x-1 font-medium transition-colors duration-200 ${
                  open ? 'text-blue-600' : 'text-gray-500'
                } hover:text-blue-600`}
              >
                Pages
                <ChevronDownIcon className="w-5 h-5 text-gray-500 transition-transform duration-200" />
              </PopoverButton>

              <Transition
                show={open}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-2"
              >
                <PopoverPanel
                  static
                  className="absolute top-full left-0 z-10 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-gray-200"
                >
                  <div className="p-2 space-y-1">
                    {pagesDropdown.map(({ label, path }, i) => (
                      <Link
                        key={i}
                        to={path}
                        className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </div>
          </Popover>
          <Link to="/support" className="hover:text-blue-600 transition-colors">Support</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/auth/signin" className="text-lg font-semibold text-gray-500 hover:text-blue-600">Sign In</Link>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition-colors">
            Download
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-white p-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" className="h-8" />
              <span className="text-lg font-bold text-gray-900">Solid</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 space-y-4 text-base font-medium">
            <Link to="/" className="block hover:text-blue-600">Home</Link>
            <Link to="/features" className="block hover:text-blue-600">Features</Link>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex justify-between w-full hover:text-blue-600">
                    Pages
                    <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${open ? "rotate-180" : ""}`} />
                  </DisclosureButton>
                  <DisclosurePanel className="space-y-2 pl-4">
                    {pagesDropdown.map(({ label, path }, i) => (
                      <Link
                        key={i}
                        to={path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block hover:text-blue-600"
                      >
                        {label}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
            <Link to="/support" className="block hover:text-blue-600">Support</Link>
            <Link to="/auth/signin" className="block text-blue-600">Sign In</Link>
            <a href="#" className="block bg-blue-500 text-white text-center px-4 py-2 rounded hover:bg-blue-600">Download</a>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
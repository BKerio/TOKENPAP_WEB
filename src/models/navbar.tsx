import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRightFromCircle, ChevronDownCircle, DownloadIcon, Search, Mail, Phone } from "lucide-react";
import { ThemeToggle } from "@/models/theme-toggle";
import SearchModal from "@/components/SearchModal";
import { Button } from "@/models/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import KenyaFlag from "@/assets/flag-for-flag-kenya-svgrepo-com.svg";
import TokenPapLogo from "@/components/TokenPapLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  // Handle global shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);


  const closeAllMenus = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setShowDownloadPopup(false);

    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const toggleMenu = () => {
    if (showDownloadPopup) setShowDownloadPopup(false);
    setIsOpen(!isOpen);
    if (!isOpen) setActiveDropdown(null);
  };

  const handleMouseEnter = (linkName: string) => {
    if (!isMobile) {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
      if (showDownloadPopup) setShowDownloadPopup(false);
      setActiveDropdown(linkName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 200);
    }
  };

  const toggleDownloadMobile = () => {
    if (isOpen) setIsOpen(false);
    setShowDownloadPopup(!showDownloadPopup);
  };



  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setScrolled(currentScrollY > 10);

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 15) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobileStatus = window.innerWidth < 768;
      if (isMobile !== mobileStatus) {
        setIsMobile(mobileStatus);
        closeAllMenus();
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    closeAllMenus();
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      path: "/products",
      dropdown: [
        { name: "Prepaid Electricity Meters", path: "/products/electricity" },
        { name: "Prepaid Water Meters", path: "/products/water" },
        { name: "Prepaid Gas Meters", path: "/products/gas" },
        { name: "LoRa Smart Water Meters", path: "/products/lora-water" },
        { name: "NB-IoT Smart Water Meters", path: "/products/nbiot-water" },
      ]
    },
    {
      name: 'Solutions',
      path: '/solutions',
      dropdown: [
        { name: "For Property Owner", path: "/solutions/property-owners" },
        { name: "For Property Managers", path: "/solutions/property-managers" },
        { name: "For Property Developers", path: "/solutions/property-developers" },
        { name: "For Business Parks", path: "/solutions/business-parks" },
        { name: "For Water Utilities", path: "/solutions/water-utilities" },
        { name: "For Municipalities", path: "/solutions/municipalities" },
        { name: "For Schools", path: "/solutions/schools" },
        { name: "For Factories", path: "/solutions/factories" },
        { name: "For Hospitals", path: "/solutions/hospitals" },
        { name: "For Gated Communities", path: "/solutions/gated-communities" },
      ]
    },
    { name: "Contact Us", path: "/contact" },
  ];

  // ==========================
  //      HEIGHT CALCULATIONS
  // ==========================
  const coverageBarHeight = 44;
  const navBarBaseHeight = scrolled ? 72 : 96;
  const totalFixedHeaderHeight = coverageBarHeight + navBarBaseHeight;

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all ${isVisible ? 'translate-y-0 opacity-100 duration-150 ease-out' : '-translate-y-full opacity-0 duration-300 ease-in'}`}>
        {/* TOP BAR — Acrel-inspired dark strip */}
        <div
          className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
          style={{ minHeight: `${coverageBarHeight}px` }}
        >
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full flex flex-wrap items-center justify-between gap-y-1" style={{ minHeight: `${coverageBarHeight}px` }}>

            {/* Left: flag + area + contact */}
            <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
              <div className="flex items-center gap-x-2">
                <img src={KenyaFlag} draggable={false} alt="Kenya"
                  className="h-7 w-7 rounded-full object-cover ring-1 ring-white/30 flex-shrink-0"
                />
                <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest whitespace-nowrap">Kenya</span>
              </div>
              <span className="hidden sm:block text-gray-300 dark:text-gray-700 select-none">|</span>
              <a href="mailto:info@tokenpap.com"
                className="flex items-center gap-x-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@tokenpap.com</span>
              </a>

              <span className="hidden sm:block text-gray-300 dark:text-gray-700 select-none">|</span>

              <a href="tel:+254741099909"
                className="flex items-center gap-x-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+254 741 099 909</span>
              </a>
            </div>

            {/* Right: CTA */}
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-sm bg-amber-500 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              Get A Quote
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <motion.nav
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md transition-all duration-300"
          style={{ height: navBarBaseHeight }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full grid grid-cols-[auto_1fr_auto] items-center gap-x-4">

            {/* Col 1: Logo */}
            <Link to="/" className="flex items-center h-full" onClick={closeAllMenus}>
              <div 
                className="transition-all duration-300"
                style={{ height: scrolled ? '56px' : '72px' }}
              >
                <TokenPapLogo isScrolled={scrolled} />
              </div>
            </Link>

            {/* Col 2: Nav Links — auto-centered in remaining space */}
            <nav className="hidden md:flex items-center justify-center gap-x-1 lg:gap-x-3 h-full">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                  onMouseLeave={() => link.dropdown && handleMouseLeave()}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center px-3 py-2 rounded-md text-[0.8rem] font-semibold uppercase tracking-wide transition-colors ${(location.pathname.startsWith(link.path) && link.path !== '/') || location.pathname === link.path
                        ? "text-amber-600 dark:text-amber-500"
                        : "text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400"
                      }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDownCircle
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && !isMobile && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-20 p-2 space-y-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl w-56"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((sublink, index) => (
                          <React.Fragment key={sublink.name}>
                            <Link
                              to={sublink.path}
                              onClick={closeAllMenus}
                              className="flex items-center w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 flex-shrink-0" />
                              <span>{sublink.name}</span>
                            </Link>
                            {index !== link.dropdown!.length - 1 && (
                              <div className="border-t border-gray-500 dark:border-gray-700 my-1 mx-3" />
                            )}
                          </React.Fragment>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Col 3: Right Side Controls */}
            <div className="hidden md:flex items-center justify-end space-x-2 lg:space-x-3 h-full">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Search site"
              >
                <Search className="h-5 w-5" />
              </button>
              <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1"></div>
              <ThemeToggle />
              <div className="relative flex items-center h-full">
                <Button
                  onClick={() => window.location.href = 'https://app.tokenpap.com/'}
                  className="bg-gray-900 text-white hover:bg-gray-700 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  Get Started<ArrowUpRightFromCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Col 3 on mobile: hamburger + search (hidden on desktop, handled by right controls on desktop) */}
            <div className="flex md:hidden items-center justify-end space-x-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Search site"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Spacer div to push content below the fixed header */}
      <div style={{ height: `${totalFixedHeaderHeight}px` }} />

      {/* CSS variable for total header height used in mobile popups */}
      <style>{`:root { --total-header-height: ${totalFixedHeaderHeight}px; }`}</style>

      {/* Mobile Main Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[var(--total-header-height)] z-40 bg-white dark:bg-gray-900 md:hidden overflow-y-auto"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(prev => prev === link.name ? null : link.name)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300"
                      >
                        <span>{link.name}</span>
                        <ChevronDownCircle className={`h-5 w-5 transform transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 mt-1 space-y-1 overflow-hidden"
                          >
                            {link.dropdown.map((sub, index) => (
                              <React.Fragment key={sub.name}>
                                <Link
                                  to={sub.path}
                                  onClick={closeAllMenus}
                                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-400"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 flex-shrink-0" />
                                  <span>{sub.name}</span>
                                </Link>
                                {index !== link.dropdown!.length - 1 && (
                                  <div className="border-t border-gray-500 dark:border-gray-700 my-1 mx-3" />
                                )}
                              </React.Fragment>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={closeAllMenus}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-red-600 dark:text-red-700' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile contact info */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700 space-y-2 px-3">
                <a href="mailto:info@tokenpap.com" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors py-1">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@tokenpap.com</span>
                </a>
                <a href="tel:+254741099909" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors py-1">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+254 741 099 909</span>
                </a>
              </div>

              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <Button
                  onClick={() => window.location.href = 'https://app.tokenpap.com/'}
                  className="w-full bg-gray-900 text-white hover:bg-gray-800"
                >
                  Get Started
                </Button>
                <Button onClick={toggleDownloadMobile} className="w-full bg-red-700 text-white">Download Profile</Button>
                <div className="text-center"><ThemeToggle /></div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Download Popup */}
      <AnimatePresence>
        {showDownloadPopup && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAllMenus}
            className="fixed inset-0 top-[var(--total-header-height)] z-40 bg-black/50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-sm text-center"
            >
              <p className="font-bold text-lg mb-4 text-gray-800 dark:text-gray-200">Download Profile</p>
              <a
                href="/company_profile.pdf"
                download="TokenPap Business Profile.pdf"
                onClick={closeAllMenus}
                className="inline-flex items-center justify-center px-4 py-2 w-full rounded-md text-base font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors"
              >
                <DownloadIcon className="mr-2 h-5 w-5" /> Download PDF
              </a>
              <Button onClick={closeAllMenus} className="w-full mt-4">Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Coaching',
      path: '/coaching',
      subItems: [
        { label: 'Programs', path: '/coaching' },
        { label: 'Our Coaches', path: '/coaching/coaches' },
        { label: 'Roadmap', path: '/coaching/roadmap' }
      ]
    },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-primary-700 to-primary-500 fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-full h-12 w-12 flex items-center justify-center">
              <img 
                src={logo}
                alt="ECB Certification"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold leading-tight tracking-wide">Professional Cricket</div>
              <div className="text-2xl font-bold tracking-wide">Academy of Poland</div>
            </div>
          </Link>
          
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.subItems ? (
                  <>
                    <Link
                      to={item.path}
                      className={`px-4 py-2 text-white rounded-full hover:bg-white/20 transition-colors ${
                        location.pathname.startsWith(item.path) ? 'bg-white/20' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="absolute hidden group-hover:block top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 text-white rounded-full hover:bg-white/20 transition-colors ${
                      location.pathname === item.path ? 'bg-white/20' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            {navItems.map((item) => (
              <div key={item.path} className="space-y-2">
                {item.subItems ? (
                  <>
                    <Link
                      to={item.path}
                      className={`block py-2 text-white hover:bg-white/20 rounded-lg px-4 transition-colors ${
                        location.pathname === item.path ? 'bg-white/20' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="pl-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block py-2 text-white hover:bg-white/20 rounded-lg px-4 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block py-2 text-white hover:bg-white/20 rounded-lg px-4 transition-colors ${
                      location.pathname === item.path ? 'bg-white/20' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
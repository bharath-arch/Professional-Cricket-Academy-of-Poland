import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Coaching Programs', path: '/coaching' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'FAQ', path: '/faq' }
  ];

  const programs = [
    { label: 'Junior Coaching', path: '/coaching' },
    { label: 'Adult Coaching', path: '/coaching' },
    { label: "Women's Cricket", path: '/coaching' },
    { label: 'Corporate Programs', path: '/coaching' },
    { label: 'Summer Camps', path: '/coaching' },
    { label: 'International Tours', path: '/coaching' }
  ];

  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Academy Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="PCAP Logo" className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-bold text-purple-900">Professional Cricket</h3>
                <p className="text-sm text-purple-700">Academy of Poland</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your path to cricket excellence in Poland. Developing champions with world-class coaching and facilities.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-purple-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-purple-900 mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link to={program.path} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-purple-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Krakow and Warsaw, Poland</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                <a href="mailto:coaching@pcap.pl" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  coaching@pcap.pl
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                <a href="tel:+48123456789" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Professional Cricket Academy of Poland. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
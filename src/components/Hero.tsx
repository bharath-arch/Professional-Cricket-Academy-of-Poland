import React, { useState, useEffect } from 'react';
import { Users, Calendar, MapPin, Star, Trophy, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Cricket field
    "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Cricket match
    "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Cricket practice
    "https://images.unsplash.com/photo-1624959462631-c14ed6e3e6db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80", // Cricket stadium
    "https://images.unsplash.com/photo-1626253838134-c8d93a275615?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"  // Cricket action
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image}
              alt={`Cricket Scene ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-primary-50/90 to-primary-100/95"></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 2px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-40 w-40 bg-primary-200/40 rounded-full -top-10 left-1/4 animate-pulse-slow"></div>
          <div className="absolute h-56 w-56 bg-sky-200/40 rounded-full top-1/3 -right-20 animate-bounce-slow"></div>
          <div className="absolute h-64 w-64 bg-blue-200/40 rounded-full -bottom-20 left-1/3 animate-pulse-slow"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent transform -rotate-6"></div>
          <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent transform rotate-6"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-primary-600/10 backdrop-blur-md text-primary-900 mb-10 border border-primary-200 animate-bounce-slow shadow-lg shadow-primary-500/10">
            <Trophy className="h-6 w-6 text-primary-600" />
            <span className="text-3xl font-semibold">Join Poland's Premier Cricket Academy</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 text-primary-900 tracking-tight">
            Begin Your Cricket
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-sky-600 to-blue-600 text-transparent bg-clip-text animate-gradient">
              Adventure
            </span>
          </h1>

          <p className="text-2xl text-primary-700 max-w-3xl mx-auto mb-16">
            Start your journey into the exciting world of cricket with professional coaching 
            designed especially for young players!
          </p>

          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-10 max-w-4xl mx-auto mb-16 border border-primary-100 shadow-2xl shadow-primary-500/10">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 hover:from-primary-200 hover:to-primary-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Users className="h-10 w-10 text-primary-600 mb-4 group-hover:text-primary-700 transition-colors" />
                <div className="text-center">
                  <div className="font-semibold text-primary-900 text-lg mb-1">Fun Groups</div>
                  <div className="text-primary-600">Learn with friends</div>
                </div>
              </div>

              <div className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 hover:from-sky-200 hover:to-sky-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Calendar className="h-10 w-10 text-sky-600 mb-4 group-hover:text-sky-700 transition-colors" />
                <div className="text-center">
                  <div className="font-semibold text-sky-900 text-lg mb-1">Flexible Times</div>
                  <div className="text-sky-600">After school & weekends</div>
                </div>
              </div>

              <div className="group flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 hover:from-blue-200 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                <Heart className="h-10 w-10 text-blue-600 mb-4 group-hover:text-blue-700 transition-colors" />
                <div className="text-center">
                  <div className="font-semibold text-blue-900 text-lg mb-1">Great Coaches</div>
                  <div className="text-blue-600">Expert guidance</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-primary-100 via-sky-100 to-blue-100">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary-600" />
                <span className="text-primary-900 font-medium text-lg">Krakow and Warsaw, Poland</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-primary-600 via-primary-700 to-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:transform hover:scale-105 text-xl"
            >
              Start Your Journey
            </Link>
            <Link
              to="/coaching"
              className="inline-block px-10 py-5 bg-white/80 backdrop-blur-sm hover:bg-white text-primary-700 font-bold rounded-full transition-all duration-300 border border-primary-200 text-xl hover:shadow-lg hover:shadow-primary-500/10"
            >
              Explore Programs
            </Link>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-primary-600 w-6'
                    : 'bg-primary-300 hover:bg-primary-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
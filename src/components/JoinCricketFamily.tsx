import React from 'react';
import { Users, Star, Heart } from 'lucide-react';

const JoinCricketFamily = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 2px, transparent 0)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-96 w-96 bg-purple-200/30 rounded-full -top-48 -right-48 blur-3xl"></div>
        <div className="absolute h-96 w-96 bg-pink-200/30 rounded-full -bottom-48 -left-48 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-purple-100 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">Join Our Cricket Family</h2>
            <p className="text-xl text-purple-700">
              Be part of Poland's fastest-growing cricket community and experience the joy of 
              cricket excellence with players who share your passion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Users className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <p className="text-purple-900 font-medium">100+ Active Players</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Star className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <p className="text-purple-900 font-medium">Professional Coaching</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Heart className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <p className="text-purple-900 font-medium">Supportive Community</p>
            </div>
          </div>

          <div className="text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCricketFamily;
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import JuniorProgram from '../components/JuniorProgram';
import AdultProgram from '../components/AdultProgram';
import WomenProgram from '../components/WomenProgram';
import Coaches from '../components/Coaches';
import CoachingModel from '../components/CoachingModel';
import CoachingRoadmap from '../components/CoachingRoadmap';

const Coaching = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="pt-32">
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex justify-center space-x-4">
          <Link
            to="/coaching"
            className={`px-6 py-2 rounded-full transition-colors ${
              path === '/coaching'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            Programs
          </Link>
          <Link
            to="/coaching/coaches"
            className={`px-6 py-2 rounded-full transition-colors ${
              path === '/coaching/coaches'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            Our Coaches
          </Link>
          <Link
            to="/coaching/roadmap"
            className={`px-6 py-2 rounded-full transition-colors ${
              path === '/coaching/roadmap'
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
            }`}
          >
            Roadmap
          </Link>
        </div>
      </div>

      {/* Content */}
      {path === '/coaching/coaches' && (
        <>
          <Coaches />
          <CoachingModel />
        </>
      )}
      {path === '/coaching/roadmap' && (
        <CoachingRoadmap />
      )}
      {path === '/coaching' && (
        <>
          <JuniorProgram />
          <AdultProgram />
          <WomenProgram />
        </>
      )}
    </div>
  );
};

export default Coaching;
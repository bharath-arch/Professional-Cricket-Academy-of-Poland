import React from 'react';
import ScheduleComponent from '../components/Schedule';

const Schedule = () => {
  return (
    <div className="pt-32">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-purple-900 mb-6">Training Schedule</h1>
            <p className="text-xl text-purple-700">Find the perfect time for your cricket journey</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-white via-purple-50 to-white relative">
        {/* Cricket ball seam lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform rotate-12"></div>
        </div>
        
        <ScheduleComponent />
      </div>
    </div>
  );
};

export default Schedule;
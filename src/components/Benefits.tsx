import React from 'react';
import { BarChart3, Zap, Trophy, Users, Award, Globe } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />,
      title: "Professional Coaching",
      description: "ECB Certified Core Coach with a player-centric coaching approach to focus on your skills and needs."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "State-of-art Facilities",
      description: "Experience our ever-evolving infrastructure including top-end equipment, heated winter training facility, and bowling machine."
    },
    {
      icon: <Trophy className="h-8 w-8 text-purple-600" />,
      title: "Tournament Exposure",
      description: "Poland's only junior international and domestic tournaments organized and participated by PCAP."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Progressive Player Model",
      description: "Opportunity to progress through PCAP's A+/A/B model and enjoy discounted coaching, free nets, international camps."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Personalized Development",
      description: "Customized training plans tailored to your specific needs, strengths, and areas for improvement."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "International Exposure",
      description: "Opportunities to participate in international tournaments and training camps with players from around the world."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.1) 2px, transparent 0)`,
        backgroundSize: '30px 30px'
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-64 w-64 bg-purple-200/30 rounded-full -top-20 -right-20 blur-3xl"></div>
        <div className="absolute h-64 w-64 bg-pink-200/30 rounded-full -bottom-20 -left-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Benefits for You</h2>
          <p className="text-purple-700">Why choose PCAP Cricket Academy for your cricket journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-purple-100 shadow-lg hover:shadow-xl group"
            >
              <div className="bg-purple-50 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">{benefit.title}</h3>
              <p className="text-purple-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
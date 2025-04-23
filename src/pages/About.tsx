import React from 'react';
import Vision from '../components/Vision';
import { Target, Users, Trophy, MapPin, Star, Award, ChevronRight } from 'lucide-react';
import Achievements from '../components/Achievements';

const About = () => {
  const phases = [
    {
      title: "PHASE 1",
      items: [
        {
          title: "Proper Legal Setup",
          subtitle: "incl. Finance & Insurances",
          icon: <Target className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Pro Coaching & Team Building for 6+ Boys/Girls",
          subtitle: "Kick-start in Krakow",
          icon: <Users className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Pro Coaching & Team Building for Adults",
          subtitle: "Kick-start in Krakow",
          icon: <Users className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Pro Coaching & Team Building expansion",
          subtitle: "to Warsaw, Wroclaw, Gdansk",
          icon: <MapPin className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Adult Pro & Business Leagues",
          subtitle: "Clubs, Corporations",
          icon: <Trophy className="h-6 w-6 text-purple-600" />
        }
      ]
    },
    {
      title: "PHASE 2",
      items: [
        {
          title: "WOMEN Pro Cricket",
          icon: <Star className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Pro Cricket for Polish Under-18 group",
          icon: <Users className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Coaching, Team building & inter competition",
          subtitle: "Schools & Universities",
          icon: <Trophy className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Ground Infrastructure",
          subtitle: "across all major cities for pro cricket",
          icon: <MapPin className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Pro Cricket for Polish Adults group",
          icon: <Users className="h-6 w-6 text-purple-600" />
        }
      ]
    },
    {
      title: "PHASE 3",
      items: [
        {
          title: "National level U-12, U-18 and Adult Pro Leagues",
          icon: <Trophy className="h-6 w-6 text-purple-600" />
        },
        {
          title: "Cricket as Profession",
          icon: <Star className="h-6 w-6 text-purple-600" />
        },
        {
          title: "European Tournaments across all age levels",
          icon: <Trophy className="h-6 w-6 text-purple-600" />
        },
        {
          title: "International Tournaments across all age levels",
          icon: <Trophy className="h-6 w-6 text-purple-600" />
        },
        {
          title: "ICC Tournaments across all age levels",
          icon: <Trophy className="h-6 w-6 text-purple-600" />
        }
      ]
    }
  ];

  const leadershipTeam = [
    {
      role: "Head Coach & Technical Director",
      name: "Balaprasanna Ethirajalu",
      certifications: ["ECB Certified", "Core Coach Level 2"],
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      icon: <Trophy className="h-8 w-8 text-purple-600" />
    },
    {
      role: "Operations Director",
      name: "Cricket Operations",
      certifications: ["Sports Management", "Event Planning"],
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      icon: <Users className="h-8 w-8 text-purple-600" />
    },
    {
      role: "Development Manager",
      name: "Youth Programs",
      certifications: ["Youth Development", "Coaching"],
      image: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      icon: <Target className="h-8 w-8 text-purple-600" />
    }
  ];

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
            <h1 className="text-5xl font-bold text-purple-900 mb-6">About Us</h1>
            <p className="text-xl text-purple-700">Building cricket excellence in Poland through professional coaching and world-class facilities</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Our Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">Our Vision</span>
              <Vision />
            </div>
          </div>
        </section>

        {/* Our Ultimate Mission Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">Our Ultimate Mission</span>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">Building Cricket Excellence</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-purple-50 rounded-xl p-4 mb-6">
                  <h3 className="text-xl font-bold text-purple-900">{phase.title}</h3>
                </div>
                <div className="space-y-4">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-4 group hover:bg-purple-50 p-4 rounded-xl transition-all duration-300">
                      <div className="bg-white rounded-full p-2 shadow-md group-hover:shadow-lg transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-purple-900">{item.title}</h4>
                        {item.subtitle && (
                          <p className="text-purple-600 text-sm mt-1">{item.subtitle}</p>
                        )}
                      </div>
                      <ChevronRight className="h-5 w-5 text-purple-400 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Leadership Team Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">Our Leadership Team</span>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">Meet Our Experts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/80 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-xl font-semibold text-purple-900">{member.role}</h3>
                      <p className="text-purple-700 font-medium mt-1">{member.name}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {member.certifications.map((cert, i) => (
                          <span key={i} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Achievements Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">Our Achievements</span>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">Milestones Reached</h2>
          </div>
          <Achievements />
        </section>
      </div>
    </div>
  );
};

export default About;
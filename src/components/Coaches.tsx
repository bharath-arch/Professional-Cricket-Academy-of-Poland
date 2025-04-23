import React from 'react';
import { Award, Target, Users, Brain } from 'lucide-react';

const Coaches = () => {
  const coaches = [
    {
      name: "Balaprasanna Ethirajalu",
      title: "Head Coach",
      certifications: ["ECB Certified", "Core Coach Level 2"],
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      certificateImage: "https://raw.githubusercontent.com/1st4sport/ecb-core-coach/main/certificate.png",
      qualifications: [
        "Trained and Certified by ECB (English Cricket Board)",
        "Certification Level: CORE COACH (1st4sport Level 2)",
        "Passionate about 360-degree teaching methodology",
        "Avid explorer of introducing emerging technologies into cricket training",
        "Specializes in developing personalized training programs for all skill levels"
      ]
    }
  ];

  const expertise = [
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Technical Excellence",
      description: "Specialized coaching in batting, bowling, and fielding techniques"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Player Development",
      description: "Personalized training programs for all skill levels"
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Modern Methodology",
      description: "360-degree teaching approach with emerging technologies"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Professional Certification",
      description: "ECB certified with international coaching experience"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Our Coaches</span>
          <h2 className="text-4xl font-bold text-purple-900 mt-4">Meet Our Expert Coaching Staff</h2>
          <p className="text-gray-600 mt-2">Learn from certified professionals dedicated to cricket excellence</p>
        </div>

        {coaches.map((coach, index) => (
          <div key={index} className="max-w-6xl mx-auto mb-16">
            <div className="bg-purple-50 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {/* Coach Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-purple-900">{coach.name}</h3>
                    <p className="text-xl text-purple-600 mt-1">{coach.title}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    {coach.certifications.map((cert, i) => (
                      <span key={i} className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3">
                    {coach.qualifications.map((qual, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coach Photo */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={coach.image}
                    alt={coach.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Certificate */}
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={coach.certificateImage}
                    alt="ECB Core Coach Certificate"
                    className="absolute inset-0 w-full h-full object-contain rounded-lg bg-white p-4"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {expertise.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
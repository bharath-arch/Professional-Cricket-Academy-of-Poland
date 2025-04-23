import React, { useState } from 'react';
import { Target, Award, Star, Brain, ArrowRight, ChevronRight, Trophy, Users, Clock, Zap } from 'lucide-react';

const CoachingRoadmap = () => {
  const [activeTab, setActiveTab] = useState('focus');
  const [activeStage, setActiveStage] = useState('ignite1');

  const tabs = [
    { id: 'focus', label: 'Focus Areas', icon: <Target className="h-5 w-5" /> },
    { id: 'u18', label: 'U-18 Coaching', icon: <Trophy className="h-5 w-5" /> },
    { id: 'assessment', label: 'Assessment', icon: <Award className="h-5 w-5" /> },
    { id: 'career', label: 'Career Path', icon: <Users className="h-5 w-5" /> },
    { id: 'standards', label: 'Standards', icon: <Star className="h-5 w-5" /> }
  ];

  const focusAreas = [
    {
      title: "BUILD Professional Under-18, Under-16 and Under-12 Teams in Poland",
      icon: <Target className="h-8 w-8 text-purple-600" />,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      description: "Developing young talent through structured training programs and competitive opportunities."
    },
    {
      title: "BUILD professionals for Olympics 2028 & beyond",
      icon: <Award className="h-8 w-8 text-purple-600" />,
      color: "bg-gradient-to-br from-pink-50 to-pink-100",
      description: "Long-term athlete development focused on international competition readiness."
    },
    {
      title: "Introduce & Inspire Professional Cricket => POLISH Nationals",
      icon: <Star className="h-8 w-8 text-purple-600" />,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      description: "Growing cricket's popularity and establishing a strong foundation in Poland."
    },
    {
      title: "Focus & Build on WOMEN Cricket in Poland from grassroot level",
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      description: "Dedicated programs to develop women's cricket from beginner to professional level."
    }
  ];

  const stages = [
    {
      id: 'ignite1',
      name: "IGNITE Stage 1",
      color: "from-purple-500 to-purple-600",
      icon: <Target className="h-6 w-6 text-purple-600" />,
      items: [
        "Technical: Fundamentals across batting, bowling & fielding",
        "Basic understanding of the game & rules",
        "Experience in participating non-competitive and competitive games"
      ]
    },
    {
      id: 'ignite2',
      name: "IGNITE Stage 2",
      color: "from-pink-500 to-pink-600",
      icon: <Award className="h-6 w-6 text-purple-600" />,
      items: [
        "Technical: Focus on the fundamentals",
        "Strong understanding of the game & rules",
        "Experience in participating non-competitive and competitive games in Poland",
        "Mandatory practice at least 2 times a week"
      ]
    },
    {
      id: 'boost1',
      name: "BOOST Stage 1",
      color: "from-blue-500 to-blue-600",
      icon: <Star className="h-6 w-6 text-purple-600" />,
      items: [
        "Technical: Strengthen on selected role & start specialization",
        "Tactical: Start focus on tactical skills across selected specialization and game formats",
        "Physical & Mental: Start focus on fitness required for handling the game pressures",
        "Experience in participating competitive games in Poland and EU"
      ]
    },
    {
      id: 'boost2',
      name: "BOOST Stage 2",
      color: "from-indigo-500 to-indigo-600",
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      items: [
        "Technical: Strengthen on specialization within selected role",
        "Tactical: Strengthen tactical skills across selected specialization and game formats",
        "Physical & Mental: Enhance fitness required for handling the game pressures",
        "Regular participation in competitive games across Poland and EU"
      ]
    },
    {
      id: 'ace',
      name: "ACE",
      color: "from-yellow-500 to-yellow-600",
      icon: <Trophy className="h-6 w-6 text-purple-600" />,
      items: [
        "Technical: Continuous focus on specialization and sustainability",
        "Tactical: Focus on in-depth sports analysis and continuous progress on tactical skills",
        "Physical & Mental: Continuous focus on ace physical and mental fitness",
        "Regular participation in competitive games across Poland, EU and International Level"
      ]
    }
  ];

  return (
    <section className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-br from-white via-purple-50 to-purple-100">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Cricket ball pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Cricket ball seam lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform rotate-12"></div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 mb-4 border border-purple-200">
            Professional Development
          </span>
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Cricket Excellence Pathway</h2>
          <p className="text-purple-600">Structured approach to developing cricket champions</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-purple-600 hover:bg-purple-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content sections */}
        <div className="relative">
          {activeTab === 'focus' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className={`${area.color} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-200`}
                >
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">{area.title}</h3>
                  <p className="text-purple-600">{area.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'u18' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4">
                {stages.map((stage) => (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      activeStage === stage.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {stage.icon}
                    {stage.name}
                  </button>
                ))}
              </div>

              {stages.map((stage) => (
                stage.id === activeStage && (
                  <div
                    key={stage.id}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-purple-100 rounded-full p-3">
                        {stage.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-purple-900">{stage.name}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {stage.items.map((item, i) => (
                        <div key={i} className="bg-purple-50 rounded-xl p-6">
                          <div className="flex items-start">
                            <ChevronRight className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                            <p className="text-purple-900">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          )}

          {activeTab === 'assessment' && (
            <div className="max-w-4xl mx-auto animate-fadeIn">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 ml-6 md:ml-0 md:mr-[50%] md:pr-12 relative shadow-lg">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-900 mb-4">Continuous Monitoring & Assessment</h3>
                      <div className="space-y-3">
                        <div className="bg-purple-50 rounded-lg p-4">
                          <p className="text-purple-900">Coaching Sessions</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <p className="text-purple-900">Non-competitive weekly games</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <p className="text-purple-900">Competitive Assessments</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 mr-6 md:mr-0 md:ml-[50%] md:pl-12 relative shadow-lg">
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-900 mb-4">Certification</h3>
                      <p className="text-purple-600">Recognition of skills and achievements through official certification process</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 ml-6 md:ml-0 md:mr-[50%] md:pr-12 relative shadow-lg">
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Trophy className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-purple-900 mb-4">Promotion to next stage</h3>
                      <p className="text-purple-600">Advancement to higher levels based on performance and skill development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Assessment Schedule</h3>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <p className="text-purple-900">2024 Assessment Dates:</p>
                    <ul className="space-y-2 mt-4">
                      <li className="flex items-center gap-2 text-purple-600">
                        <ChevronRight className="h-5 w-5" />
                        June Assessment
                      </li>
                      <li className="flex items-center gap-2 text-purple-600">
                        <ChevronRight className="h-5 w-5" />
                        September Assessment
                      </li>
                      <li className="flex items-center gap-2 text-purple-600">
                        <ChevronRight className="h-5 w-5" />
                        November Assessment
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-purple-100 rounded-full p-3">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Training Structure</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="text-purple-900 font-semibold mb-2">Daily Practice</h4>
                      <p className="text-purple-600">Home and PCAP facility training</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="text-purple-900 font-semibold mb-2">Summer Camps</h4>
                      <p className="text-purple-600">Intensive training at PCAP and holiday locations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Trophy className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900">Professional Teams</h3>
                </div>
                <p className="text-purple-600 mb-6">Target: U-12, U-16 and U-18 teams</p>
                
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-xl p-6 transform hover:scale-105 transition-transform">
                    <h4 className="text-purple-900 font-bold mb-2">Division 1</h4>
                    <p className="text-purple-600">Elite competition level</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 transform hover:scale-105 transition-transform">
                    <h4 className="text-purple-900 font-bold mb-2">Division 2</h4>
                    <p className="text-purple-600">Advanced competition level</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 transform hover:scale-105 transition-transform">
                    <h4 className="text-purple-900 font-bold mb-2">Division 3</h4>
                    <p className="text-purple-600">Development competition level</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'standards' && (
            <div className="max-w-4xl mx-auto text-center animate-fadeIn">
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <img
                  src="https://raw.githubusercontent.com/1st4sport/ecb-core-coach/main/certificate.png"
                  alt="ECB Standards"
                  className="max-w-md mx-auto mb-8"
                />
                <h3 className="text-3xl font-bold text-purple-900 mb-6">English Cricket Board Certification</h3>
                <p className="text-xl text-purple-600 mb-8">
                  Our coaching standards are aligned with ECB's professional certification requirements,
                  ensuring world-class cricket education
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="text-purple-900 font-bold mb-2">Professional Standards</h4>
                    <p className="text-purple-600">ECB-certified coaching methodology</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="text-purple-900 font-bold mb-2">Quality Assurance</h4>
                    <p className="text-purple-600">Regular assessment and certification</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h4 className="text-purple-900 font-bold mb-2">International Recognition</h4>
                    <p className="text-purple-600">Globally acknowledged qualifications</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default CoachingRoadmap;
import React from 'react';
import { Heart, Star, Shield, Trophy, Clock } from 'lucide-react';

const WomenProgram = () => {
  const features = [
    {
      icon: <Heart className="h-6 w-6 text-purple-600" />,
      title: "Inclusive Environment",
      description: "Supportive atmosphere for women cricketers of all levels"
    },
    {
      icon: <Star className="h-6 w-6 text-purple-600" />,
      title: "Specialized Coaching",
      description: "Programs tailored specifically for women's cricket"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Development Path",
      description: "Clear progression from beginner to advanced levels"
    },
    {
      icon: <Trophy className="h-6 w-6 text-purple-600" />,
      title: "Competition Ready",
      description: "Preparation for women's tournaments and leagues"
    }
  ];

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Women's Cricket Program</h2>
          <p className="text-gray-600 max-w-3xl">
            Our professional coaching programs are designed to help players of all ages and skill levels improve their cricket abilities. 
            Our private coaching offers personalized attention and customized training plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-purple-900">Training Schedule</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Krakow</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Wednesday & Friday: 5:00 PM - 7:00 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Sunday: 9:00 AM - 11:00 AM</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Warsaw</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Tuesday & Thursday: 5:30 PM - 7:30 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Saturday: 10:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenProgram;
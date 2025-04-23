import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Junior Cricket Camp",
      date: "October 15-20, 2023",
      time: "9:00 AM - 3:00 PM",
      location: "Warsaw Cricket Ground",
      description: "Intensive cricket training for juniors aged 10-16 with professional coaches focusing on batting, bowling, and fielding techniques.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "PCAP Premier League",
      date: "November 5-12, 2023",
      time: "10:00 AM - 6:00 PM",
      location: "Krakow Cricket Stadium",
      description: "Annual league tournament featuring teams from across Poland. Open to all PCAP members and academy players.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Cricket Workshop with International Players",
      date: "December 3, 2023",
      time: "1:00 PM - 5:00 PM",
      location: "PCAP Indoor Training Center",
      description: "Special workshop featuring guest coaches from international cricket teams. Limited spots available.",
      image: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Events</span>
          <h2 className="text-4xl font-bold text-purple-900 mt-4">Upcoming Events</h2>
          <p className="text-gray-600 mt-2">Join our exciting cricket events and tournaments throughout the year</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-purple-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center">
            View All Events
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
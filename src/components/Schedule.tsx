import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const juniorSessions = {
    krakow: [
      {
        day: 'Saturday',
        time: '10:00 AM - 12:00 PM',
        description: 'Junior training session (Ages 8-12)'
      },
      {
        day: 'Sunday',
        time: '2:00 PM - 4:00 PM',
        description: 'Advanced junior training (Ages 13-16)'
      },
      {
        day: 'Wednesday',
        time: '4:00 PM - 6:00 PM',
        description: 'Weekday junior practice session (All ages)'
      }
    ],
    warsaw: [
      {
        day: 'Saturday',
        time: '9:00 AM - 11:00 AM',
        description: 'Junior beginners session (Ages 5-10)'
      },
      {
        day: 'Saturday',
        time: '12:00 PM - 2:00 PM',
        description: 'Junior intermediate & advanced (Ages 11-16)'
      },
      {
        day: 'Thursday',
        time: '4:30 PM - 6:30 PM',
        description: 'Weekday junior practice session (All ages)'
      }
    ]
  };

  const adultSessions = {
    krakow: [
      {
        day: 'Saturday',
        time: '4:00 PM - 7:00 PM',
        description: 'Adult cricket training session'
      },
      {
        day: 'Tuesday',
        time: '6:30 PM - 8:30 PM',
        description: "Women's cricket special session"
      },
      {
        day: 'Friday',
        time: '7:00 PM - 9:00 PM',
        description: 'Adult practice match session'
      }
    ],
    warsaw: [
      {
        day: 'Sunday',
        time: '3:00 PM - 6:00 PM',
        description: 'Adult cricket coaching session'
      },
      {
        day: 'Monday',
        time: '6:00 PM - 8:00 PM',
        description: "Women's cricket development program"
      },
      {
        day: 'Wednesday',
        time: '7:00 PM - 9:00 PM',
        description: 'Advanced adult cricket training'
      }
    ]
  };

  const upcomingEvents = [
    {
      title: 'PCAP Junior Winter Cup',
      date: 'December 10-12, 2023',
      location: 'Krakow',
      description: 'A special winter tournament for junior players across all age groups. The event will be held indoors at our heated facility in Krakow with teams from various cities participating.',
      status: 'Registration Open',
      action: 'Register'
    },
    {
      title: 'PCAP Warsaw Premier League Launch',
      date: 'January 15, 2024',
      location: 'Warsaw',
      description: 'The official launch of our new Warsaw Premier League for adult players. This event will include an exhibition match, player draft, and official league schedule announcement.',
      status: 'Coming Soon',
      action: 'Express Interest'
    },
    {
      title: "Women's Cricket Development Workshop",
      date: 'February 3-4, 2024',
      location: 'Krakow',
      description: "A special two-day workshop focused on developing women's cricket in Poland. The event will feature professional coaching, skills development, and strategic planning for future women's cricket initiatives.",
      status: 'Planning Phase',
      action: 'Stay Updated'
    }
  ];

  return (
    <section id="schedule" className="pt-24 pb-20 bg-white">
      <div className="bg-purple-700 text-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <span className="bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full">Training Schedule</span>
          <h2 className="text-4xl font-bold mt-4 mb-2">Cricket Sessions Calendar</h2>
          <p className="text-white/80">Find the perfect training session for your cricket journey</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Junior Coaching Schedule */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Youth Development</span>
            <h3 className="text-3xl font-bold text-purple-900 mt-4 mb-2">Junior Coaching</h3>
            <p className="text-gray-600">Tailored sessions for young players developing their cricket skills</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Krakow Schedule */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-lg">Krakow</h4>
              </div>
              <div className="space-y-4">
                {juniorSessions.krakow.map((session, index) => (
                  <div key={index} className="border-l-2 border-purple-600 pl-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-medium">{session.day}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock className="h-4 w-4 text-purple-600 mr-2" />
                      <span>{session.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{session.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warsaw Schedule */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-lg">Warsaw</h4>
              </div>
              <div className="space-y-4">
                {juniorSessions.warsaw.map((session, index) => (
                  <div key={index} className="border-l-2 border-purple-600 pl-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-medium">{session.day}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock className="h-4 w-4 text-purple-600 mr-2" />
                      <span>{session.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{session.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Adult & Women's Coaching Schedule */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Adult Programs</span>
            <h3 className="text-3xl font-bold text-purple-900 mt-4 mb-2">Adult & Women's Coaching</h3>
            <p className="text-gray-600">Professional coaching sessions for adult players and dedicated women's cricket program</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Krakow Schedule */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-lg">Krakow</h4>
              </div>
              <div className="space-y-4">
                {adultSessions.krakow.map((session, index) => (
                  <div key={index} className="border-l-2 border-purple-600 pl-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-medium">{session.day}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock className="h-4 w-4 text-purple-600 mr-2" />
                      <span>{session.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{session.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warsaw Schedule */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-purple-600 mr-2" />
                <h4 className="font-semibold text-lg">Warsaw</h4>
              </div>
              <div className="space-y-4">
                {adultSessions.warsaw.map((session, index) => (
                  <div key={index} className="border-l-2 border-purple-600 pl-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="font-medium">{session.day}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock className="h-4 w-4 text-purple-600 mr-2" />
                      <span>{session.time}</span>
                    </div>
                    <p className="text-sm text-gray-500">{session.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="mb-8">
            <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Events</span>
            <h3 className="text-3xl font-bold text-purple-900 mt-4 mb-2">Upcoming Events</h3>
            <p className="text-gray-600">Special cricket events and tournaments to mark in your calendar</p>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-purple-900">{event.title}</h4>
                    <div className="flex items-center mt-2 space-x-4 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full mb-2">
                      {event.status}
                    </span>
                    <button className="block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                      {event.action}
                    </button>
                  </div>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
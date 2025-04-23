import React from 'react';
import { ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      caption: "PCAP Junior Cricket Team with coaches"
    },
    {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      caption: "Professional training sessions at our facility"
    },
    {
      url: "https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      caption: "Team Poland at international tournament"
    }
  ];

  const kidsTeam = [
    {
      image: "https://raw.githubusercontent.com/1st4sport/pcap-kids/main/kid1.jpg",
      name: "Player 1",
      age: "U-12"
    },
    {
      image: "https://raw.githubusercontent.com/1st4sport/pcap-kids/main/kid2.jpg",
      name: "Player 2",
      age: "U-14"
    },
    {
      image: "https://raw.githubusercontent.com/1st4sport/pcap-kids/main/kid3.jpg",
      name: "Player 3",
      age: "U-16"
    },
    {
      image: "https://raw.githubusercontent.com/1st4sport/pcap-kids/main/kid4.jpg",
      name: "Player 4",
      age: "U-12"
    },
    {
      image: "https://raw.githubusercontent.com/1st4sport/pcap-kids/main/kid5.jpg",
      name: "Player 5",
      age: "U-14"
    }
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Photos</span>
          <h2 className="text-4xl font-bold text-purple-900 mt-4">Gallery</h2>
          <p className="text-gray-600 mt-2">Memories from our training sessions, tournaments and cricket journey</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.url} 
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kids Team Section */}
        <div className="mb-12 text-center">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Our Pride</span>
          <h3 className="text-3xl font-bold text-purple-900 mt-4 mb-2">PCAP Junior Team</h3>
          <p className="text-gray-600">Meet our talented young cricketers shaping the future of Polish cricket</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kidsTeam.map((player, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                <img 
                  src={player.image}
                  alt={player.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white text-center">
                      <p className="font-semibold">{player.name}</p>
                      <p className="text-sm text-purple-200">{player.age}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
            View Full Gallery
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
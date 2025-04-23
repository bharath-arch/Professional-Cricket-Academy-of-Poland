import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Mail } from 'lucide-react';

const FAQ = () => {
  const [openSection, setOpenSection] = useState<string | null>('general');

  const faqSections = {
    general: {
      title: 'General',
      questions: [
        {
          q: 'Who conducts the sessions?',
          a: 'Our Head Coach (ECB-certified) and a team of professional coaches with extensive experience in cricket coaching and player development.'
        },
        {
          q: 'How many sessions are there per month?',
          a: 'We offer multiple sessions per week, with the exact number depending on your chosen program. Regular programs typically include 8-12 sessions per month.'
        },
        {
          q: 'When are sessions held?',
          a: 'Sessions are held throughout the week, with options available in mornings, afternoons, and evenings. Weekend sessions are also available. Check our schedule page for detailed timings.'
        },
        {
          q: 'Where are sessions held?',
          a: 'Sessions are conducted at our dedicated facilities in Warsaw and Krakow. Both locations feature professional cricket grounds and indoor training facilities.'
        }
      ]
    },
    programs: {
      title: 'Programs & Facilities',
      questions: [
        {
          q: 'Are there winter sessions?',
          a: 'Yes, we offer year-round training with heated indoor facilities during winter months to ensure continuous player development.'
        },
        {
          q: 'What safety measures are in place?',
          a: 'We maintain strict safety protocols including proper protective equipment, certified coaching staff, first-aid facilities, and regular equipment safety checks.'
        },
        {
          q: 'What equipment is provided?',
          a: 'We provide all essential cricket equipment including bats, balls, protective gear, and training aids. Players are welcome to bring their own equipment if preferred.'
        },
        {
          q: 'Do you offer specialized coaching for different skill levels?',
          a: 'Yes, we offer tailored coaching programs for beginners, intermediate, and advanced players, ensuring appropriate skill development at every level.'
        }
      ]
    },
    registration: {
      title: 'Registration & Participation',
      questions: [
        {
          q: 'Are there any gender restrictions?',
          a: 'No, our programs are open to all genders. We have dedicated programs for both men and women, as well as mixed training sessions.'
        },
        {
          q: 'What are the fees?',
          a: 'Fees vary based on the program type and duration. Please contact us for detailed pricing information. We offer flexible payment plans and sibling discounts.'
        },
        {
          q: 'Is there an age limit for participation?',
          a: 'We welcome players from age 5 and up. Programs are structured by age groups: Junior (5-16 years) and Adult (16+ years).'
        },
        {
          q: 'How do I register for a program?',
          a: 'Registration can be completed online through our website or in person at our facilities. A free trial session is available for new players.'
        }
      ]
    },
    development: {
      title: 'Development & Progression',
      questions: [
        {
          q: 'Is there a pathway for competitive cricket?',
          a: 'Yes, we offer a structured pathway from beginner to competitive levels, including opportunities to play in local leagues and tournaments.'
        },
        {
          q: 'Do you organize tournaments?',
          a: 'Yes, we regularly organize both internal and external tournaments, including junior competitions and adult leagues.'
        },
        {
          q: 'How are players evaluated?',
          a: 'Players undergo regular assessments to track their progress. This includes technical skills, tactical understanding, and physical development.'
        },
        {
          q: 'Are there opportunities for international exposure?',
          a: 'Yes, we provide opportunities for international tours, training camps, and participation in tournaments abroad.'
        }
      ]
    }
  };

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
            <h1 className="text-5xl font-bold text-purple-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-purple-700">Find answers to common questions about our cricket academy</p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-white relative">
        {/* Cricket ball seam lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Sections */}
            {Object.entries(faqSections).map(([key, section]) => (
              <div key={key} className="mb-6">
                <button
                  onClick={() => setOpenSection(openSection === key ? null : key)}
                  className="w-full flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm rounded-lg hover:bg-purple-50 transition-colors border border-purple-100"
                >
                  <h2 className="text-xl font-semibold text-purple-900">{section.title}</h2>
                  {openSection === key ? (
                    <ChevronUp className="h-5 w-5 text-purple-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-600" />
                  )}
                </button>

                {openSection === key && (
                  <div className="mt-4 space-y-4 animate-fadeIn">
                    {section.questions.map((item, index) => (
                      <div key={index} className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-100 hover:shadow-md transition-all">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">{item.q}</h3>
                        <p className="text-purple-700">{item.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Additional Resources */}
            <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-purple-900 mb-6">Additional Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="#"
                  className="flex items-center p-4 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-all border border-purple-100"
                >
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-purple-900">Beginner's Guide to Cricket</h3>
                    <p className="text-sm text-purple-700">Download our comprehensive guide</p>
                  </div>
                </a>

                <a 
                  href="#"
                  className="flex items-center p-4 bg-purple-50/50 rounded-lg hover:bg-purple-50 transition-all border border-purple-100"
                >
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-purple-900">Academy Handbook</h3>
                    <p className="text-sm text-purple-700">View policies and guidelines</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">Still Have Questions?</h2>
              <p className="text-purple-700 mb-6">Contact us directly and we'll be happy to help with any specific inquiries</p>
              <a 
                href="mailto:coaching@pcap.pl"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
              >
                <Mail className="h-5 w-5 mr-2" />
                coaching@pcap.pl
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
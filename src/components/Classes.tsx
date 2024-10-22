import React from 'react';
import { Clock, Users, CheckCircle } from 'lucide-react';

const Classes = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="classes" className="py-12 bg-background-color">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-color mb-8">Our Classes</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 card-hover">
            <h3 className="text-xl font-semibold mb-4 text-primary-color">Fine Motor Skills Development</h3>
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-secondary-color mr-2" />
              <span className="text-text-color">60 min</span>
              <Users className="w-5 h-5 text-secondary-color ml-4 mr-2" />
              <span className="text-text-color">Max 8 students</span>
            </div>
            <h4 className="font-semibold mb-2 text-primary-color">What's included:</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-color mr-2" />
                <span className="text-text-color">Assessment of Milestones</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-color mr-2" />
                <span className="text-text-color">Guided Instruction</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-color mr-2" />
                <span className="text-text-color">Individual & Group Activities</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-accent-color mr-2" />
                <span className="text-text-color">All Materials & Equipment</span>
              </li>
            </ul>
            <button
              onClick={scrollToContact}
              className="mt-6 bg-accent-color text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition duration-300"
            >
              Enroll Now
            </button>
          </div>
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Young child playing with colorful blocks" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Preschooler drawing with crayons" 
              className="rounded-lg shadow-md w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
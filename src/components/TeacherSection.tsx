import React from 'react';
import { Brain, Users, Lightbulb, Star } from 'lucide-react';

const TeacherSection = () => {
  return (
    <section id="teachers" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-color mb-12">Meet Our Teachers</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
              alt="Laura Tam" 
              className="rounded-lg shadow-lg mx-auto w-full max-w-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold text-primary-color mb-4">Ms. Laura Tam, MSc, BSc, PDCC</h3>
            <p className="text-text-color mb-4">
              Laura is an Applied Psychologist with 10 years of teaching experience. She specializes in working with children challenged with developmental disorders and learning disabilities. Her passion lies in empowering children and ensuring they reach their full potential.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <Brain className="w-8 h-8 text-primary-color mr-2" />
                <p className="text-sm font-semibold text-text-color">Applied Psychology</p>
              </div>
              <div className="flex items-center">
                <Users className="w-8 h-8 text-secondary-color mr-2" />
                <p className="text-sm font-semibold text-text-color">Special Needs Education</p>
              </div>
              <div className="flex items-center">
                <Lightbulb className="w-8 h-8 text-accent-color mr-2" />
                <p className="text-sm font-semibold text-text-color">Personalized Learning</p>
              </div>
              <div className="flex items-center">
                <Star className="w-8 h-8 text-primary-color mr-2" />
                <p className="text-sm font-semibold text-text-color">Excellent Success Rate</p>
              </div>
            </div>
            <blockquote className="mt-8 italic text-text-color">
              "A skilled psychologist that works diligently with children of all ages!"
              <footer className="text-right text-sm">- Former Principal</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="gradient-bg py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              Develop <span className="text-accent-color">Fine Motor Skills</span> Through Play
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-slide-up">
              Give your child the foundation they need for academic success. Our expert-led programs combine fun
              and learning to develop essential skills.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('classes')}
                className="bg-accent-color text-primary-color font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center justify-center text-lg"
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-color transition duration-300 text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Children developing fine motor skills through play" 
              className="rounded-lg shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
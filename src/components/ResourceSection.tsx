import React from 'react';
import { BookOpen, Video, Users, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary-color" />,
    title: 'English Literacy Classes',
    description: 'Comprehensive classes to improve reading and writing skills.'
  },
  {
    icon: <MessageCircle className="w-8 h-8 text-secondary-color" />,
    title: 'Language Arts Tutoring',
    description: 'Personalized tutoring to enhance language arts proficiency.'
  },
  {
    icon: <Users className="w-8 h-8 text-accent-color" />,
    title: 'Fine Motor Skills Development',
    description: 'Targeted activities to improve fine motor skills and coordination.'
  },
  {
    icon: <Video className="w-8 h-8 text-primary-color" />,
    title: 'Specialist Teacher Consultation',
    description: 'Speak to one of our specialist teachers for personalized advice and support.'
  }
];

const ServiceSection = () => {
  return (
    <section id="services" className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <p className="text-xl text-center mb-12">
          If your child is new to reading, is struggling to reach their full potential, 
          or is having challenges with their fine motor skills, Laudable Learning is here to help!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md flex items-start card-hover">
              <div className="mr-4 mt-1">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-primary-color mb-2">{service.title}</h3>
                <p className="text-text-color">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
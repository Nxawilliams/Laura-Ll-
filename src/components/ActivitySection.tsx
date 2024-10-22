import React from 'react';
import { Scissors, Pencil, Puzzle, Brain, Users } from 'lucide-react';

const activities = [
  {
    icon: <Scissors className="w-12 h-12 text-primary-color" />,
    title: 'Improve Handwriting Skills',
    description: 'Enhance fine motor control for better handwriting through targeted exercises.'
  },
  {
    icon: <Brain className="w-12 h-12 text-secondary-color" />,
    title: 'Support Cognition',
    description: 'Boost cognitive development through engaging fine motor activities.'
  },
  {
    icon: <Users className="w-12 h-12 text-accent-color" />,
    title: 'Enhance Social Skills',
    description: 'Improve social interaction through collaborative fine motor exercises.'
  },
  {
    icon: <Pencil className="w-12 h-12 text-primary-color" />,
    title: 'Master Everyday Skills',
    description: 'Develop essential life skills through practical fine motor activities.'
  },
  {
    icon: <Puzzle className="w-12 h-12 text-secondary-color" />,
    title: 'Boost Self-Esteem',
    description: 'Build confidence through accomplishing fine motor skill challenges.'
  }
];

const ActivitySection = () => {
  return (
    <section id="activities" className="py-16 bg-background-color">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-color mb-8">Why are fine motor skills important?</h2>
        <p className="text-xl text-center text-text-color mb-12">They are lifelong and they help to:</p>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md card-hover">
              <div className="flex justify-center mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-primary-color mb-2">{activity.title}</h3>
              <p className="text-text-color">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
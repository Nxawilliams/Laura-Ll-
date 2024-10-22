import React from 'react';
import { GraduationCap, Puzzle, BarChart } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="w-12 h-12 text-primary-color" />,
    title: 'Expert Instruction',
    description: 'Led by certified child development specialists'
  },
  {
    icon: <Puzzle className="w-12 h-12 text-secondary-color" />,
    title: 'Engaging Activities',
    description: 'Fun, age-appropriate exercises and games'
  },
  {
    icon: <BarChart className="w-12 h-12 text-accent-color" />,
    title: 'Progress Tracking',
    description: 'Regular assessments and detailed feedback'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-background-color rounded-lg p-8 shadow-md text-center card-hover">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-primary-color">{feature.title}</h3>
              <p className="text-text-color text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
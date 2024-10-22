import React from 'react';

const Statistics = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-around">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500">500+</div>
            <div className="text-gray-600">Students Taught</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500">98%</div>
            <div className="text-gray-600">Parent Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500">85%</div>
            <div className="text-gray-600">Skill Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
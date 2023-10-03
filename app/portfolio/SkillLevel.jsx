// components/SkillLevel.js

import React from 'react';

const SkillLevel = ({ category, level }) => {
  return (
    <div className="p-4 bg-stone-900 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{category}</h3>
      <div className="flex space-x-2">
        {Array.from({ length: level }).map((_, index) => (
          <span key={index} className="text-yellow-500">&#9733;</span>
        ))}
      </div>
    </div>
  );
};

export default SkillLevel;

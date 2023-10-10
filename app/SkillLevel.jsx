import React from 'react';

const SkillLevel = ({ category, level }) => {
  const maxLevel = 5; // Set the maximum skill level

  // Function to render stars based on the skill level
  const renderStars = (currentLevel, maxLevel) => {
    const stars = [];
    for (let i = 0; i < maxLevel; i++) {
      // Use yellow color for stars up to the current skill level
      // and stone color for stars representing the maximum skill level
      const starColor = i < currentLevel ? 'text-yellow-500' : 'text-stone-700';
      stars.push(<span key={i} className={starColor}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="p-4 bg-stone-900 shadow-lg rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{category}</h3>
      <div className="flex space-x-2">
        {renderStars(level, maxLevel)} {/* Display skill level stars */}
      </div>
    </div>
  );
};

export default SkillLevel;

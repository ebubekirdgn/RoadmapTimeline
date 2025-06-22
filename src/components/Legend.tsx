import React from 'react';

const legendItems = [
  { text: 'Must know', color: 'bg-red-500' },
  { text: 'Good to know', color: 'bg-yellow-500' },
  { text: 'Optional', color: 'bg-blue-500' },
];

const Legend = () => {
  return (
    <div className="absolute top-4 left-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 w-48 animate-fade-in-scale">
      <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 mb-2">Legend</h3>
      <hr className="border-gray-200 dark:border-gray-600 mb-3" />
      <ul className="space-y-2">
        {legendItems.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full ${item.color}`} />
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend; 
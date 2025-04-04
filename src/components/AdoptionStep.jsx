import React from 'react'

const AdoptionStep = ({ step }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-800 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
      {step.step}
    </div>
    <h3 className="text-xl font-bold mb-2 dark:text-white">{step.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
  </div>
)

export default AdoptionStep
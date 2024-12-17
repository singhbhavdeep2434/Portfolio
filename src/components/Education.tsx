import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">Post Graduate Certificate in Information Technology Solutions</h3>
                <p className="text-gray-600">Humber College, North Campus</p>
              </div>
              <p className="text-gray-500">Sept 2023 - Apr 2025</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Technology: Computer Science and Engineering</h3>
                <p className="text-gray-600">Amity School of Engineering and Technology, Amity University</p>
              </div>
              <p className="text-gray-500">2017 - 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Programmer Analyst</h3>
                <p className="text-gray-600">Cognizant Technology Solutions</p>
              </div>
              <p className="text-gray-500">August 2021 - May 2023</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Developed RESTful APIs enabling smooth communication between backend services and frontend applications</li>
              <li>Implemented Security for API endpoint protection</li>
              <li>Leveraged JWT for efficient authentication and authorization</li>
              <li>Collaborated closely with teams to implement continuous integration</li>
              <li>Utilized Swagger and frameworks for API documentation</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">Web Developer (Intern)</h3>
                <p className="text-gray-600">JS Envitronics</p>
              </div>
              <p className="text-gray-500">April 2020 - June 2020</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Designed and developed websites using WordPress, integrating plugins like WooCommerce and Elementor</li>
              <li>Improved site performance and user experience by optimizing frontend code </li> 
            </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
}
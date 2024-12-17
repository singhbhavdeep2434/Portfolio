import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "C++", "C#"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Node.js", "Express.js", "MVC"]
    },
    {
      title: "Databases",
      skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Tools & Technologies",
      skills: ["AWS", "Git", "Docker", "Postman", "Swagger"]
    },
    {
      title: "Other Skills",
      skills: ["Machine Learning", "Deep Learning", "Microservices", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Navbar from '@/components/Navbar';

const experiences = [
  {
    year: 'Nov 2024 – Present',
    title: 'Unity Game Programmer',
    company: 'Self-Driven Game Development Projects',
    location: 'Mira Road, Mumbai (Remote)',
    description: [
      'As a self-motivated game developer, I’ve independently built multiple Unity games from scratch, simulating real-world production environments. I worked as a solo programmer and designer on titles like Loop Survivor, a fast-paced first-person shooter with enemy waves and boss battles, and Shadow of Roki, a 2D action-platformer with melee combat, portals, and predictive AI behavior.',

      'Key Achievements:',
      'Built complete gameplay systems including enemy AI, health and combat, portal teleportation, ammo & weapon logic, and level unlocking systems.',
      'Designed and programmed modular C# scripts, following clean architecture principles to ensure scalability and maintainability across scenes and game states.',
      'Used advanced Unity tools like Timeline, Animator Controller, Cinemachine, and UI Toolkit to polish visuals, cutscenes, and user interfaces.',
      'Created immersive player experiences through hit feedback, screen shake, slow-motion effects, enemy VFX, and sound integration.',
      'Managed all development using Git and Visual Studio Code, maintaining proper version control and rollback systems.',
      'Debugged complex behaviors including enemy pathfinding, animation glitches, and projectile misfires using Unity’s profiler and hands-on trial-and-error.',

      'This experience taught me not only technical proficiency but also discipline, creative problem-solving, and the mindset required to ship polished, playable experiences as a solo developer.'
    ]
  }
];

const education = [
  {
    year: '2024-2027',
    degree: 'B.S.C Information Technology',
    school: 'University of Mumbai',
    description: 'Specialized in Game Development'
  }
];

const skills = [
  {
    category: 'Programming',
    items: ['C#', 'C++']
  },
  {
    category: 'Game Development',
    items: ['Unity', 'Game Programming', '2D Animation']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Visual Studio', 'Unity', 'Performance Optimization']
  }
];

export default function Resume() {
  return (
    <main className="min-h-screen bg-[#000000] text-light font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="section-title mb-0 text-primary">Resume</h1>
            <a 
              href="/projects/AranGupta-Resume.png" 
              download
              className="px-4 py-2 text-sm bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg shadow hover:shadow-[0_0_16px_4px_rgba(0,255,247,0.3)] font-semibold transition-transform duration-300 hover:scale-105 animate-glow"
            >
              Download PDF
            </a>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-primary">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full shadow-[0_0_8px_2px_rgba(0,255,247,0.5)]"></div>
                  <div className="mb-2">
                    <span className="text-primary font-semibold">{exp.year}</span>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-light">{exp.company}{exp.location ? ` | ${exp.location}` : ''}</p>
                  </div>
                  {Array.isArray(exp.description) && exp.company === 'Self-Driven Game Development Projects' ? (
                    <>
                      <p className="text-light mb-2">{exp.description[0]}</p>
                      <p className="text-light font-semibold mt-2">{exp.description[1]}</p>
                      <ul className="list-disc list-inside text-light space-y-1 pl-4">
                        {exp.description.slice(2, -1).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      <p className="text-light mt-2">{exp.description[exp.description.length-1]}</p>
                    </>
                  ) : Array.isArray(exp.description) ? (
                    <ul className="list-disc list-inside text-light space-y-1 pl-4">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-light">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-secondary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full shadow-[0_0_8px_2px_rgba(127,0,255,0.5)]"></div>
                  <div className="mb-2">
                    <span className="text-secondary font-semibold">{edu.year}</span>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-light">{edu.school}</p>
                  </div>
                  <p className="text-light">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-darkAlt p-6 rounded-lg shadow border border-accent">
                  <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
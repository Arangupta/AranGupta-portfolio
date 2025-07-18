"use client";

import Navbar from '@/components/Navbar';

const funFacts = [
  'I enjoy debugging more than I should—it feels like solving mini mysteries hidden in my game.',

'Passionate about AI-driven game mechanics—games should challenge the player and adapt to them.',
  'Enjoy participating in game jams'
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#000000] text-light font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="section-title text-primary">About Me</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-light">
              Hi! I’m Aran Gupta, a Unity Game Developer and Programmer from Mira Road, Mumbai. I’m currently pursuing my B.Sc. in Information Technology and specialize in building immersive gameplay using Unity and C#.

I’ve developed games like Loop Survivor, a first-person wave shooter featuring enemy AI and boss mechanics, and Shadow of Roki, a 2D action-platformer with melee combat, portal-based level progression, and predictive enemy behavior. Through these projects, I’ve gained strong skills in gameplay systems, AI programming, and polished combat design.
              </p>
              
              <p className="text-lg text-light">
              I’m passionate about crafting responsive mechanics, animation feedback, and smooth player experiences. I also use Git, Unity’s UI Toolkit, and follow clean code practices for scalable systems.

My goal is to grow as a developer, collaborate with passionate teams, and contribute to games that are exciting, challenging, and fun to play.
              </p>
              
              <div className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-primary">Fun Facts</h2>
                <ul className="space-y-2">
                  {funFacts.map((fact, index) => (
                    <li key={index} className="flex items-center text-light">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Skills */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Technical Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-darkAlt p-4 rounded-lg shadow-lg border border-darkAlt hover:border-primary transition-colors">
                    <h3 className="font-bold mb-2 text-primary">Game Development</h3>
                    <ul className="space-y-1 text-light">
                      <li>• Unity Engine</li>
                      <li>• C# Programming</li>
                      <li>• Game Design</li>
                      <li>• Unity Cinemachine</li>
                    </ul>
                  </div>
                  
                  <div className="bg-darkAlt p-4 rounded-lg shadow-lg border border-darkAlt hover:border-primary transition-colors">
                    <h3 className="font-bold mb-2 text-primary">AI & Animation</h3>
                    <ul className="space-y-1 text-light">
                      <li>• AI Programming</li>
                      <li>• Character Animation</li>
                    
                    </ul>
                  </div>
                  
                  <div className="bg-darkAlt p-4 rounded-lg shadow-lg border border-darkAlt hover:border-primary transition-colors">
                    <h3 className="font-bold mb-2 text-primary">Tools & Technologies</h3>
                    <ul className="space-y-1 text-light">
                      <li>• Git & Version Control</li>
                      <li>• Visual Studio</li>
                      <li>• Unity UI Toolkit</li>
                    </ul>
                  </div>
                  
                  <div className="bg-darkAlt p-4 rounded-lg shadow-lg border border-darkAlt hover:border-primary transition-colors">
                    <h3 className="font-bold mb-2 text-primary">Soft Skills</h3>
                    <ul className="space-y-1 text-light">
                      <li>• Team Leadership</li>
                      <li>• Problem Solving</li>
                      <li>• Communication</li>
                      <li>• Project Management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
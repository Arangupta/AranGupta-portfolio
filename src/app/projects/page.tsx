"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import NeonButton from '@/components/NeonButton';

// This would typically come from a database or CMS
const projects = [
  {
    id: 'loop-survivors',
    title: 'Loop Survivors',
    description: 'Survive three intense loops of robotic enemy waves. Defeat the final boss robot after the third loop to escape the simulation and win.',
    thumbnail: '/projects/Screenshot 2025-06-18 181517.png',
    technologies: ['Unity', 'C#', 'AI Systems','Boss Design'],
    video: '/projects/gameplay-preview.mp4'
  },
  {
    id: 'shadow-of-roki',
    title: 'Shadow of Roki',
    description: 'Shadow of Roki is a 2D action-platformer where you fight mutant pigs, collect diamonds, and uncover your forgotten past.',
    thumbnail: '/projects/Screenshot 2025-06-20 000742.png',
    technologies: ['Unity', 'C#','Enemy AI','Mobile Game'],
    video: '/projects/main-gameplay.mp4'
  }
  // Only these two projects should be shown for now
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#000000] text-light font-sans">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Projects</h1>
          <p className="text-xl text-light">Explore my latest work in game development</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-darkAlt rounded-xl overflow-hidden shadow-lg border-2 border-dark hover:border-primary hover:shadow-[0_0_24px_4px_rgba(0,255,247,0.3)] transition-all duration-300 group"
            >
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full aspect-video object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                  poster={project.thumbnail}
                  autoPlay
                  muted
                  loop
                />
              ) : project.thumbnail && (
                <div className="relative aspect-video">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    width={480}
                    height={270}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-light mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <NeonButton href={`/project/${project.id}`} text="View Details" className="w-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <NeonButton href="/" text="← Back to Home" />
        </motion.div>
      </div>
    </main>
  );
} 
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import NeonButton from '@/components/NeonButton';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <main className="min-h-screen bg-[#000000] text-light font-sans">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 min-h-[80vh] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col items-center">
          <Image
            src="/AranImage.jpg"
            alt="Profile Photo"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary shadow-lg mb-6 object-cover"
            priority
          />
          <div className="max-w-3xl w-full flex flex-col items-center justify-center text-center">
            <div className="flex-1">
              <motion.h1 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-primary bg-clip-text animate-gradient-move mt-0"
              >
                Aran Gupta
              </motion.h1>
              <motion.h2 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-semibold mb-4 text-primary"
              >
                Unity Game Developer & Game Programmer
              </motion.h2>
              <motion.p 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-light mb-8"
              >
                I create immersive gaming experiences and push the boundaries of interactive entertainment. With expertise in Unity and a passion for AI-driven animation, I bring game concepts to life through code and creativity.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="mt-12 text-center">
                  <NeonButton href="/projects" text="Next" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
} 
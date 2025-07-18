"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});

// This would typically come from a database or CMS
const projectData = {
  "loop-survivors": {
    title: "Loop Survivors",
    bannerImage: "/projects/Screenshot 2025-06-18 181517.png",
    bannerVideo: "/projects/gameplay-preview.mp4",
    description:
      "Survive through three challenging loops, defeating multiple waves of robotic enemies. Once the third loop is completed, a powerful boss robot appears. Defeat it to escape the loop and win the simulation.",
    story:
      "Heeru Planet is under siege. The skies have turned crimson as alien invaders descend, wiping out everything in their path. You are the last survivor trapped in an endless loop of destruction. Time resets, but your will to fight does not. Every loop is a chance. A chance to fight. A chance to survive. A chance to save Heeru. Master fast-paced combat, unleash power-ups, and face devastating bosses as you fight your way through wave after wave of enemies. Use everything at your disposal from advanced weapons to healing pickups—to push deeper into the loop. Can you break the cycle... or will Heeru become a forgotten story?",
    features: [
      "Enemy Waves – Enemies spawn in waves with increasing difficulty.",

      "FPS Controller – Smooth player movement, shooting, and aiming mechanics.",

      "Health System – Tracks damage and health, with animated death effects.",

      "Portal Teleport System – Robotic enemies spawn dynamically through portals.",

      "UI Elements – Includes health bar, ammo count, restart button, and player instructions.",
    ],
    keyFeatures: [
      "Enemy Waves – Enemies spawn in waves with increasing difficulty.",
      "FPS Controller – Smooth player movement, shooting, and aiming mechanics.",
      "Health System – Tracks damage and health, with animated death effects.",
      "Portal Teleport System – Robotic enemies spawn dynamically through portals.",
      "UI Elements – Includes health bar, ammo count, restart button, and player instructions.",
    ],
    technologies: [
      "Unity Engine",
      "C# Programming",
      "Unity Animator",
      "Unity Asset Store Assets (Assault Mech, Environment models)",
      "Unity Input System",
      "Unity Particle System",
      "Unity Audio System",
      "Unity UI System",
      "Unity Scene Management",
      "Unity Animator State Machine",
      "Visual Studio Code",
    ],
    screenshots: [
      "/projects/Screenshot 2025-06-18 181517.png",
      "/projects/Screenshot 2025-06-20 000742.png",
      "/projects/Screenshot 2025-06-20 001050.png",
    ],
    role: "Lead Developer",
    responsibilities: [
      "Designed and programmed FPS player controller (movement, camera, shooting).",
      "Implemented loop logic and Enemy system.",
      "Designed and coded the enemy AI (chase, shoot, die).",
      "Designed and coded the Boss enemy AI (chase, shoot, die).",
      "Created health & damage systems for player and enemies.",
      "Made UI/UX — health bar, feedback on damage.",
      "Used Animator Controllers for shooting, hit, and death animations.",
      "Integrated sound effects and basic game polish.",
    ],
    Challenges: [
      "Making multiple Animator Controllers work together for enemy mech.",
      "Syncing Robotic enemies actions with time loop.",
      "Creating responsive and bug-free shooting & damage systems.",
    ],
    Learned: [
      "Deep understanding of FPS mechanics.",
      "Handling multi-state AI animation.",
      "Writing scalable component-based scripts.",
      "Unity scene management, UI design, and player feedback systems.",
    ],
    bossFight: {
      video: "/projects/boss-fight.mp4",
      description:
        "Face off against the powerful boss robot after surviving three intense loops. The boss features unique attack patterns and requires strategic movement and shooting to defeat. Defeating the boss is the only way to escape the simulation loop and win the game.",
      githubLink: "",
    },
    storyVideo: {
      video: "/projects/story-video.mp4",
      description:
        "Game Intro Story : Heeru Planet is under siege. The skies have turned crimson as alien invaders descend, wiping out everything in their path. You are the last survivor trapped in an endless loop of destruction. Time resets, but your will to fight does not. Every loop is a chance. A chance to fight. A chance to survive. A chance to save Heeru. Master fast-paced combat, unleash power-ups, and face devastating bosses as you fight your way through wave after wave of enemies. Use everything at your disposal from advanced weapons to healing pickups—to push deeper into the loop. Can you break the cycle... or will Heeru become a forgotten story?",
    },
    GameplayPreview: {
      video: "/projects/gameplay-preview.mp4",
    },
  },
  "shadow-of-roki": {
    title: "Shadow of Roki",
    bannerImage: "/projects/Screenshot 2025-06-20 000742.png",
    bannerVideo: "/projects/main-gameplay.mp4",
    description:
      "This is a 2D action-platformer where the player must fight through increasingly difficult levels filled with a variety of enemies. As the game progresses, enemies become stronger and display different styles of attack and movement, requiring the player to adapt and use strategy. In each level, the objective is to defeat the enemies and collect a diamond. Once the diamond is obtained, a portal is activated, allowing the player to advance to the next level. The combination of combat, exploration, and evolving challenges creates a dynamic gameplay experience that keeps players engaged and on their toes.",
    story:
      "In the mystical world of Roki, a dark shadow has fallen, corrupting the land and its creatures. You are the chosen warrior destined to restore balance. Wielding ancient powers, you must navigate treacherous dungeons, solve intricate puzzles, and defeat formidable bosses to cleanse the world of the encroaching darkness.",
    features: [
      "Level Lock/Unlock System – Progressively unlocks new levels as the player completes stages.",
      "Bomb-Throwing Enemies – Enemies detect player position and attack using timed bombs.",
      "Collect-to-Progress Mechanic – Players collect diamonds to unlock portals and advance.",
      "Animated Portals – Doors and portals play different animations based on game state.",
      "Fantasy UI Design – Clean and themed level panel with visual feedback and lock indicators.",
      "Progress Save System – Player progress saved using Unity's built-in PlayerPrefs system.",
    ],
    keyFeatures: [
      "Level Lock/Unlock System – Progressively unlocks new levels as the player completes stages.",
      "Bomb-Throwing Enemies – Enemies detect player position and attack using timed bombs.",
      "Collect-to-Progress Mechanic – Players collect diamonds to unlock portals and advance.",
      "Animated Portals – Doors and portals play different animations based on game state.",
      "Fantasy UI Design – Clean and themed level panel with visual feedback and lock indicators.",
      "Progress Save System – Player progress saved using Unity's built-in PlayerPrefs system.",
    ],
    technologies: [
      "Unity Engine",
      "C# Programming",
      "Unity Animator",
      "Shader Graph",
      "Unity Input System",
      "Unity Audio System",
      "Unity UI System",
      "Unity Scene Management",
      "Unity Asset Store Assets (Environment models)",
      "PlayerPrefs for level progress tracking",
      "Visual Studio Code",
    ],
    screenshots: [
      "/projects/Screenshot 2025-07-01 172620.png",
      "/projects/Screenshot 2025-07-01 172455.png",
      "/projects/Screenshot 2025-07-01 172541.png",
    ],
    role: "Lead Game Developer",
    responsibilities: [
      "Designed and programmed the level progression system and UI/UX, including the locked level panel.",
      "Developed the enemy AI with both ranged (bomb-throw) and melee logic.",
      "Created the game's core mechanic: collect diamonds, open portals, and survive waves of pigs.",
      "Handled all game logic and animations using Unity and C#.",
      "Implemented difficulty progression across 4 levels, each introducing unique enemy styles and stronger challenges.",
      "Managed asset integration, scene transitions, and animation states (idle, open, closed) for game objects like doors and portals.",
    ],
    Challenges: [
      "Developed enemy logic to throw bombs by detecting player position and timing.",
      "Implemented a dynamic level lock/unlock system with UI updates using PlayerPrefs.",
      "Managed UI layering and animations, especially for lock icons and level buttons.",
      "Fixed bugs in level progression where levels didn't unlock properly.",
      "Designed enemy difficulty to scale smoothly across levels without overwhelming players.",
    ],
    Learned: [
      "How to design and implement a level-based progression system with locked and unlocked stages.",
      "Integrating UI elements dynamically (e.g., lock icons, level numbers, interactive buttons).",
      "Using PlayerPrefs to store and load player progress persistently across sessions.",
      "Creating enemy behavior tied to player detection, such as bomb-throwing logic.",
      "Organizing code into modular, maintainable scripts for scalability.",
      "Solving bugs through iteration and debugging based on real gameplay testing.",
    ],
    bossFight: {
      video: "/projects/boom-auto-aim.mp4",
      description:
        "This feature showcases an intelligent enemy system where enemies track and react to the player's movement in real time. Instead of randomly attacking or using fixed patterns, these enemies throw bombs by predicting where the player is going, creating dynamic and challenging combat. The AI calculates the player's trajectory and throws bombs with precise timing to intercept their path.",
      githubLink:
        "https://github.com/Arangupta/Shadow-Of-Roki-Game/blob/main/BoomEnemy.cs",
    },
    GameplayPreview: {
      video: "/projects/main-gameplay.mp4",
      description:
        "In a world once held together by the power of elemental diamonds, chaos has spread after the stones were scattered across corrupted lands. Each diamond was stolen and hidden deep within dangerous realms now ruled by twisted creatures. You play as Roki, a warrior with no memory of his past, awakened by a mysterious force and called to restore balance.",
    },
    storyVideo: {
      video: "/projects/Roki Story - Made with Clipchamp (1).mp4",
      description:
        "In the heart of a jungle no one dares enter, a boy named Roki stumbles into the unknown. A mysterious object crashes from the sky, striking him down. When he wakes… his past is gone. Now, surrounded by savage, mutated pigs and shadows of a forgotten world, Roki must survive. Every step he takes uncovers fragments of a lost identity… and a dark secret buried deep within the jungle. This is not just a fight for survival. It's a fight to remember who he truly is.",
    },
  },
  // Add more projects here
};

const MemoizedVideoPlayer = React.memo(VideoPlayer);

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const project: (typeof projectData)[keyof typeof projectData] & {
    keyFeature?: string | string[];
    keyFeatures?: string[];
  } = projectData[params.slug as keyof typeof projectData];

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mt-4 text-lg"
          >
            Back to Projects
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <div className="container mx-auto px-2 md:px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Banner Video */}
          {project.bannerVideo && (
            <article className="bg-gray-800 rounded-xl p-2 mb-8 shadow-lg border border-gray-700 flex flex-col items-center">
              <div className="w-full flex justify-center">
                <div className="w-full max-w-6xl aspect-video">
                  <MemoizedVideoPlayer
                    src={project.bannerVideo}
                    title={project.title}
                  />
                </div>
              </div>
            </article>
          )}

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 section-title">
                {project.title}
              </h1>
              {/* Overview */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700"
              >
                <h2 className="section-title">Overview</h2>
                <p className="text-gray-300 text-base md:text-lg">
                  {project.description}
                </p>
              </motion.article>
              {/* Key Features */}
              {(project.keyFeatures || project.keyFeature) && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-800 rounded-xl p-4 border border-cyan-700"
                >
                  <h2 className="section-title">Key Features</h2>
                  {Array.isArray(project.keyFeatures) ? (
                    <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-1">
                      {project.keyFeatures.map(
                        (feature: string, idx: number) => (
                          <li key={idx}>{feature}</li>
                        )
                      )}
                    </ul>
                  ) : Array.isArray(project.keyFeature) ? (
                    <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-1">
                      {project.keyFeature.map(
                        (feature: string, idx: number) => (
                          <li key={idx}>{feature}</li>
                        )
                      )}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-base md:text-lg">
                      {project.keyFeature}
                    </p>
                  )}
                </motion.article>
              )}
              {/* My Role */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700"
              >
                <h2 className="section-title">My Role</h2>
                <p className="text-white font-semibold mb-2 text-base md:text-lg">
                  {project.role}
                </p>
                <ul className="list-disc list-inside text-blue-400 text-base md:text-lg leading-relaxed space-y-2 pl-4 border-l-4 border-blue-400">
                  {project.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </motion.article>
              {/* Technologies Used */}
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800 rounded-xl p-4 border border-gray-700"
              >
                <h2 className="section-title">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-darkAlt text-white border border-white rounded-full text-xs md:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
              {/* Challenges Faced */}
              {project.Challenges && project.Challenges.length > 0 && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                >
                  <h2 className="section-title">Challenges Faced</h2>
                  <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-1">
                    {project.Challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </motion.article>
              )}
              {/* What I Learned */}
              {project.Learned && project.Learned.length > 0 && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                >
                  <h2 className="section-title">What I Learned</h2>
                  <ul className="list-disc list-inside text-gray-300 text-base md:text-lg space-y-1">
                    {project.Learned.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </motion.article>
              )}
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-6">
              {/* Game Intro Story (was Gameplay Preview) */}
              {project.storyVideo && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                >
                  <h2 className="section-title">Game Intro Story</h2>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <MemoizedVideoPlayer
                        src={project.storyVideo.video}
                        title={`${project.title} Story`}
                      />
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2 text-base md:text-lg">
                    {project.storyVideo.description}
                  </p>
                </motion.article>
              )}
              {/* Gameplay Preview (main gameplay) */}
              {project.GameplayPreview && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                >
                  <h2 className="section-title">Gameplay Preview</h2>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <MemoizedVideoPlayer
                        src={project.GameplayPreview.video}
                        title={`${project.title} Gameplay Preview`}
                      />
                    </div>
                  </div>
                </motion.article>
              )}
              {/* Boss Fight Highlight */}
              {project.bossFight && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="bg-gray-800 rounded-xl p-4 border border-gray-700"
                >
                  <h2 className="section-title">
                    {params.slug === "shadow-of-roki"
                      ? "Predict Enemy Boom Throwing AI"
                      : "Boss Fight Highlight"}
                  </h2>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <MemoizedVideoPlayer
                        src={project.bossFight.video}
                        title={`${project.title} Boss Fight`}
                      />
                    </div>
                  </div>
                  <p className="text-gray-300 mt-2 text-base md:text-lg">
                    {project.bossFight.description}
                  </p>
                  {params.slug === "loop-survivors" && (
                    <div className="flex justify-center w-full">
                      <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#00fff7" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        href="https://github.com/Arangupta/LoopSurvivors-Game/tree/main/Boss%20Ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link highlight-link mt-2 inline-block text-sm"
                      >
                        View Boss Ai Folder on GitHub
                      </motion.a>
                    </div>
                  )}
                  {project.bossFight.githubLink && (
                    <div className="flex justify-center w-full">
                      <motion.a
                        whileHover={{ scale: 1.05, backgroundColor: "#00fff7" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        href={
                          params.slug === "loop-survivors"
                            ? "https://github.com/Arangupta/LoopSurvivors-Game/tree/main/Boss%20Ai"
                            : project.bossFight.githubLink
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link highlight-link mt-2 inline-block text-sm"
                      >
                        {params.slug === "loop-survivors"
                          ? "View Boss Ai Folder on GitHub"
                          : "View BoomEnemy.cs on GitHub"}
                      </motion.a>
                    </div>
                  )}
                </motion.article>
              )}
              {/* Level Selection Panel Showcase (only for shadow-of-roki) */}
              {params.slug === "shadow-of-roki" && (
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-gray-800 rounded-xl p-4 border border-cyan-700 flex flex-col items-center"
                >
                  <Image
                    src="/projects/freecompress-Screenshot 2025-06-30 182935.png"
                    alt="Custom Level Selection Panel"
                    width={480}
                    height={300}
                    className="rounded-lg border border-cyan-700 shadow-md mb-4"
                    priority
                  />
                  <h2 className="text-lg font-semibold mb-2 text-cyan-400">
                    Level Selection Panel
                  </h2>
                  <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1 text-left">
                    <li>
                      Designed and implemented a custom level selection panel
                      with an interactive fantasy-themed UI.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Unlock System:
                      </span>{" "}
                      Only completed levels are playable; others display a lock
                      icon.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Visual Feedback:
                      </span>{" "}
                      Disabled buttons and "Coming..." placeholders for future
                      levels.
                    </li>
                    <li>
                      <span className="font-semibold text-white">
                        Scene Management:
                      </span>{" "}
                      Levels dynamically load using Unity's scene system.
                    </li>
                    <li>
                      Built in Unity (C#) with PlayerPrefs for level progress
                      tracking.
                    </li>
                  </ul>
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#00fff7" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://github.com/Arangupta/Shadow-Of-Roki-Game/blob/main/LevelManager.cs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link highlight-link mt-2 inline-block text-sm"
                  >
                    View LevelManager.cs on GitHub
                  </motion.a>
                </motion.article>
              )}
            </div>
          </div>
        </motion.div>
        {/* Screenshots (full width at end of page) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 mt-8"
          >
            <h2 className="section-title">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.screenshots.map((src, idx) => (
                <div key={idx} className="w-full">
                  <Image
                    src={src}
                    alt={`${project.title} Screenshot ${idx + 1}`}
                    width={480}
                    height={270}
                    className="rounded-lg border border-gray-700 shadow-md object-cover w-full h-auto"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}

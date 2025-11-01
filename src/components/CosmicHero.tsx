import { motion } from 'motion/react';
import { StarField } from './StarField';
import { SkillOrb } from './SkillOrb';
import { useEffect, useState } from 'react';
import { skills } from '../data';


interface CosmicHeroProps {
  onViewWorkClick: () => void;
}

export function CosmicHero({ onViewWorkClick }: CosmicHeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Far layer: Static starfield */}
      <StarField />

      {/* Mid layer: Animated wave pattern */}
      <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#4A1F6B" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00FFC4" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100 V400 H0 Z"
            fill="url(#waveGradient)"
            className="animate-[wave_20s_ease-in-out_infinite]"
          />
          <path
            d="M0,150 Q300,100 600,150 T1200,150 T1800,150 T2400,150 V400 H0 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
            className="animate-[wave_15s_ease-in-out_infinite_reverse]"
          />
        </svg>
      </div>

      {/* Foreground: Content with parallax */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 text-center"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl mb-4 sm:mb-6 bg-gradient-to-r from-[#00D4FF] via-[#00FFC4] to-[#7B4B8B] bg-clip-text text-transparent animate-[float_6s_ease-in-out_infinite] px-4">
            Muhammad Sifat
          </h1>
          <p className="text-base sm:text-xl md:text-2xl opacity-80 mb-6 sm:mb-8 px-4">
            Full-Stack Developer & Creative Technologist
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onViewWorkClick}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] text-sm sm:text-base"
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Skills as glowing orbs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
          }}
        >
          {skills.map((skill, index) => (
            <SkillOrb
              key={skill.label}
              Icon={skill.Icon}
              label={skill.label}
              color={skill.color}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

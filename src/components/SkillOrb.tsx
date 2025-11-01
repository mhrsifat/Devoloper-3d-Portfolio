import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillOrbProps {
  Icon: LucideIcon;
  label: string;
  color: string;
  delay?: number;
}

export function SkillOrb({ Icon, label, color, delay = 0 }: SkillOrbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.15, y: -5 }}
      className="flex flex-col items-center gap-2 sm:gap-3 cursor-pointer"
    >
      <div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          background: `radial-gradient(circle, ${color}40, ${color}10)`,
          boxShadow: `0 0 20px ${color}80, inset 0 0 15px ${color}30`
        }}
      >
        <Icon className="w-8 h-8 sm:w-10 sm:h-10" style={{ color }} />
        <div
          className="absolute inset-0 rounded-full animate-[pulse-glow_3s_ease-in-out_infinite]"
          style={{ boxShadow: `0 0 25px ${color}60` }}
        />
      </div>
      <span className="text-xs sm:text-sm opacity-80">{label}</span>
    </motion.div>
  );
}

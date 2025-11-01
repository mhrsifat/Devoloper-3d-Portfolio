import { motion } from 'motion/react';
import { ExternalLink, Star } from 'lucide-react';

interface ProjectPlanetProps {
  title: string;
  description: string;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

export function ProjectPlanet({ title, description, gradient, delay = 0, onClick }: ProjectPlanetProps) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View ${title} project details`}
      className="relative flex flex-col items-center cursor-pointer group w-full max-w-[250px] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 rounded-full"
    >
      <div
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full relative transition-all duration-300"
        style={{
          background: gradient,
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)'
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: '0 0 60px rgba(0, 212, 255, 0.6), inset 0 0 40px rgba(0, 212, 255, 0.2)'
          }}
        />
        {/* Ring decoration */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[50px] sm:w-[180px] sm:h-[60px] rounded-full border-2 border-[#00D4FF]/30 rotate-[-20deg]"
          style={{ borderStyle: 'solid', borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
        />
      </div>
      <div className="mt-4 sm:mt-6 text-center max-w-[200px] px-2">
        <h3 className="mb-2 flex items-center justify-center gap-2 text-base sm:text-lg">
          <Star className="w-4 h-4 text-[#00FFC4] opacity-0 group-hover:opacity-100 transition-opacity" />
          {title}
        </h3>
        <p className="text-xs sm:text-sm opacity-70 leading-relaxed">{description}</p>
        <p className="text-[10px] sm:text-xs opacity-40 mt-2 group-hover:opacity-60 transition-opacity">
          Click to explore →
        </p>
      </div>
    </motion.div>
  );
}

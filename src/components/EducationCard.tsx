import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  description: string;
  delay?: number;
}

export function EducationCard({ degree, institution, year, description, delay = 0 }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="relative p-4 sm:p-6 rounded-2xl border border-[#00D4FF]/30 transition-all duration-300 hover:border-[#00D4FF]/60 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
      style={{
        background: 'rgba(26, 31, 75, 0.4)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#4A1F6B]/20 flex items-center justify-center border border-[#00D4FF]/40 flex-shrink-0">
          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D4FF]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="mb-1 text-base sm:text-lg">{degree}</h3>
          <p className="text-[#00FFC4] mb-1 text-sm sm:text-base">{institution}</p>
          <p className="text-xs sm:text-sm opacity-60 mb-2 sm:mb-3">{year}</p>
          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

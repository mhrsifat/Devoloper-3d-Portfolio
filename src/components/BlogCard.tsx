import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  delay?: number;
  onClick: () => void;
}

export function BlogCard({ title, excerpt, date, readTime, category, imageUrl, delay = 0, onClick }: BlogCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Read blog post: ${title}`}
      className="group h-[380px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#00D4FF]/20 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50 focus:border-[#00D4FF]"
      style={{
        background: 'rgba(26, 31, 75, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      <div className="h-full flex flex-col">
        {/* Feature Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E2A] to-transparent opacity-60" />
          <div className="absolute top-3 left-3">
            <div className="px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-[#00D4FF]/20 to-[#00FFC4]/20 backdrop-blur-md border border-[#00D4FF]/40 text-xs">
              {category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4 sm:p-6">
          <h3 className="mb-2 sm:mb-3 text-base sm:text-lg line-clamp-2">{title}</h3>
          
          <p className="text-xs sm:text-sm opacity-70 line-clamp-3 leading-relaxed mb-auto">
            {excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#00D4FF]/10">
            <div className="flex items-center gap-2 sm:gap-3 text-xs opacity-60">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span className="hidden sm:inline">{date}</span>
                <span className="sm:hidden">{date.split(',')[0]}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {readTime}
              </span>
            </div>
            <span className="text-xs text-[#00D4FF] group-hover:text-[#00FFC4] transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

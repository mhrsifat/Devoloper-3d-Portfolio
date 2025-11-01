import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export function BlogDialog({ isOpen, onClose, title, excerpt, content, date, readTime, category, imageUrl }: BlogDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw] max-h-[95vh] sm:max-h-[90vh] md:max-h-[88vh] bg-[rgba(26,31,75,0.98)] border-[#00D4FF]/30 text-[#E0F7FF] backdrop-blur-xl p-0 gap-0 overflow-hidden flex flex-col">
        {/* Feature Image Header */}
        <div className="relative h-32 xs:h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F4B] via-[#1A1F4B]/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6">
            <div className="inline-block px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-[#00D4FF]/30 to-[#00FFC4]/30 backdrop-blur-md border border-[#00D4FF]/50 text-[10px] sm:text-xs md:text-sm">
              {category}
            </div>
          </div>
        </div>

        {/* Header - Sticky */}
        <DialogHeader className="px-3 sm:px-4 md:px-6 lg:px-8 pt-3 sm:pt-4 md:pt-6 pb-2 sm:pb-3 md:pb-4 border-b border-[#00D4FF]/20 sticky top-0 bg-[rgba(26,31,75,0.98)] z-10 backdrop-blur-xl flex-shrink-0">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <div className="flex-1 min-w-0 pr-8 sm:pr-10">
              <DialogTitle className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent break-words leading-tight">
                {title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mt-1.5 sm:mt-2 md:mt-3 text-[10px] xs:text-xs sm:text-sm opacity-60">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">{readTime}</span>
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-none"
            >
              {/* Excerpt with emphasis */}
              <div className="mb-3 sm:mb-4 md:mb-6 p-2.5 sm:p-3 md:p-4 rounded-lg bg-[rgba(0,212,255,0.05)] border-l-4 border-[#00D4FF]">
                <p className="text-xs xs:text-sm sm:text-base md:text-lg opacity-90 leading-relaxed italic">
                  {excerpt}
                </p>
              </div>

              {/* Full Content */}
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 text-xs xs:text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                {content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[#E0F7FF] break-words">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </ScrollArea>

        {/* Footer - Fixed */}
        <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-4 border-t border-[#00D4FF]/20 bg-[rgba(26,31,75,0.98)] backdrop-blur-xl flex-shrink-0">
          <div className="flex flex-col xs:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
            <p className="text-[10px] xs:text-xs sm:text-sm opacity-60 text-center xs:text-left">
              Thanks for reading!
            </p>
            <button
              onClick={onClose}
              className="w-full xs:w-auto px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#00D4FF]/20 to-[#00FFC4]/20 border border-[#00D4FF]/40 hover:border-[#00D4FF]/60 transition-all text-[10px] xs:text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50"
            >
              Close
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

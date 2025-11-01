import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription
} from './ui/dialog';
import {
  ScrollArea
} from './ui/scroll-area';
import {
  Badge
} from './ui/badge';
import {
  Calendar,
  Code,
  ExternalLink,
  Github,
  Star,
  Users,
  X
} from 'lucide-react';
import {
  motion
} from 'motion/react';

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  fullDescription: string;
  featuredImage: string;
  additionalImages?: ProjectImage[];
  tags: string[];
  technologies: string[];
  date: string;
  role: string;
  teamSize?: string;
  liveUrl?: string;
  githubUrl?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  fullDescription,
  featuredImage,
  additionalImages = [],
  tags,
  technologies,
  date,
  role,
  teamSize,
  liveUrl,
  githubUrl,
  stats = []
}: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw] max-h-[95vh] sm:max-h-[92vh] bg-[rgba(26,31,75,0.98)] border-[#00D4FF]/30 text-[#E0F7FF] backdrop-blur-xl p-0 gap-0 overflow-hidden flex flex-col" aria-describedby="project-description">
        {/* Visually Hidden Accessibility Elements */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription id="project-description" className="sr-only">
          {description}
        </DialogDescription>

        {/* Custom Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-1.5 sm:p-2 rounded-full bg-[rgba(26,31,75,0.8)] border border-[#00D4FF]/30 hover:border-[#00D4FF] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50"
          aria-label="Close"
          >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Scrollable Content - Now includes featured image */}
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="space-y-0">
            {/* Featured Image - now with lazy load and fade-in */}
            <motion.div
              className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden"
              initial={ { opacity: 0, y: 20 }}
              whileInView={ { opacity: 1, y: 0 }}
              viewport={ { once: true, amount: 0.2 }}
              transition={ { duration: 0.6 }}
              >
              <img
              src={featuredImage}
              alt={title}
              loading="lazy" // lazy load
              className="w-full h-full object-cover"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F4B] via-[#1A1F4B]/70 to-transparent" />

            {/* Tags Overlay */}
            <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-[#00D4FF]/30 to-[#00FFC4]/30 backdrop-blur-md border-[#00D4FF]/50 text-[10px] xs:text-xs"
                  >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
              {githubUrl && (
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={ { scale: 1.05 }}
                  whileTap={ { scale: 0.95 }}
                  className="p-2 sm:p-3 rounded-full bg-[rgba(26,31,75,0.8)] backdrop-blur-md border border-[#00D4FF]/40 hover:border-[#00D4FF] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                  aria-label="View on GitHub"
                  >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={ { scale: 1.05 }}
                  whileTap={ { scale: 0.95 }}
                  className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all"
                  aria-label="View live project"
                  >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
            <motion.div
              initial={ { opacity: 0, y: 20 }}
              animate={ { opacity: 1, y: 0 }}
              transition={ { duration: 0.4 }}
              className="space-y-4 sm:space-y-6"
              >
              {/* Header Info */}
              <div className="pb-3 sm:pb-4 border-b border-[#00D4FF]/20">
                <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent mb-2 sm:mb-3 break-words leading-tight pr-8 sm:pr-12">
                  {title}
                </h2>
                <p className="text-xs xs:text-sm sm:text-base opacity-70 mb-3 sm:mb-4 leading-relaxed">
                  {description}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-[10px] xs:text-xs sm:text-sm opacity-60">
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    {date}
                  </span>
                  <span className="flex items-center gap-1 sm:gap-1.5">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    {role}
                  </span>
                  {teamSize && (
                    <span className="flex items-center gap-1 sm:gap-1.5">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      {teamSize}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Stats */}
              {stats.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-4 rounded-lg bg-[rgba(0,212,255,0.05)] border border-[#00D4FF]/20 hover:border-[#00D4FF]/40 transition-all"
                      >
                      <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent mb-1" dangerouslySetInnerHTML={{ __html: stat.value }} >
                      
                      </p>
                      <p className="text-[10px] xs:text-xs opacity-60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Full Description */}
              <div>
                <h3 className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF]" />
                  Project Overview
                </h3>
                <div className="space-y-2 sm:space-y-3 text-xs xs:text-sm sm:text-base opacity-90 leading-relaxed">
                  {fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="break-words">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-[#00D4FF]/40 text-[10px] xs:text-xs bg-[rgba(0,212,255,0.05)] hover:bg-[rgba(0,212,255,0.1)] transition-all"
                      >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional Images */}
              {additionalImages.length > 0 && (
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {additionalImages.map((image, index) => (
                      <motion.div
                        key={index}
                        className="group relative rounded-lg overflow-hidden border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all"
                        initial={ { opacity: 0, y: 20 }}
                        whileInView={ { opacity: 1, y: 0 }}
                        viewport={ { once: true, amount: 0.2 }}
                        transition={ { duration: 0.5, delay: index * 0.1 }}
                        >
                        <img
                        src={image.url}
                        alt={image.caption}
                        loading="lazy" // lazy load
                        className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-[#0A0E2A] to-transparent">
                          <p className="text-[10px] xs:text-xs sm:text-sm opacity-90">
                            {image.caption}
                          </p>
                        </div>
                      )}
                    </motion.div>
                    ))}
                </div>
              </div>
            )}

            {/* All Tags */}
            <div>
              <h3 className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-[#00D4FF]/20 to-[#00FFC4]/20 border-[#00D4FF]/40 text-[10px] xs:text-xs"
                    >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ScrollArea>
  </DialogContent>
</Dialog>
);
}
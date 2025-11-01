import { Dialog, DialogContent, DialogTrigger, DialogTitle } from './ui/dialog';
import { motion } from 'motion/react';
import { MapPin } from "lucide-react";
import { profile, links } from '../data';

interface ProfileDialogProps {
  children: React.ReactNode;
}

export function ProfileDialog({ children }: ProfileDialogProps) {
  const profileImage = profile.pic;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md w-[95vw] sm:w-[90vw] md:w-full max-h-[90vh] overflow-y-auto bg-[rgba(26,31,75,0.95)] border-[#00D4FF]/30 text-[#E0F7FF] backdrop-blur-xl">
        {/* Add DialogTitle for accessibility - visually hidden but available to screen readers */}
        <DialogTitle className="sr-only">
          {profile.profileOfWho}
        </DialogTitle>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="relative"
            >
              <div
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#00D4FF]/50 relative"
                style={{
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.4), inset 0 0 20px rgba(0, 212, 255, 0.2)'
                }}
              >
                <img
                  src={profileImage}
                  alt="Jane Cosmic"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full animate-[pulse-glow_3s_ease-in-out_infinite] pointer-events-none"
                style={{ boxShadow: '0 0 30px rgba(0, 255, 196, 0.3)' }}
              />
            </motion.div>
          </div>

          {/* Name and Title */}
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent px-2">
              {profile.name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base opacity-80 px-2">
              {profile.profileTitle}
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm opacity-60">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Brief Bio */}
          <div className="bg-[rgba(26,31,75,0.5)] rounded-xl p-3 sm:p-4 border border-[#00D4FF]/20">
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">
              {profile.bioDescription}
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm opacity-60 uppercase tracking-wider">Connect With Me</h3>
            <div className="space-y-2">
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5, backgroundColor: 'rgba(0, 212, 255, 0.1)' }}
                  className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg border border-[#00D4FF]/20 transition-all hover:border-[#00D4FF]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#00FFC4]/20 flex items-center justify-center border border-[#00D4FF]/30 group-hover:border-[#00D4FF]/60 transition-all flex-shrink-0">
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm opacity-60">{link.label}</p>
                    <p className="text-xs sm:text-sm truncate">{link.username}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-[#00D4FF]/20">
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent">
                {profile.stats.projects}+
              </p>
              <p className="text-[10px] sm:text-xs opacity-60">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent">
                {profile.stats.expYears}+
              </p>
              <p className="text-[10px] sm:text-xs opacity-60">Years Exp</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent">
                {profile.stats.clients}+
              </p>
              <p className="text-[10px] sm:text-xs opacity-60">Clients</p>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
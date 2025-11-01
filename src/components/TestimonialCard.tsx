import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { useState } from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  image: string;
  delay?: number;
}

export function TestimonialCard({ name, role, company, testimonial, rating, image, delay = 0 }: TestimonialCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="h-[380px] sm:h-[400px] perspective-1000"
    >
      <div
        className="relative w-full h-full cursor-pointer"
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Testimonial from ${name}. Press enter to flip card.`}
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)'
        }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full h-full"
        >
          {/* Front of card */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-[#00D4FF]/20 hover:border-[#00D4FF]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              background: 'rgba(26, 31, 75, 0.6)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="h-full flex flex-col p-6 sm:p-8">
              {/* Quote Icon */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#00FFC4]/20 flex items-center justify-center border border-[#00D4FF]/30">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-[#00D4FF]" />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1 mb-4 sm:mb-6">
                <p className="text-sm sm:text-base leading-relaxed opacity-90 line-clamp-6">
                  "{testimonial}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      i < rating
                        ? 'fill-[#00FFC4] text-[#00FFC4]'
                        : 'text-[#00D4FF]/30'
                    }`}
                  />
                ))}
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-[#00D4FF]/50">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)' }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base truncate">{name}</h4>
                  <p className="text-xs sm:text-sm opacity-70 truncate">{role}</p>
                  <p className="text-xs opacity-50 truncate">{company}</p>
                </div>
              </div>

              {/* Flip Indicator */}
              <div className="absolute bottom-4 right-4 text-xs opacity-40">
                Click to flip
              </div>
            </div>
          </div>

          {/* Back of card - Updated background to match front */}
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden border border-[#00FFC4]/20 hover:border-[#00FFC4]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,196,0.3)]"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              background: 'rgba(26, 31, 75, 0.6)', // Same as front
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <div className="h-full flex flex-col p-6 sm:p-8">
              {/* Image */}
              <div className="relative mb-6 flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full overflow-hidden border-4 border-[#00FFC4]/50">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-full mx-auto w-24 h-24 sm:w-28 sm:h-28"
                  style={{ boxShadow: '0 0 40px rgba(0, 255, 196, 0.6)' }}
                />
              </div>

              {/* Info */}
              <div className="text-center flex-1 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl mb-2 bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent">
                  {name}
                </h3>
                <p className="text-sm sm:text-base mb-1 opacity-90">{role}</p>
                <p className="text-xs sm:text-sm opacity-70 mb-4">{company}</p>
                
                {/* Additional Details */}
                <div className="space-y-2 mt-4">
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rating
                            ? 'fill-[#00FFC4] text-[#00FFC4]'
                            : 'text-[#00D4FF]/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs opacity-60">
                    {rating}.0 out of 5 stars
                  </p>
                </div>
              </div>

              {/* Flip back indicator */}
              <div className="text-center text-xs opacity-40 mt-4">
                Click to flip back
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
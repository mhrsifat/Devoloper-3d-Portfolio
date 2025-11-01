import { TestimonialCard } from './TestimonialCard';
import { motion } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../data';

export function TestimonialsSection() {

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00FFC4]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#00FFC4]/20 flex items-center justify-center border border-[#00D4FF]/30 animate-pulse-glow">
              <MessageSquareQuote className="w-8 h-8 sm:w-10 sm:h-10 text-[#00D4FF]" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent px-4">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base md:text-lg opacity-70 max-w-2xl mx-auto px-4">
            Don't just take my word for it—hear what clients have to say about our collaborations
          </p>
          <p className="text-xs sm:text-sm opacity-50 mt-2">
            Click on any card to flip and see more details
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-sm sm:text-base opacity-70 mb-4">
            Want to be the next success story?
          </p>
          <a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all duration-300 text-sm sm:text-base"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}

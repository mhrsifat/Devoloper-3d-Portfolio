import { motion } from 'motion/react';

export function BlackholeLoader() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="relative w-32 h-32">
        {/* Outer orbit ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#00D4FF]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Middle orbit ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-[#00FFC4]/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner orbit ring */}
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-[#7B4B8B]/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Blackhole center */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A0E2A] via-[#1A1F4B] to-[#0A0E2A]"
            style={{
              boxShadow: `
                0 0 30px rgba(0, 212, 255, 0.8),
                0 0 60px rgba(0, 255, 196, 0.6),
                inset 0 0 20px rgba(0, 0, 0, 0.9)
              `
            }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 255, 196, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.9)',
                '0 0 50px rgba(0, 212, 255, 1), 0 0 100px rgba(0, 255, 196, 0.8), inset 0 0 30px rgba(0, 0, 0, 1)',
                '0 0 30px rgba(0, 212, 255, 0.8), 0 0 60px rgba(0, 255, 196, 0.6), inset 0 0 20px rgba(0, 0, 0, 0.9)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Orbiting particles */}
        {[0, 120, 240].map((angle, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#00FFC4]"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-4px',
              marginLeft: '-4px'
            }}
            animate={{
              rotate: 360,
              x: [
                Math.cos((angle * Math.PI) / 180) * 50,
                Math.cos(((angle + 360) * Math.PI) / 180) * 50
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * 50,
                Math.sin(((angle + 360) * Math.PI) / 180) * 50
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.33
            }}
          />
        ))}
        
        {/* Accretion disk effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 30%, rgba(0, 212, 255, 0.1) 60%, transparent 100%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

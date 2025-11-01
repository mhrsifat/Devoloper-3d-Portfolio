import {
  ParticleField
} from './ParticleField';
import {
  Input
} from './ui/input';
import {
  Textarea
} from './ui/textarea';
import {
  Mail,
  Send,
  CheckCircle
} from 'lucide-react';
import {
  motion,
  AnimatePresence
} from 'motion/react';
import {
  useState,
  useRef,
  useEffect
} from 'react';
import {
  toast
} from 'sonner@2.0.3';

export function ContactSection() {
  const [isHolding,
    setIsHolding] = useState(false);
  const [progress,
    setProgress] = useState(0);
  const [name,
    setName] = useState('');
  const [email,
    setEmail] = useState('');
  const [message,
    setMessage] = useState('');
  const [isSent,
    setIsSent] = useState(false);
  const [showBeam,
    setShowBeam] = useState(false);
  const holdTimerRef = useRef < NodeJS.Timeout | null > (null);
  const progressTimerRef = useRef < NodeJS.Timeout | null > (null);

  const handleHoldStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (isSent) return;

    if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);

    setIsHolding(true);
    setShowBeam(true);
    setProgress(0);

    let currentProgress = 0;
    progressTimerRef.current = setInterval(() => {
      currentProgress += (100 / 70); // 7 seconds = 70 intervals of 100ms
      setProgress(Math.min(currentProgress, 100));
    }, 100);

    holdTimerRef.current = setTimeout(async () => {
      try {
        setIsSent(true);
        setIsHolding(false);
        setProgress(100);

        await sendMessage(name.trim(), email.trim(), message.trim());
      } catch (err) {
        console.error(err);
        toast.error('Message failed. Try again.');
      } finally {
        setTimeout(() => {
          setShowBeam(false);
          setTimeout(() => {
            setIsSent(false);
            setProgress(0);
          }, 1000);
        }, 1500);
      }
    }, 7000);
  };

  const handleHoldEnd = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
    }

    if (!isSent) {
      setIsHolding(false);
      setProgress(0);
      setTimeout(() => setShowBeam(false), 300);
    }
  };

  const sendMessage = async (name: string, email: string, message: string) => {
    try {
      if (!name.trim() || !email.trim() || !message.trim()) {
        throw new Error('All fields are required');
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email address');
      }

      const browserInfo = navigator.userAgent;
      const lang = navigator.language || 'unknown';
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown';
    
    
    const api = import.meta.env.VITE_API_BASE;
      const res = await fetch( api + '/send-message', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, message, browser: browserInfo, lang, timezone
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (data.success) {
        toast.success('Message sent successfully! ✨');
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (err: any) {
      console.error('Send message error:', err);
      toast.error(err.message || 'Something went wrong!');
    }
  };


  useEffect(() => {
    return () => {
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  },
    []);

  return (
    <section className="relative py-24 px-4 sm:px-6 min-h-[600px] flex items-center">
      <ParticleField />

      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.div
          initial={ { opacity: 0,
            y: 20 }}
          whileInView={ { opacity: 1,
            y: 0 }}
          viewport={ { once: true }}
          transition={ { duration: 0.6 }}
          >
          <div className="text-center mb-8 sm:mb-12">
            <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-[#00D4FF]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent px-4">
              Get In Touch
            </h2>
            <p className="opacity-70 text-sm sm:text-base px-4">
              Let's build something amazing together
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 opacity-80 text-sm sm:text-base">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/50 transition-all"
                  />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 opacity-80 text-sm sm:text-base">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/50 transition-all"
                  />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 opacity-80 text-sm sm:text-base">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/50 transition-all resize-none"
                />
            </div>

            <div className="relative">
              <motion.button
                type="button"
                onMouseDown={handleHoldStart}
                onMouseUp={handleHoldEnd}
                onMouseLeave={handleHoldEnd}
                onTouchStart={handleHoldStart}
                onTouchEnd={handleHoldEnd}
                disabled={isSent}
                className="relative w-full py-3 sm:py-4 px-6 rounded-full overflow-hidden transition-all duration-300 touch-none"
                style={ {
                  background: isSent
                  ? 'linear-gradient(to right, #00FFC4, #00D4FF)': 'linear-gradient(to right, #00D4FF, #00FFC4)'
                }}
                >
                {/* Light beam effect */}
                <AnimatePresence>
                  {showBeam && (
                    <>
                      <motion.div
                        initial={ { opacity: 0 }}
                        animate={ { opacity: 1 }}
                        exit={ { opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-[#00D4FF]/0 via-[#00D4FF]/50 to-[#00FFC4]/0"
                        style={ { animation: 'light-beam 1s ease-in-out infinite' }}
                        />
                      <motion.div
                        className="absolute inset-0"
                        animate={ {
                          boxShadow: [
                            '0 0 20px rgba(0, 212, 255, 0.5)',
                            '0 0 60px rgba(0, 255, 196, 0.8)',
                            '0 0 20px rgba(0, 212, 255, 0.5)'
                          ]
                        }}
                        transition={ { duration: 1, repeat: Infinity }}
                        />
                    </>
                  )}
                </AnimatePresence>

                {/* Progress overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00FFC4] to-[#00D4FF] origin-left"
                  initial={ { scaleX: 0 }}
                  animate={ { scaleX: progress / 100 }}
                  transition={ { duration: 0.1 }}
                  style={ {
                    opacity: isHolding ? 0.6: 0,
                    filter: 'blur(8px)'
                  }}
                  />

                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  {isSent ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Sent!
                    </>
                  ): (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isHolding ? `Hold (${Math.ceil((7 - progress / 100 * 7) * 10) / 10}s)`: 'Hold to Send'}
                    </>
                  )}
                </span>

                {/* Progress ring */}
                {isHolding && !isSent && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={ { transform: 'rotate(-90deg)' }}>
                    <circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="3"
                      />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="48%"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeDasharray={`${2 * Math.PI * 48}%`}
                      initial={ { strokeDashoffset: `${2 * Math.PI * 48}%` }}
                      animate={ { strokeDashoffset: `${2 * Math.PI * 48 * (1 - progress / 100)}%` }}
                      transition={ { duration: 0.1 }}
                      />
                  </svg>
                )}
              </motion.button>

              {!isHolding && !isSent && (
                <p className="text-center text-xs sm:text-sm opacity-50 mt-2">
                  Hold button for 7 seconds to send
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
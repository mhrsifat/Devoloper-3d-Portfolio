import { CosmicHero } from "./components/CosmicHero";
import { EducationSection } from "./components/EducationSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { ProfileDialog } from "./components/ProfileDialog";
import { Menu, X } from "lucide-react";
import { useState, useRef } from "react";
import { Toaster } from "./components/ui/sonner";
import {stats as blogStats, profile, links } from './data';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileImage = profile.pic;

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    ...(blogStats.totalBlogs > 0 ? [{ href: "#blog", label: "Blog" }] : []),
    { href: "#contact", label: "Contact" },
  ];
  
  
  const allowedLinksForFooter = ['GitHub', 'LinkedIn', 'Email']; 
  const footerLinks = links.filter(link => allowedLinksForFooter.includes(link.label));

  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#0A0E2A] text-[#E0F7FF] overflow-x-hidden">
      <Toaster position="top-center" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0E2A]/80 border-b border-[#00D4FF]/20">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          {/* Profile Photo with Dialog */}
          <div className="flex items-center gap-3">
            <ProfileDialog>
              <button
                className="group relative cursor-pointer"
                aria-label="View profile"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#00D4FF]/50 group-hover:border-[#00D4FF] transition-all duration-300 relative">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)" }}
                />
              </button>
            </ProfileDialog>
            <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent">
              { profile.name }
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const target = document.querySelector(link.href);
                  target?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-[#00D4FF] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:text-[#00D4FF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#00D4FF]/20 bg-[#0A0E2A]/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const target = document.querySelector(link.href);
                    target?.scrollIntoView({ behavior: "smooth" });
                    setIsMobileMenuOpen(false);
                  }}
                  className="hover:text-[#00D4FF] transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <div id="home">
        <CosmicHero
          onViewWorkClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      <div id="education">
        <EducationSection />
      </div>

      <div id="projects">
        <ProjectsSection ref={projectsRef} />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="blog">
        <BlogSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
    <footer className="relative py-12 px-4 sm:px-6 border-t border-[#00D4FF]/20">
      <div className="container mx-auto text-center">
        <p className="opacity-60 text-sm sm:text-base">
          © 2025 MhrSifat. Designed with ✨ and code.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {footerLinks.map(link => (
            <a
              key={link.label}
              href={link.url}
              className="opacity-60 hover:opacity-100 hover:text-[#00D4FF] transition-all text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
    </div>
  );
}

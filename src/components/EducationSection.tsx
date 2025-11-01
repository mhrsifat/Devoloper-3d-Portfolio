import { EducationCard } from './EducationCard';
import { education } from '../data';

export function EducationSection() {

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent px-4">
          Education & Certifications
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

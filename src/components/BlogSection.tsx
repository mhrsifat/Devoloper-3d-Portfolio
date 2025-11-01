import { BlogCard } from './BlogCard';
import { EnhancedBlogDialog } from './EnhancedBlogDialog';
import { BlackholeLoader } from './BlackholeLoader';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { blogs, BlogPost } from '../data';


export function BlogSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demonstration of BlackholeLoader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const visiblePosts = blogs.slice(0, visibleCount);
  const hasMore = visibleCount < blogs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, blogs.length));
  };

  return ( 
    <section className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {blogs.length > 0 && ( 
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-12 sm:mb-16 bg-gradient-to-r from-[#7B4B8B] to-[#00D4FF] bg-clip-text text-transparent px-4">
          Cosmic Insights
        </h2>
         )
          }
        
        {isLoading ? (
          <BlackholeLoader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visiblePosts.map((post, index) => (
              <BlogCard
                key={index}
                {...post}
                delay={index * 0.1}
                onClick={() => setSelectedBlog(post)}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        {!isLoading && hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={handleLoadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#7B4B8B] to-[#00D4FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span>Load More Blogs</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Blog Dialog */}
      {selectedBlog && (
        <EnhancedBlogDialog
          isOpen={!!selectedBlog}
          onClose={() => setSelectedBlog(null)}
          {...selectedBlog}
        />
      )}
    </section>
  );
}

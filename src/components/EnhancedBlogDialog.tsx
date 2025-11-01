import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Calendar, Clock, ThumbsUp, ThumbsDown, MessageCircle, Send, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  replies: Comment[];
}

interface BlogImage {
  url: string;
  caption?: string;
}

interface EnhancedBlogDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  excerpt: string;
  content: string;
  images?: BlogImage[];
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export function EnhancedBlogDialog({
  isOpen,
  onClose,
  title,
  excerpt,
  content,
  images = [],
  date,
  readTime,
  category,
  imageUrl
}: EnhancedBlogDialogProps) {
  const [upvotes, setUpvotes] = useState(42);
  const [downvotes, setDownvotes] = useState(3);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Alex Chen',
      content: 'Great article! Really helped me understand the concepts better.',
      timestamp: '2 hours ago',
      replies: [
        {
          id: '1-1',
          author: 'Jane Cosmic',
          content: 'Thanks Alex! Glad you found it helpful.',
          timestamp: '1 hour ago',
          replies: []
        }
      ]
    },
    {
      id: '2',
      author: 'Sarah Miller',
      content: 'Would love to see more examples on this topic. Excellent write-up!',
      timestamp: '5 hours ago',
      replies: []
    }
  ]);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [userName, setUserName] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      if (type === 'up') setUpvotes(upvotes - 1);
      else setDownvotes(downvotes - 1);
      setUserVote(null);
      toast.info('Vote removed');
    } else {
      if (userVote === 'up') setUpvotes(upvotes - 1);
      else if (userVote === 'down') setDownvotes(downvotes - 1);
      
      if (type === 'up') {
        setUpvotes(upvotes + 1);
        toast.success('Upvoted!');
      } else {
        setDownvotes(downvotes + 1);
        toast.info('Downvoted');
      }
      setUserVote(type);
    }
  };

  const handleAddComment = () => {
    if (!userName.trim() || !newComment.trim()) {
      toast.error('Please enter your name and comment');
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: userName,
      content: newComment,
      timestamp: 'Just now',
      replies: []
    };

    setComments([comment, ...comments]);
    setNewComment('');
    setShowCommentForm(false);
    toast.success('Comment added!');
  };

  const handleAddReply = (commentId: string) => {
    if (!userName.trim() || !replyContent.trim()) {
      toast.error('Please enter your name and reply');
      return;
    }

    const reply: Comment = {
      id: Date.now().toString(),
      author: userName,
      content: replyContent,
      timestamp: 'Just now',
      replies: []
    };

    const addReplyToComment = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, replies: [...comment.replies, reply] };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: addReplyToComment(comment.replies) };
        }
        return comment;
      });
    };

    setComments(addReplyToComment(comments));
    setReplyContent('');
    setReplyingTo(null);
    toast.success('Reply added!');
  };

  const renderComment = (comment: Comment, depth: number = 0) => (
    <div key={comment.id} className={depth > 0 ? 'ml-4 sm:ml-6 md:ml-8 mt-3' : 'mt-4'}>
      <div className="p-3 sm:p-4 rounded-lg bg-[rgba(0,212,255,0.05)] border border-[#00D4FF]/10 hover:border-[#00D4FF]/20 transition-all">
        <div className="flex items-start gap-2 sm:gap-3 mb-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#00FFC4]/30 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF]" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm">{comment.author}</span>
              <span className="text-[10px] sm:text-xs opacity-50">{comment.timestamp}</span>
            </div>
            <p className="text-xs sm:text-sm opacity-90 mt-1 break-words leading-relaxed">
              {comment.content}
            </p>
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="text-[10px] sm:text-xs text-[#00D4FF] hover:text-[#00FFC4] mt-2 transition-colors"
            >
              Reply
            </button>
          </div>
        </div>

        {/* Reply Form */}
        <AnimatePresence>
          {replyingTo === comment.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2"
            >
              <Input
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 text-xs sm:text-sm"
              />
              <Textarea
                placeholder="Write your reply..."
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                rows={2}
                className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 resize-none text-xs sm:text-sm"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => handleAddReply(comment.id)}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
                >
                  Send Reply
                </button>
                <button
                  onClick={() => setReplyingTo(null)}
                  className="px-3 py-1.5 rounded-lg bg-[rgba(26,31,75,0.6)] border border-[#00D4FF]/20 text-xs sm:text-sm hover:border-[#00D4FF]/40 transition-all"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Render Replies */}
      {comment.replies.length > 0 && (
        <div className="border-l-2 border-[#00D4FF]/20 pl-2 sm:pl-3 md:pl-4">
          {comment.replies.map(reply => renderComment(reply, depth + 1))}
        </div>
      )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[98vw] sm:w-[95vw] md:w-[90vw] lg:w-[85vw] max-h-[95vh] sm:max-h-[92vh] bg-[rgba(26,31,75,0.98)] border-[#00D4FF]/30 text-[#E0F7FF] backdrop-blur-xl p-0 gap-0 overflow-hidden flex flex-col" aria-describedby="blog-description">
        {/* Visually Hidden Accessibility Elements */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription id="blog-description" className="sr-only">
          {excerpt}
        </DialogDescription>

        {/* Custom Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-1.5 sm:p-2 rounded-full bg-[rgba(26,31,75,0.8)] border border-[#00D4FF]/30 hover:border-[#00D4FF] transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[#00D4FF]/50"
          aria-label="Close"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Scrollable Content - Now includes featured image and header */}
        <ScrollArea className="flex-1 overflow-y-auto">
          <div className="space-y-0">
            {/* Featured Image Header - Now inside scroll area */}
            <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F4B] via-[#1A1F4B]/50 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6">
                <Badge className="bg-gradient-to-r from-[#00D4FF]/30 to-[#00FFC4]/30 backdrop-blur-md border-[#00D4FF]/50 text-[10px] xs:text-xs sm:text-sm">
                  {category}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Header */}
                <div className="pb-3 sm:pb-4 border-b border-[#00D4FF]/20">
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent mb-2 sm:mb-3 break-words leading-tight pr-8 sm:pr-12">
                    {title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-[10px] xs:text-xs sm:text-sm opacity-60 mb-3 sm:mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      {date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      {readTime}
                    </span>
                  </div>

                  {/* Voting Section */}
                  <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleVote('up')}
                      className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-all ${
                        userVote === 'up'
                          ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#00FFC4]/20 border-[#00D4FF]'
                          : 'bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
                      }`}
                      aria-label="Upvote"
                    >
                      <ThumbsUp className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${userVote === 'up' ? 'text-[#00D4FF]' : ''}`} />
                      <span className="text-xs sm:text-sm">{upvotes}</span>
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleVote('down')}
                      className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-all ${
                        userVote === 'down'
                          ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#00FFC4]/20 border-[#00D4FF]'
                          : 'bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/20 hover:border-[#00D4FF]/40'
                      }`}
                      aria-label="Downvote"
                    >
                      <ThumbsDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${userVote === 'down' ? 'text-[#00D4FF]' : ''}`} />
                      <span className="text-xs sm:text-sm">{downvotes}</span>
                    </motion.button>

                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-[rgba(26,31,75,0.4)] border border-[#00D4FF]/20">
                      <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{comments.length}</span>
                    </div>
                  </div>
                </div>

                {/* Excerpt */}
                <div className="p-3 sm:p-4 rounded-lg bg-[rgba(0,212,255,0.05)] border-l-4 border-[#00D4FF]">
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg opacity-90 leading-relaxed italic">
                    {excerpt}
                  </p>
                </div>

                {/* Main Content */}
                <div className="space-y-3 sm:space-y-4 text-xs xs:text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                  {content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="break-words">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Optional Images */}
                {images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {images.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden border border-[#00D4FF]/20">
                        <img src={img.url} alt={img.caption || `Image ${index + 1}`} className="w-full h-48 sm:h-56 object-cover" />
                        {img.caption && (
                          <p className="p-2 sm:p-3 text-[10px] xs:text-xs sm:text-sm opacity-70 bg-[rgba(0,212,255,0.05)]">
                            {img.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Thanks for Reading */}
                <div className="text-center py-4 sm:py-6 border-y border-[#00D4FF]/20">
                  <p className="text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] bg-clip-text text-transparent">
                    ✨ Thanks for reading! ✨
                  </p>
                  <p className="text-xs sm:text-sm opacity-60 mt-2">
                    Found this helpful? Share your thoughts below
                  </p>
                </div>

                {/* Comments Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF]" />
                      Comments ({comments.length})
                    </h3>
                    <button
                      onClick={() => setShowCommentForm(!showCommentForm)}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
                    >
                      Add Comment
                    </button>
                  </div>

                  {/* Add Comment Form */}
                  <AnimatePresence>
                    {showCommentForm && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-4 space-y-2 sm:space-y-3"
                      >
                        <Input
                          placeholder="Your name"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 text-xs sm:text-sm"
                        />
                        <Textarea
                          placeholder="Share your thoughts..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          rows={3}
                          className="bg-[rgba(26,31,75,0.4)] border-[#00D4FF]/30 resize-none text-xs sm:text-sm"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={handleAddComment}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-[#00D4FF] to-[#00FFC4] text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all"
                          >
                            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                            Post Comment
                          </button>
                          <button
                            onClick={() => setShowCommentForm(false)}
                            className="px-3 sm:px-4 py-2 rounded-lg bg-[rgba(26,31,75,0.6)] border border-[#00D4FF]/20 text-xs sm:text-sm hover:border-[#00D4FF]/40 transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Comments List */}
                  <div className="space-y-3 sm:space-y-4">
                    {comments.map(comment => renderComment(comment))}
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
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../constants.ts';
import { Post } from '../types.ts';

const BlogCard = ({ post }: { post: Post }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform group"
  >
    <Link to={`/blog/${post.id}`} className="no-underline">
      <div className="h-48 bg-white/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-white/5 to-white/0">
        {post.emoji}
      </div>
      <div className="p-6">
        <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan mb-2 block">{post.category}</span>
        <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-neon-cyan transition-colors text-white">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-neon-pink font-bold text-sm">
          Read Alpha <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  </motion.article>
);

export const Blog = () => {
  return (
    <main className="pt-32 px-6 md:px-10 pb-20 container mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-6 text-white">
          The <span className="neon-text">Alpha</span> Feed 📡
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-body leading-relaxed">
          Daily drops on how to automate your income, leverage AI, and escape the 9-5 matrix. No filler, just pure signal.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

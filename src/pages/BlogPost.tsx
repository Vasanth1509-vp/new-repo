import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../styles/BlogPost.css';

interface BlogContent {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // This would typically come from an API or CMS
  const blogPosts: Record<string, BlogContent> = {
    "how-to-become-servicenow-developer": {
      id: "how-to-become-servicenow-developer",
      title: "How to Become a ServiceNow Developer",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Career Guide",
      content: [
        "Starting a career as a ServiceNow developer is an exciting journey into one of the fastest-growing enterprise platforms. This comprehensive guide will walk you through the essential steps to become a successful ServiceNow developer.",
        
        "1. Understanding the Basics",
        "Before diving into ServiceNow development, it's crucial to have a solid foundation in:",
        "• JavaScript programming",
        "• HTML and CSS",
        "• Web services and REST APIs",
        "• Basic database concepts",
        
        "2. Learning ServiceNow Fundamentals",
        "Start with the ServiceNow Fundamentals course, which covers:",
        "• Platform navigation",
        "• Basic configuration",
        "• Form layouts and lists",
        "• Workflow fundamentals",
        
        "3. Getting Certified",
        "Obtain these essential certifications:",
        "• ServiceNow Certified System Administrator (CSA)",
        "• ServiceNow Certified Application Developer (CAD)",
        
        "4. Hands-on Practice",
        "Create a Personal Developer Instance (PDI) and:",
        "• Build custom applications",
        "• Practice scripting",
        "• Experiment with workflows",
        "• Create integrations",
        
        "5. Understanding Best Practices",
        "Learn and follow ServiceNow development best practices:",
        "• Code reusability",
        "• Performance optimization",
        "• Security considerations",
        "• Update set management",
        
        "6. Joining the Community",
        "Engage with the ServiceNow community through:",
        "• ServiceNow Community forums",
        "• Developer meetups",
        "• Online discussion groups",
        "• ServiceNow blogs",
        
        "Remember, becoming a proficient ServiceNow developer takes time and practice. Focus on building a strong foundation and continuously expanding your knowledge through hands-on experience and community engagement."
      ]
    }
  };

  const post = blogPosts[id || ""];

  if (!post) {
    return (
      <div className="blog-post-error">
        <h2>Blog Post Not Found</h2>
        <p>Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="button secondary">
          Return to Blog List
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-post-container">
      <button 
        onClick={() => navigate('/blogs')}
        className="back-button"
      >
        ← Back to Blogs
      </button>

      <article className="blog-post">
        <header className="blog-header">
          <div className="blog-meta">
            <span className="category">{post.category}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
          <div className="post-info">
            <span className="date">{post.date}</span>
          </div>
        </header>

        <div className="blog-content">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="share-section">
        <h2>Share this Article</h2>
        <div className="share-buttons">
          <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button twitter"
          >
            Share on Twitter
          </a>
          <a 
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-button linkedin"
          >
            Share on LinkedIn
          </a>
        </div>
      </section>

      <section className="contact-section">
        <h2>Questions about ServiceNow Development?</h2>
        <p>Let's discuss how I can help you with your ServiceNow journey.</p>
        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default BlogPost; 
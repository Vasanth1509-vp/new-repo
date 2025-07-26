import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blogs.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blogs: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "how-to-become-servicenow-developer",
      title: "How to Become a ServiceNow Developer",
      excerpt: "A comprehensive guide to starting your career in ServiceNow development, including essential skills, certifications, and best practices.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Career Guide",
      image: "developer-guide.jpg"
    },
    {
      id: "servicenow-best-practices",
      title: "ServiceNow Development Best Practices",
      excerpt: "Learn the essential best practices for developing scalable and maintainable applications on the ServiceNow platform.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Development",
      image: "best-practices.jpg"
    },
    {
      id: "itsm-implementation-guide",
      title: "ITSM Implementation Guide",
      excerpt: "A step-by-step guide to implementing ServiceNow ITSM in your organization, from planning to go-live.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Implementation",
      image: "itsm-guide.jpg"
    },
    {
      id: "integration-patterns",
      title: "ServiceNow Integration Patterns",
      excerpt: "Explore common integration patterns and best practices for connecting ServiceNow with external systems.",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Integration",
      image: "integration.jpg"
    }
  ];

  return (
    <div className="blogs-container">
      <h1>Blog Posts</h1>
      <p className="blogs-intro">
        Insights, tutorials, and best practices from my experience with ServiceNow
        development and implementation.
      </p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link 
            to={`/blog/${post.id}`} 
            key={post.id}
            className="blog-card"
          >
            <div className="blog-image">
              <div className="image-placeholder">
                {/* Replace with actual images later */}
                <span>{post.category[0]}</span>
              </div>
            </div>
            
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              
              <h2>{post.title}</h2>
              <p className="excerpt">{post.excerpt}</p>
              
              <div className="blog-footer">
                <span className="date">{post.date}</span>
                <span className="read-more">Read More →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <section className="subscribe-section">
        <h2>Stay Updated</h2>
        <p>Get notified when I publish new articles about ServiceNow development and best practices.</p>
        <a 
          href="https://dev281875.service-now.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          Subscribe to Updates
        </a>
      </section>
    </div>
  );
};

export default Blogs; 
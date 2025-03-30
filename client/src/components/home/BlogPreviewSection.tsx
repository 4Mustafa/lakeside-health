import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Understanding Tenant Rights: What Every Renter Should Know",
    excerpt: "An overview of essential tenant rights, protections against discrimination, and resources for addressing housing issues.",
    date: "June 12, 2023",
    category: "Housing Rights",
    slug: "understanding-tenant-rights"
  },
  {
    title: "The Connection Between Housing and Health: Why Stability Matters",
    excerpt: "Exploring how housing stability impacts physical and mental health outcomes, and strategies for creating healthier living environments.",
    date: "May 28, 2023",
    category: "Housing & Wellbeing",
    slug: "housing-and-health"
  },
  {
    title: "Community Resources: Finding Support Beyond Housing",
    excerpt: "A guide to local resources that complement housing services, including food assistance, healthcare access, and employment support.",
    date: "May 15, 2023",
    category: "Resources",
    slug: "community-resources"
  }
];

const BlogPreviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-800 mb-4">Latest Updates</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">News, resources, and insights from our housing specialists.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-neutral-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden bg-primary/10 flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-neutral-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-neutral-800 mb-2">{post.title}</h3>
                <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                  <a className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors">Read More →</a>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link href="/blog">
            <a className="inline-block bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold px-6 py-3 rounded-lg transition-colors">View All Articles</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;

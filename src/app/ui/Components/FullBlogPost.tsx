import { fetchBlogPost } from "@/app/data/data"
import { Post } from "@/app/data/definiton"
import { notFound } from "next/navigation"
const FullBlogPost = async ({blog_id}: {blog_id: number}) => {
    const res = await fetchBlogPost(blog_id)
    const data = await res.json()
    const blog:Post = data.singleBlog

    if(!blog) {
      notFound()
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-24 sm:py-32">
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {blog && blog.tags.map((tag, i) => (
              <span 
                key={i} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            { blog && blog.blog_title}
          </h1>
        </header>

       
        <article className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed space-y-6">
            {blog && blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

       
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {blog && blog.tags.map((tag, i) => (
              <span 
                key={i} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      </main>
    </div>
  )
}

export default FullBlogPost
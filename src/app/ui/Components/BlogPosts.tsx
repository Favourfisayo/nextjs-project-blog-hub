import { fetchFilteredBlogPosts } from "@/app/data/data"
import Link from "next/link"
// import ReactMarkdown from "react-markdown"
import { Edit, Trash2 } from "lucide-react"
import { deleteBlogPost } from "@/app/lib/actions"
const BlogPosts = async ({ blog_title }: { blog_title: string }) => {
  const data = await fetchFilteredBlogPosts(blog_title)

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {data?.map((data, i) => (
        <article key={i} className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative grow">
            <div className="flex items-start justify-between">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 flex-1 pr-2">
                <Link href={`blogs/${data.id}`}>
                  <span className="absolute inset-0" />
                  {data.blog_title}
                </Link>
              </h3>
              
              {/* Action Icons */}
              <div className="flex items-center gap-2 mt-3 relative z-10">
                <Link
                  href={`/blogs/${data.id}/edit`}
                  className="p-1 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                  title="Edit blog post"
                >
                  <Edit size={16} />
                </Link>
                <button
                  className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                  title="Delete blog post"
                  onClick={deleteBlogPost.bind(null,data.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{data.content}</p>
          </div>

          <div className="mt-8 flex items-center gap-x-4">
            {data.tags?.map((tag, i) => (
              <div key={i} className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}

export default BlogPosts
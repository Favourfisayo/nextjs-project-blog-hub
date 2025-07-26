import { Suspense } from "react"
import BlogPosts from "../ui/Components/BlogPosts"
import { BlogPostsSkeleton } from "../ui/skeleton"
import Search from "../ui/Components/Search"
const page =  async (props: {
  searchParams?: Promise<{
    blog_title?: string
  }>
}) => {
  const searchParams = await props.searchParams
  const blog_title = searchParams?.blog_title || ''
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Markdown Blogs</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Click on a Blog to view it in Markdown</p>
          
        </div>
        <Search/>
        <Suspense key={blog_title} fallback = {<BlogPostsSkeleton/>}>
          <BlogPosts blog_title = {blog_title}/>
        </Suspense>
      </div>
    </div>
    </>
  )
}

export default page
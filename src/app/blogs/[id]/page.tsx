import { Suspense } from "react"
import FullBlogPost from "@/app/ui/Components/FullBlogPost"
import { SingleBlogSkeleton } from "@/app/ui/skeleton"
const page = (props: {params: {id: string}}) => {
  const blog_param = props.params
  const blog_id = parseInt(blog_param.id, 10)

  return (
    <>
    <Suspense fallback={<SingleBlogSkeleton/>}>
    <FullBlogPost blog_id = {blog_id}/>
    </Suspense>
    </>
  )
}

export default page
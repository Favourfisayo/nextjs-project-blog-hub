import { Suspense } from "react"
import FullBlogPost from "@/app/ui/Components/FullBlogPost"
import { SingleBlogSkeleton } from "@/app/ui/skeleton"
const page = (props: {params: {id: number}}) => {
  const blog_param = props.params
  const blog_id = blog_param.id

  return (
    <>
    <Suspense fallback={<SingleBlogSkeleton/>}>
    <FullBlogPost blog_id = {blog_id}/>
    </Suspense>
    </>
  )
}

export default page
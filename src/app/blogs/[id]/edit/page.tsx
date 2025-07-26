import { fetchBlogPostById } from "@/app/data/data"
import Form from '@/app/ui/Components/edit-form'
import { notFound } from "next/navigation"
const page = async (props: {params: Promise<{id:number}>}) => {
    const blog_param = await props.params
    const blog_id = blog_param.id
    const data = await fetchBlogPostById(blog_id)

    if(!data) {
      notFound()
    }
  return (
    <>
      <Form blog_id={blog_id} data={data}/>
    </>
  )
}

export default page
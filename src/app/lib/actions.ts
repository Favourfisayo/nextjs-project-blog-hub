"use server"
import {z} from "zod"
import sql from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
export type State = {
    errors: {
        blog_title?: string[],
        tags?: string[],
        content?: string[]
    },
    message?: string | null
}

const BlogSchema = z.object({
  id: z.number(),
  blog_title: z.coerce.string().min(1, "Please enter a blog title"),
  tags: z.coerce.string().min(1, "Please use at least one tag"),
  content: z.coerce.string().min(1, "You can't have empty content!"),
});


const CreatePost = BlogSchema.omit({id: true})
const UpdateInvoice = BlogSchema.omit({id: true})

export const  createBlogPost = async (prevState:State, formData: FormData) =>  {

    const validatedFields = CreatePost.safeParse({
        blog_title: formData.get("title"),
        tags: formData.get("tags"),
        content: formData.get("content")
    })
    if(!validatedFields.success) {
        const flat = z.flattenError(validatedFields.error);
        return {
            errors: flat.fieldErrors,
            message: "Missing fields. Failed to create Blog"
        }
    }

    const {tags, blog_title, content} = validatedFields.data
    const tagsArray = tags.split(",")

    try{
    await sql`
    INSERT INTO blog_posts (blog_title, content, tags)
    VALUES (${blog_title}, ${content}, ${tagsArray})
    `
    }catch(error) {
        console.error("Database error: ", error)
    }
    revalidatePath("/blogs")
    redirect("/blogs")
}

export const updateBlogPost = async (id:number, prevState: State, formData: FormData) => {
   const validatedFields =  UpdateInvoice.safeParse({
        blog_title: formData.get("title"),
        content: formData.get("content"),
        tags: formData.get("tags")
   })
   
   if(!validatedFields.success) {
    const flat = z.flattenError(validatedFields.error)
    return {
        errors: flat.fieldErrors,
        message: "Failed to Update Blog. Missing Fields.",
    }
   }

   const {tags, blog_title, content} = validatedFields.data

   const tagsArray = tags.split(",")
   try{
   await sql`
   UPDATE blog_posts
   SET blog_title = ${blog_title}, content = ${content}, tags = ${tagsArray}
   WHERE id = ${id}
   `
   }catch(error) {
    console.error("Database Error: ", error)
   }

   revalidatePath("/blogs")
   redirect("/blogs")
}

export const deleteBlogPost = async (id: number) => {
    try{
    await sql `
    DELETE FROM blog_posts WHERE id = ${id}
    `
    }catch(error) {
        console.error(error)
    }
    revalidatePath('/blogs')
}
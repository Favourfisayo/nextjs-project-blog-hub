import sql from "@/app/lib/db"
import { Post } from "@/app/data/definiton"
import { NextResponse } from "next/server"

export const fetchFilteredBlogPosts = async (blog_title:string) => {
    try {
    const data = await sql<Post[]> `
    SELECT id, blog_title, content, tags FROM blog_posts
    WHERE blog_title ILIKE ${`%${blog_title}%`}
    `
    return data
    }catch(error) {
        console.error(error)
        throw new Error('Failed to fetch Blog Posts')
    }
}

export const fetchBlogPost = async (blog_id:number | null) => {
    try {
    const blog = await sql `
    SELECT id, blog_title, content, tags FROM blog_posts
    WHERE id = ${blog_id}
    `
    const singleBlog = blog[0]
    return NextResponse.json({singleBlog})
    }catch(error) {
    console.error(error)
    throw new Error('Failed to fetch Blog Post')
    }
}

export const fetchBlogPostById = async(blog_id:number) => {
    try {
        const data = await sql<Post[]>`
        SELECT id, blog_title, content, tags
        FROM blog_posts WHERE id = ${blog_id}
        `
        const blog_post = data.map(data => ({
            ...data
        }))

        return blog_post[0]
    }catch(error) {
        console.error("An error occurred...")
        throw new Error('Failed to fetch Blog Post(s)')
    }
}
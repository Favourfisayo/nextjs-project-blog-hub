import { NextResponse } from "next/server"
import sql from "@/app/lib/db"
import { Post } from "@/app/data/definiton"

export async function POST(request: Request) {
    try {
    const {title, content, tags} =  await request.json()
    console.log(title, content, tags)
    const data = await sql<Post[]>`
    INSERT INTO blog_posts (blog_title, content, tags)
    VALUES(
    ${title},
    ${content},
    ${sql.array(tags)}
    ) 
    `
    return NextResponse.json({message: `Data saved to db successfully! `}, {status: 400})
    }catch(error) {
    return NextResponse.json({message: "An error occured"}, {status: 400})
    }


}
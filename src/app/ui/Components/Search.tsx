"use client"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
const Search = () => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const handleSearch = (title:string) => {
        const titleParam = new URLSearchParams(searchParams)

        if(title) {
            titleParam.set("blog_title", title)
        } else {
            titleParam.delete("blog_title")
        }

        replace(`${pathname}?${titleParam.toString()}`)
    }
  return (
    <>
      <div className="mt-2 w-full">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            id="post_title"
            name="post_title"
            type="text"
            placeholder="Enter Blog title to search..."
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams?.get("blog_title")?.toString()}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>
    </>
  )
}

export default Search
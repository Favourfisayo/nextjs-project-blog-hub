"use client"
import { updateBlogPost, State } from "@/app/lib/actions"
import { useActionState } from "react"
const EditForm = ({blog_id, data}: {blog_id: number, data: any}) => {
    const updateBlogWithId = updateBlogPost.bind(null, blog_id)
    const initialState: State = {errors: {}, message: null}
    const [state, formAction] = useActionState(updateBlogWithId, initialState)
  return (
    <>
    <form
      action={formAction}
      className="w-full flex flex-col py-24 sm:py-32 items-center justify-center"
    >
      <div className="space-y-12 w-full max-w-4xl px-4">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">Update Blog</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Update the blog below. Markdown is supported in content.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-6">
              <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                Blog Title
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Enter a descriptive title"
                  defaultValue={data?.blog_title}
                  aria-describedby="blog-title"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div id="blog-title" aria-live="polite" aria-atomic="true">
                {
                  state.errors.blog_title && state?.errors?.blog_title.map((error) =>
                  <p key={error} className="text-red-500">{error}</p>
                  )
                }
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="content" className="block text-sm/6 font-medium text-gray-900">
                Content (Markdown supported)
              </label>
              <div className="mt-2">
                <textarea
                  id="content"
                  name="content"
                  rows={10}
                  placeholder="Write your post in markdown..."
                  defaultValue={data?.content}
                  aria-describedby="blog-content"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
               <div id="blog-content" aria-live="polite" aria-atomic="true">
                {
                  state.errors.content && state?.errors?.content.map((error) =>
                  <p key={error} className="text-red-500">{error}</p>
                  )
                }
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="tags" className="block text-sm/6 font-medium text-gray-900">
                Tags
              </label>
              <div className="mt-2">
                <input
                  id="tags"
                  name="tags"
                  type="text"
                  aria-describedby="blog-tags"
                  defaultValue={data?.tags}
                  placeholder="Comma separated e.g. nextjs, react, javascript"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <div id="blog-tags" aria-live="polite" aria-atomic="true">
                {
                  state.errors.tags && state?.errors?.tags.map((error) =>
                  <p key={error} className="text-red-500">{error}</p>
                  )
                }
              </div>
            </div>

          </div>
           <div>
          {
            <p className="text-red-500">{state.message && state.message}</p>
          }
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 w-full max-w-4xl px-4">
        <button
          type="button"
          className="text-sm/6 font-semibold text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </form>
    </>
  )
}

export default EditForm
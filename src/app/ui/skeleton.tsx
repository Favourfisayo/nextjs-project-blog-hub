
export const BlogPostSkeleton = () => {
    return (
        <article
              className="flex flex-col justify-between border border-gray-100 shadow-sm rounded-lg p-6 bg-gray-50"
            >
              <div className="flex flex-col gap-3">
                <div className="h-6 w-3/4 bg-gray-300 rounded" />
                <div className="space-y-2 mt-2">
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                  <div className="h-4 bg-gray-300 rounded w-2/3" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <div className="h-6 w-16 rounded-full bg-gray-300" />
                <div className="h-6 w-12 rounded-full bg-gray-300" />
              </div>
            </article>
    )
}

export const BlogPostsSkeleton = () => {
    return (
        <>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        <BlogPostSkeleton/>
        </div>
        </>
        
    )
}

export const SingleBlogSkeleton = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-24 sm:py-32">


      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Article Header Skeleton */}
        <header className="mb-12">
          {/* Tags Skeleton */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="h-7 bg-gray-200 rounded-full animate-pulse"
                style={{ width: `${60 + i * 20}px` }}
              />
            ))}
          </div>
          
          {/* Title Skeleton */}
          <div className="space-y-3">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-full" />
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse w-3/4" />
          </div>
        </header>

        {/* Article Content Skeleton */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-6">
            {/* Paragraph Skeletons */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="space-y-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-full" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-4/5" />
                {i % 3 === 0 && <div className="h-6 bg-gray-200 rounded animate-pulse w-3/5" />}
              </div>
            ))}
          </div>
        </article>

        {/* Article Footer Skeleton */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="h-8 bg-gray-200 rounded-full animate-pulse"
                style={{ width: `${80 + i * 15}px` }}
              />
            ))}
          </div>
        </footer>
      </main>
    </div>
  )
}
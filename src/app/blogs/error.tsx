'use client'
import { AlertTriangle } from "lucide-react"
import { useEffect } from "react"

const Error = ({
error, 
reset
}: 
{
error: Error & {digest?: string}; 
reset: () => void
}) => {
    useEffect(() => {
        console.error(error)
    }, [error])
  return (
    <>
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 text-center">
      <AlertTriangle className="w-12 h-12 text-red-500 mb-4" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        An unexpected error occurred. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={
          () => reset
        }
        className="px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
      >
        Try Again
      </button>
    </main>
    </>
  )
}

export default Error
// loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4 w-full px-10">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-700 h-[300px] w-full rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-700 rounded w-3/4 mx-auto"></div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-pink-900 font-bold animate-bounce">
        Fetching Games...
      </p>
    </div>
  )
}
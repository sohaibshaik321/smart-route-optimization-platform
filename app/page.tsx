export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 p-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-sky-800 mb-2">
          Smart Route Optimization Platform
        </h1>
        <p className="text-sky-600 mb-6">
          AI-powered logistics optimization
        </p>
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Deployed successfully on AWS Amplify
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Your app is live and working.
        </p>
      </div>
    </main>
  )
}

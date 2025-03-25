export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0E0F0E] text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-2 text-lg">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Go Home
        </a>
      </div>
    );
  }
  
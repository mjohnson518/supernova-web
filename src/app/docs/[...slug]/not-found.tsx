import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-white">
      <div className="bg-gray-800 border border-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-400">Documentation Not Found</h1>
        <p className="text-gray-300 mb-6">
          Sorry, the documentation page you were looking for doesn't exist or may have been moved.
        </p>
        <Link 
          href="/docs"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded transition-colors"
        >
          Return to Documentation
        </Link>
      </div>
    </div>
  );
} 
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-3xl font-bold mb-4">Documentation Not Found</h1>
      <p className="text-gray-600 mb-6">
        Sorry, the documentation page you were looking for doesn't exist.
      </p>
      <Link 
        href="/docs"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded"
      >
        Return to Documentation
      </Link>
    </div>
  );
} 
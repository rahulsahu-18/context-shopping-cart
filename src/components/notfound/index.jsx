import { Link } from "react-router-dom";

export default function NotFound() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-6">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow 
                   hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>

      <div className="mt-12">
        <img
          src="https://illustrations.popsy.co/white/paper-search.svg"
          alt="Not Found Illustration"
          className="w-64 h-64 mx-auto"
        />
      </div>
    </div>
  );
}

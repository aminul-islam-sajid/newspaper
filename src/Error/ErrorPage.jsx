import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;

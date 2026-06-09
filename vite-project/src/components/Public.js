import React from "react";

const Public = () => {
  const content = (
    <div className="flex flex-col min-h-screen">
      
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
        My Company Portal
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Welcome to Our Platform</h1>
        
        <p className="mb-4 text-gray-700">
          This is a public page where users can explore general information about our services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Feature 1</h2>
            <p className="text-sm text-gray-600">
              Easy to use dashboard for managing tasks efficiently.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Feature 2</h2>
            <p className="text-sm text-gray-600">
              Secure and fast system with real-time updates.
            </p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Feature 3</h2>
            <p className="text-sm text-gray-600">
              24/7 support and seamless user experience.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="mb-2">© 2026 My Company. All rights reserved.</p>
        
        <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
          Employee Login
        </button>
      </footer>

    </div>
  );

  return content;
};

export default Public;
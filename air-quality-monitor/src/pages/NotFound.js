import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
          <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

import React from 'react';

function Kontak() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">Kontak Kami</h2>
          <p>Jika Anda memiliki pertanyaan atau memerlukan informasi lebih lanjut, silakan hubungi kami:</p>
          <p>Email: info@aqi.com</p>
          <p>Telepon: (021) 123-4567</p>
          
          <h3 className="text-2xl font-bold mt-6 mb-4">Formulir Kontak</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Nama Anda"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email Anda"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Pesan Anda" rows="5"></textarea>
            </div>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Kirim
              </button>
            </div>
          </form>

          <h3 className="text-2xl font-bold mt-6 mb-4">Ikuti Kami</h3>
          <p>
            <a href="https://facebook.com" className="text-blue-600 hover:underline">Facebook</a><br/>
            <a href="https://twitter.com" className="text-blue-600 hover:underline">Twitter</a><br/>
            <a href="https://instagram.com" className="text-blue-600 hover:underline">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kontak;

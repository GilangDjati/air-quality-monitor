import React from 'react';

function Tentang() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-4">Tentang Proyek Ini</h2>
          <p className="mb-2">
            Proyek ini bertujuan untuk memantau kualitas udara secara real-time dan memberikan informasi yang relevan untuk mengurangi dampak kebakaran hutan. Data yang ditampilkan diperoleh dari OpenWeatherMap API dan diolah untuk memberikan rekomendasi tindakan berdasarkan tingkat polusi udara.
          </p>
          <p className="mb-2">
            Kami menggunakan teknologi terkini untuk mengumpulkan, menganalisis, dan menyajikan data kualitas udara. Proyek ini dirancang untuk membantu masyarakat dalam membuat keputusan yang lebih baik terkait aktivitas luar ruangan, terutama selama musim kebakaran hutan.
          </p>
          <p className="mb-2">
            Tim kami terdiri dari profesional di bidang teknologi dan lingkungan yang berkomitmen untuk memberikan solusi terbaik dalam pemantauan kualitas udara. Kami terus bekerja keras untuk memastikan data yang kami sajikan akurat dan dapat diandalkan.
          </p>
          <p className="mb-2">
            Manfaat dari proyek ini antara lain:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Meningkatkan kesadaran masyarakat tentang kualitas udara di lingkungan mereka.</li>
            <li>Memberikan informasi yang dapat digunakan untuk mengurangi risiko kesehatan akibat polusi udara.</li>
            <li>Membantu pemerintah dan organisasi dalam merencanakan tindakan mitigasi selama musim kebakaran hutan.</li>
          </ul>
          <p className="mb-2">
            Kami berharap proyek ini dapat memberikan dampak positif bagi masyarakat dan lingkungan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tentang;

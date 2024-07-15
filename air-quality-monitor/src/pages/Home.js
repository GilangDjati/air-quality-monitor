import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAirQuality } from '../slices/airQualitySlice';

function Home() {
  const dispatch = useDispatch();
  const { airQuality, location, status, error } = useSelector((state) => state.airQuality);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            dispatch(fetchAirQuality({ latitude, longitude }));
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getLocation();
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Memuat data kualitas udara...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  const descriptions = {
    CO: {
      description: (value) => value > 50 ? 
        "Karbon Monoksida (CO) adalah gas beracun yang dapat mengurangi jumlah oksigen dalam aliran darah. Tingkat CO yang tinggi sering kali dihasilkan dari pembakaran yang tidak sempurna selama kebakaran hutan." : 
        "Karbon Monoksida (CO) pada tingkat ini dianggap aman.",
      action: (value) => value > 50 ? 
        "Hindari area dengan konsentrasi CO tinggi dan pastikan ventilasi yang baik. Gunakan masker khusus jika terpaksa harus berada di luar ruangan." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    NO: {
      description: (value) => "Nitrogen Monoksida (NO) adalah gas yang dapat memperparah kondisi pernapasan terutama di daerah yang terkena dampak kebakaran hutan.",
      action: (value) => value > 10 ? 
        "Kurangi aktivitas luar ruangan dan gunakan masker pelindung untuk mencegah inhalasi gas berbahaya." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    NO2: {
      description: (value) => "Nitrogen Dioksida (NO2) dapat mengiritasi saluran pernapasan dan memperparah penyakit paru-paru terutama saat kebakaran hutan.",
      action: (value) => value > 10 ? 
        "Hindari area dengan konsentrasi NO2 tinggi dan gunakan masker pelindung. Batasi aktivitas fisik di luar ruangan." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    O3: {
      description: (value) => "Ozon (O3) di permukaan tanah adalah komponen utama kabut asap yang terbentuk selama kebakaran hutan dan dapat menyebabkan masalah pernapasan.",
      action: (value) => value > 100 ? 
        "Batasi aktivitas luar ruangan dan gunakan pembersih udara di dalam rumah. Gunakan masker pelindung jika terpaksa harus keluar." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    SO2: {
      description: (value) => "Sulfur Dioksida (SO2) adalah gas yang dapat memperparah kondisi pernapasan dan penyakit jantung, sering kali dilepaskan selama kebakaran hutan.",
      action: (value) => value > 20 ? 
        "Hindari aktivitas fisik berat di luar ruangan. Gunakan pembersih udara dalam ruangan dan hindari ventilasi udara luar." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    PM2_5: {
      description: (value) => "Partikel halus (PM2.5) dapat menembus jauh ke dalam paru-paru dan menyebabkan masalah kesehatan serius terutama selama kebakaran hutan.",
      action: (value) => value > 35 ? 
        "Gunakan masker N95 atau yang setara, dan hindari aktivitas luar ruangan. Tetaplah di dalam ruangan dengan pembersih udara jika memungkinkan." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    PM10: {
      description: (value) => "Partikel kasar (PM10) dapat menyebabkan iritasi pada saluran pernapasan, terutama pada saat kebakaran hutan.",
      action: (value) => value > 50 ? 
        "Kurangi aktivitas di luar ruangan dan gunakan masker pelindung. Tutup pintu dan jendela untuk mencegah masuknya partikel." : 
        "Tidak ada tindakan khusus yang diperlukan."
    },
    NH3: {
      description: (value) => "Amonia (NH3) adalah gas yang dapat menyebabkan iritasi pada mata, hidung, dan tenggorokan, terutama selama kebakaran hutan.",
      action: (value) => value > 10 ? 
        "Hindari area dengan konsentrasi NH3 tinggi. Gunakan ventilasi yang baik di dalam ruangan dan hindari aktivitas luar ruangan." : 
        "Tidak ada tindakan khusus yang diperlukan."
    }
  };

  const actions = {
    1: "Kualitas udara dianggap memuaskan, dan polusi udara menimbulkan sedikit atau tidak ada risiko.",
    2: "Kualitas udara dapat diterima; namun, mungkin ada beberapa risiko kesehatan bagi sebagian kecil orang yang sangat sensitif terhadap polusi udara.",
    3: "Anggota kelompok sensitif mungkin mengalami efek kesehatan. Masyarakat umum tidak mungkin terpengaruh.",
    4: "Semua orang mungkin mulai mengalami efek kesehatan; anggota kelompok sensitif mungkin mengalami efek kesehatan yang lebih serius.",
    5: "Peringatan kesehatan: semua orang mungkin mengalami efek kesehatan yang lebih serius."
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pemantauan Kualitas Udara Secara Real-Time untuk Pengurangan Dampak Kebakaran Hutan</h1>
          {location ? (
            <div className="text-lg mb-4">
              <h2 className="text-2xl font-semibold text-blue-600">{location.subDistrict ? `${location.subDistrict}, ` : ''}{location.city}, {location.province}, {location.country}</h2>
            </div>
          ) : (
            <p>Memuat lokasi...</p>
          )}
          {airQuality ? (
            <div className="text-lg">
              <div className="mb-2">
                <span className="font-semibold">Indeks Kualitas Udara Saat Ini: </span>
                <span className={`font-semibold ${airQuality.main.aqi <= 2 ? 'text-green-600' : airQuality.main.aqi <= 3 ? 'text-yellow-600' : airQuality.main.aqi <= 4 ? 'text-orange-600' : 'text-red-600'}`}>
                  {airQuality.main.aqi}
                </span>
                <p>{actions[airQuality.main.aqi]}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(descriptions).map((key) => (
                  <div key={key}>
                    <span className="font-semibold">{key}: </span>{airQuality.components[key.toLowerCase()]} μg/m³
                    <p className="text-sm text-gray-600">{descriptions[key].description(airQuality.components[key.toLowerCase()])}</p>
                    <p className="text-sm text-gray-600 font-bold">Tindakan: {descriptions[key].action(airQuality.components[key.toLowerCase()])}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>Memuat data kualitas udara...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

const API_KEY = 'd6f03f299be1290f3b63cd824daed83f'; // Gunakan API key Anda

export const fetchAirQualityData = async (latitude, longitude) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Fetch location data
    const locationResponse = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`);
    if (!locationResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const locationData = await locationResponse.json();
    const location = locationData[0];

    return {
      airQuality: data.list[0],
      location: {
        subDistrict: location.local_names?.id || location.name,
        city: location.name,
        province: location.state,
        country: location.country,
      }
    };
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Unable to fetch air quality data. Please try again later.');
    return null;
  }
};

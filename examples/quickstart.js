const axios = require('axios');

(async () => {
  try {
    const response = await axios.get('https://api.bottyfier.com/ip/8.8.8.8?key=YOUR_API_KEY');
    const data = response.data;
    if (data.isVpn || data.isDatacenter || data.isBlacklisted) {
      console.log('Suspicious IP detected');
    } else {
      console.log('IP is safe');
    }
    console.log('Country:', data.ipApiData.country);
    console.log('ISP:', data.ipApiData.isp);
  } catch (err) {
    console.error('API error:', err.response ? err.response.data : err.message);
  }
})(); 
function curSuccess(pos) {
  console.log(pos);

  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;

  document.getElementById('latitude').textContent = `Latitude: ${latitude}`;
  document.getElementById('longitude').textContent = `Longitude: ${longitude}`;
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const options = {
  maximumAge: 0,
  timeout: 5000,
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, options);

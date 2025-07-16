// Init storage
const storage = new Storage();

// Get stored location date
const weatherLocation = weather.getLocationData();

// Init weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change Location
  weather.changeLocation(city, state);

  // set location in local storage
  storage.setLocationData(city, state);

  // Get and display weather 
  getWeather();


  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather() {
weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
class Weather {
  constructor(city, state) {
    this.apiKey = '8d24a5d04c3c47e1a4a5d04c3cf7e165';
    this.city = city;
    this.state = state;
  }

  // Get weather from API
  async getWeather() {
    const response = await fetch(`https://api.weather.com/v3/wx/conditions/current?apiKey=${this.apiKey}&format=json&language=en-US&location=${this.state},${this.city}`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}


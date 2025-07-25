class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'FCT';
    this.defaultState = 'Abuja';
  }

  getLocationData() {
    if(localStorage.getItem('city')  === null) {
      this.city = this .defaultCity;
    } else {
      this.city = localStorage.setItem('city');
    }

    if(localStorage.getItem('state')  === null) {
      this.state = this .defaultState;
    } else {
      this.state = localStorage.setItem('state');
    }

    return {
      city: this.city,
      state: this.state  
    }
  } 

  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}
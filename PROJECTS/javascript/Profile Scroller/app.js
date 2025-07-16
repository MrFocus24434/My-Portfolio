const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'Male',
    lookingfor: 'Female',
    location: "Boston MA",
    image: 'http://randomuser.me/api/portraits/men/82.jpg'

  },

  {
    name: 'Marie Owen',
    age: 35,
    gender: 'Female',
    lookingfor: 'Male',
    location: "Miami FL",
    image: 'http://randomuser.me/api/portraits/women/85.jpg'

  },

  {
    name: 'Khalid Adewale',
    age: 33,
    gender: 'Male',
    lookingfor: 'Female',
    location: "Abuja FCT",
    image: 'http://randomuser.me/api/portraits/men/84.jpg'

  },

  {
    name: 'Janet Bot',
    age: 25,
    gender: 'Female',
    lookingfor: 'Male',
    location: "Lagos Ikeja",
    image: 'http://randomuser.me/api/portraits/women/83.jpg'

  }
];

const profiles = profileIterator(data);

// Call first Profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined){

  document.getElementById('profileDisplay').innerHTML =  `
  <ul? class="list-group">

  <li class="list-group-item">Name: ${currentProfile.name}</li>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  
  </ul?
  `;

  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;

  } else {
    // No more profiles
    window.location.reload();
  }
}

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false} :
      {done: true}

    }
  }
}
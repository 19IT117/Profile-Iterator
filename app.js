const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 25,
    gender: 'female',
    lookingFor: 'male',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Steve Smith',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  }

]

// Profile Iterator 
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
    }
  }
}

const profiles = profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click',nextProfile);
function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name : ${currentProfile.name}</li>
    <li class="list-group-item">Age : ${currentProfile.age}</li>
    <li class="list-group-item">Location : ${currentProfile.location}</li>
    <li class="list-group-item">Preference : ${currentProfile.gender} and  looking for : ${ currentProfile.lookingFor} </li> 
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `
    <img src = "${currentProfile.image}" >`;
  }else{
    window.location.reload();
  }
  }
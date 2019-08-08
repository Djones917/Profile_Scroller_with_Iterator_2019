// We wll hard code there will be no api
const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Farminton UT',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jenny Rassmusem',
        age: 44,
        gender: 'female',
        lookingfor: 'male',
        location: 'Reno NV',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Harold Balls',
        age: 56,
        gender: 'male',
        lookingfor: 'female',
        location: 'Twin Falls ID',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];



const profiles = profileIterator(data);

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display Function




// Profile Iterator
function profileIterator(profiles) {
   let nextIndex = 0;

   return {
       next: function() {
           return nextIndex < profiles.length ? { values: profiles[nextIndex++], done: false } : { done: true }
       }
   };
}
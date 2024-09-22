
// starting movies
const movies = [
  { title: 'Movie 1', image: './img/chandu-champian-thumbnail.jpg', trailer: './candu champian.mp4' },
  { title: 'Movie 2', image: './img/family-star-thumbnail.jpg', trailer: './family-star.mp4' },
  { title: 'Movie 3', image: './img/pathaan-thumbnail.jpg', trailer: './pathaan.mp4' },
  { title: 'Movie 4', image: './img/pati-thumbnail.jpg', trailer: './pati movie.mp4' },
  { title: 'Movie 5', image: './img/boss-baby-thumbnail.jpg', trailer: './The boss baby.mp4' },
  { title: 'Movie 6', image: './img/shadaa-thumbnail.jpg', trailer: './shadaa.mp4' },
  { title: 'Movie 7', image: './img/sitaramam-thumbnail.jpg', trailer: './sitaramam - Made with Clipchamp.mp4' },
  { title: 'Movie 8', image: './img/spider man-thumbnail.jpg', trailer: './spider man.mp4' },
  { title: 'Movie 9', image: './img/yeh jawani-thumbnail.jpg', trailer: './yeh jawani.mp4' },
  { title: 'Movie 10', image: './img/wrong-turn-thumbnail.jpg', trailer: './wrong-turn.mp4' }
];

const carousel = document.getElementById('movie-carousel');

movies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  movieCard.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="trailer-overlay">
      <video src="${movie.trailer}" autoplay muted loop playsinline></video>
    </div>
  `;

  carousel.appendChild(movieCard);

 
  const videoElement = movieCard.querySelector('video');
  videoElement.style.height = '100%';
  videoElement.style.objectFit = 'fill'; 
});


movies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  movieCard.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <div class="trailer-overlay">
      <video src="${movie.trailer}" autoplay muted loop playsinline></video>
    </div>
  `;

  carousel.appendChild(movieCard);


  const videoElement = movieCard.querySelector('video');
  videoElement.style.height = '100%';
  videoElement.style.objectFit = 'fill';
});


carousel.addEventListener('mouseover', function() {
  carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseout', function() {
  carousel.style.animationPlayState = 'running';
});


 
  
  // rent section

  document.addEventListener("DOMContentLoaded", function() {
    var videoContainers = document.querySelectorAll('.video-container');

    videoContainers.forEach(function(container) {
        var video = container.querySelector('video');
        var overlay = container.querySelector('.video-overlay');

        container.addEventListener('mousemove', function() {
            if (video.paused) {
                video.play();
            }
            overlay.style.display = 'none'; 
            video.style.display = 'block';  
        });

        
        container.addEventListener('mouseleave', function() {
            video.pause();
            overlay.style.display = 'block'; 
            video.style.display = 'none';   
        });
    });
});
document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('video');
  const thumbnail = container.querySelector('.video-thumbnail');

  container.addEventListener('mouseenter', () => {
    thumbnail.style.display = 'none'; 
    video.style.display = 'block'; 
    video.play(); 
  });

  container.addEventListener('mouseleave', () => {
    video.pause(); 
    video.style.display = 'none'; 
    thumbnail.style.display = 'block'; 
  });
});

document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('video');
  const thumbnail = container.querySelector('.video-thumbnail');

  container.addEventListener('mouseenter', () => {
    thumbnail.style.display = 'none'; 
    video.style.display = 'block'; 
    video.play(); 
  });

  container.addEventListener('mouseleave', () => {
    video.pause(); 
    video.style.display = 'none'; 
    thumbnail.style.display = 'block'; 
  });
});



//  rent watch list js 






// const watchlistBtns = document.querySelectorAll('.watchlist-btn');
// const notificationAreas = document.querySelectorAll('.alert-success');


const likeBtns = document.querySelectorAll('.like-btn');
const likeNotificationAreas = document.querySelectorAll('.alert-info');


// watchlistBtns.forEach((btn, index) => {
//   btn.addEventListener('click', function() {
  
//     notificationAreas[index].style.display = 'block';
    
//     setTimeout(function() {
//       notificationAreas[index].style.display = 'none';
//     }, 2000);
//   });
// });


likeBtns.forEach((btn, index) => {
  btn.addEventListener('click', function() {
    
    likeNotificationAreas[index].style.display = 'block';
    
    setTimeout(function() {
      likeNotificationAreas[index].style.display = 'none';
    }, 2000);
  });
});

// end of rent watchlist javascript


// fake signin


  


document.querySelector('.reg_signBtn').addEventListener('click', function(event) {
  event.preventDefault();

  //  email and password
  const correctEmail = "user@example.com";
  const correctPassword = "password123";

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (email === correctEmail && password === correctPassword) {
      window.location.href = "user.html"; 
  } else {
      errorMessage.style.display = 'block'; 
  }
});



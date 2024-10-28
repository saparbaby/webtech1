document.addEventListener("DOMContentLoaded", function () {
    
    const stars = document.querySelectorAll(".rating .star");
    stars.forEach(star => {
      star.addEventListener("click", function () {
        const rating = this.getAttribute("data-value");
        stars.forEach(s => s.classList.remove("selected"));
        this.classList.add("selected");
      });
    });
  
    
    const themeToggle = document.getElementById("themeToggle");
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const icon = themeToggle.querySelector("i");
      icon.classList.toggle("fa-moon");
      icon.classList.toggle("fa-sun");
    });
  

    
    const form = document.getElementById("orderForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      fetch('/submit-order', {
        method: 'POST',
        body: new FormData(form),
      }).then(response => {
        document.getElementById("successModal").style.display = "flex";
      });
    });
  
    

    const subscribeBtn = document.getElementById('subscribeBtn');
    subscribeBtn.addEventListener('click', function() {
      const popupForm = document.getElementById('popupForm');
      popupForm.style.display = 'flex';
    });
    
    
    const successModal = document.getElementById('successModal');
    document.getElementById('orderForm')?.addEventListener('submit', function(event) {
      event.preventDefault();
      successModal.style.display = 'flex';
    });
    
    
    window.addEventListener('click', function(event) {
      if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
      }
    });
    
const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transition = 'transform 0.3s ease';
        button.style.transform = 'scale(1.1)'; 
      });
    
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
      });
    });
    

const clickSound = new Audio('click-sound.mp3');


submitRatingBtn.addEventListener('click', () => {
  clickSound.play();
});


const placeOrderBtn = document.getElementById('placeOrderBtn');
placeOrderBtn.addEventListener('click', () => {
  clickSound.play();
  document.getElementById('orderForm').submit(); 
  document.getElementById('orderForm').reset();
});


    
    
    const currentDateTime = document.getElementById("currentDateTime");
    currentDateTime.textContent = new Date().toLocaleTimeString();
  
    
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    let currentFocus = 0;
    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") {
        currentFocus = (currentFocus + 1) % navLinks.length;
        navLinks[currentFocus].focus();
      } else if (e.key === "ArrowLeft") {
        currentFocus = (currentFocus - 1 + navLinks.length) % navLinks.length;
        navLinks[currentFocus].focus();
      }
    });
  
    
var countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); 


var countdownFunction = setInterval(function() {

  
  var now = new Date().getTime();

  
  var timeLeft = countdownDate - now;

  
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (timeLeft < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown-timer").innerHTML = "Акция завершена";
  }
}, 1000);
});


const rateUsBtn = document.getElementById('rateUsBtn');
const rateModal = document.getElementById('rateModal');
const closeModal = document.querySelector('.modal .close');
const submitRatingBtn = document.getElementById('submitRating'); 


rateUsBtn.addEventListener('click', () => {
  rateModal.style.display = 'flex';
});


closeModal.addEventListener('click', () => {
  rateModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
  if (event.target == rateModal) {
    rateModal.style.display = 'none';
  }
});


submitRatingBtn.addEventListener('click', () => {
  console.log('Рейтинг отправлен:', selectedRating); 
  rateModal.style.display = 'none'; 
});


const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    
    stars.forEach(s => s.classList.remove('selected'));

    
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('selected');
    }

    
    selectedRating = index + 1;
    console.log('Выбранный рейтинг:', selectedRating);
  });

  
  star.addEventListener('mouseover', () => {
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('selected');
    }
  });

  
  star.addEventListener('mouseout', () => {
    stars.forEach(s => s.classList.remove('selected'));
    for (let i = 0; i < selectedRating; i++) {
      stars[i].classList.add('selected');
    }
  });
});

submitRatingBtn.addEventListener('click', () => {
    console.log('Рейтинг отправлен:', selectedRating); 
    rateModal.style.display = 'none'; 
    const ratingMessage = document.createElement('p');
    ratingMessage.textContent = `Спасибо за вашу оценку!`;
    document.querySelector('.rate-us-section').appendChild(ratingMessage);
  });


const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
  
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
  document.body.style.backgroundColor = randomColor;
});


const draggableImages = document.querySelectorAll('.draggable');
const dropArea = document.getElementById('dropArea');

draggableImages.forEach(image => {
  image.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.src);
  });
});

dropArea.addEventListener('dragover', (event) => {
  event.preventDefault();
  dropArea.classList.add('dragover');
});

dropArea.addEventListener('dragleave', () => {
  dropArea.classList.remove('dragover');
});

dropArea.addEventListener('drop', (event) => {
  event.preventDefault();
  dropArea.classList.remove('dragover');
  const imageSrc = event.dataTransfer.getData('text/plain');
  const img = document.createElement('img');
  img.src = imageSrc;
  img.classList.add('dropped-image');
  img.style.maxWidth = '100px';
  img.style.margin = '10px';
  dropArea.appendChild(img);
});


  




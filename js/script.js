// text animation
let i = 0;
let txt = " AirPods Pro"
let speed = 100;

function typeWriter() {
  document.getElementById("title").innerHTML += txt.charAt(i);
  i++;
  if (i < txt.length) {
    setTimeout(typeWriter, speed);
  }
}
typeWriter()
// btn animation
let headerBtn = document.querySelector('.header__link');
function linkAnime() {
  if (headerBtn.classList.contains('active')) {
    headerBtn.classList.remove('active')
  }
  else {
    headerBtn.classList.add('active')
  }
}
setTimeout(() => {
  linkAnime()
}, 1500);

//  section animation
let upCards = document.querySelectorAll('.up');
upCards.forEach(card => {
  const speed = card.getAttribute('data-speed')
  card.style.transition = `${speed}ms`
  window.addEventListener('scroll', function () {
    if (window.scrollY >= card.offsetTop - card.offsetHeight * 2.1) {
      card.classList.add('active')
    }
    else {
      card.classList.remove('active')
    }
  })
});

//  phones animation
let rightCards = document.querySelectorAll('.right');
rightCards.forEach(rights => {
  const speed = rights.getAttribute('data-speed')
  rights.style.transition = `${speed}ms`
  window.addEventListener('scroll', function () {
    if (window.scrollY >= rights.offsetTop - rights.offsetHeight * 2.7) {
      rights.classList.add('active')
    }
    else {
      rights.classList.remove('active')
    }
  })
});

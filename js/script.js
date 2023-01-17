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

let headerBtn = document.querySelector('.header__link');
function linkAnime() {
  if (headerBtn.classList.contains('active')) {
    headerBtn.classList.remove('active')
  }
  else{
    headerBtn.classList.add('active')
  }
}
setTimeout((x = 0 ) => {
     if (x == 0) {
      linkAnime()
     }
     else{
      false
     }
 }, 1500);
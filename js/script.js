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
setTimeout(() => {
    linkAnime()
 }, 1500);

//  let cardsProduct = document.querySelector('#card1');
//  console.log((cardsProduct.offsetTop - cardsProduct.offsetHeight) / 2.5);
// window.addEventListener('scroll', function () { 
//   if(window.scrollY >= cardsProduct.offsetTop - cardsProduct.offsetHeight * 2 )    
//   {
//     console.log('yes');
//   }
//   else{
//     console.log('no');
//   }
//  })
let cards = document.querySelectorAll('.right');
 cards.forEach(card => {
  const speed = card.getAttribute('data-speed')
  card.style.transition = `${speed}ms`
  window.addEventListener('scroll', function () { 
    if (window.scrollY >= card.offsetTop - card.offsetHeight * 2.1){
    // console.log('yes');
    card.classList.add('active')
    }
    else{
     card.classList.remove('active')
    //  console.log('no');
    }
   })
 });

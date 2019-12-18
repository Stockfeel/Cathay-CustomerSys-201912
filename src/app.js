// main
document.querySelector('.back').addEventListener('click', () => scrollTo(document.body,0,1250))
window.addEventListener('scroll', (evt) => {
  if(window.pageYOffset > 274) {
    document.querySelector('.header__result').style.height = '84px'
    document.querySelector('.header__result').classList.add('shadow')
    document.querySelector('.result__list').classList.add('hidden')
    document.querySelector('.result__title').classList.add('hidden')
    document.querySelector('.result__info').classList.add('hidden')
    document.querySelector('.header__warning').classList.add('hidden')
  } else {
    document.querySelector('.header__result').style.height = '129px'
    document.querySelector('.header__result').classList.remove('shadow')
    document.querySelector('.result__list').classList.remove('hidden')
    document.querySelector('.result__title').classList.remove('hidden')
    document.querySelector('.result__info').classList.remove('hidden')
    document.querySelector('.header__warning').classList.remove('hidden')
  }
})

// inputs
document.querySelector('#input-id').addEventListener('focus', () => {
  document.querySelector('#id').checked = true;
})
document.querySelector('#input-num').addEventListener('focus', () => {
  document.querySelector('#num').checked = true;
})
document.querySelector('#id').addEventListener('click', () => {
  document.querySelector('#input-id').focus();;
})
document.querySelector('#num').addEventListener('click', () => {
  document.querySelector('#input-num').focus();;
})

// tooltips
document.querySelector('#info-sameId').addEventListener('mouseover', () => {
  document.querySelector('#tooltip-sameId').classList.remove('hidden')
})
document.querySelector('#info-sameId').addEventListener('mouseout', () => {
  document.querySelector('#tooltip-sameId').classList.add('hidden')
})

document.querySelector('#info-vip').addEventListener('mouseover', () => {
  document.querySelector('#tooltip-vip').classList.remove('hidden')
})
document.querySelector('#info-vip').addEventListener('mouseout', () => {
  document.querySelector('#tooltip-vip').classList.add('hidden')
})

document.querySelector('#info-notRecommend').addEventListener('mouseover', () => {
  document.querySelector('#tooltip-notRecommend').classList.remove('hidden')
})
document.querySelector('#info-notRecommend').addEventListener('mouseout', () => {
  document.querySelector('#tooltip-notRecommend').classList.add('hidden')
})

document.querySelector('.popup').addEventListener('click', (evt) => {
  if(evt.target.classList.contains('popup__close')) {
    document.querySelector('.popup').classList.add('hidden')
  }
})

document.querySelector('.products__titles').addEventListener('click', (evt) => {
  if(evt.target.classList.contains('subhead')) {
    evt.target.querySelector('.order').classList.toggle('up');
    evt.target.querySelector('.order').classList.toggle('down');
  }
  if(evt.target.classList.contains('order')) {
    evt.target.classList.toggle('up');
    evt.target.classList.toggle('down');
  }
  if(evt.target.classList.contains('order__key')) {
    evt.target.parentNode.querySelector('.order').classList.toggle('up');
    evt.target.parentNode.querySelector('.order').classList.toggle('down');
  }
});

// scroll to top
function scrollTo(element, to, duration) {
  let start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;
      
  const animateScroll = function(){        
      currentTime += increment;
      let val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

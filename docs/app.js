"use strict";

// main
document.querySelector('.back').addEventListener('click', function() {
  return scrollTo(document.body, 0, 1250);
});
window.addEventListener('scroll', function(evt) {
  if (window.pageYOffset > 274) {
    document.querySelector('.header__result').style.height = '50px';
    document.querySelector('.navigation').classList.add('shadow');
    document.querySelector('.result__list').classList.add('hidden');
    document.querySelector('.result__title').classList.add('hidden');
    document.querySelector('.result__info').classList.add('hidden');
    document.querySelector('.header__warning').classList.add('hidden');
  } else {
    document.querySelector('.header__result').style.height = '100px';
    document.querySelector('.navigation').classList.remove('shadow');
    document.querySelector('.result__list').classList.remove('hidden');
    document.querySelector('.result__title').classList.remove('hidden');
    document.querySelector('.result__info').classList.remove('hidden');
    document.querySelector('.header__warning').classList.remove('hidden');
  }
}); // navigation

document.querySelector('.navigation').addEventListener('click', function(evt) {
  console.log(evt.target.tagName);

  if (evt.target.tagName === 'LI') {
    var arr = evt.target.parentNode.querySelectorAll('li');

    for (var i = 0; i < arr.length; i += 1) {
      arr[i].classList.remove('select');
    }

    evt.target.classList.add('select');
  }
}); // inputs

document.querySelector('#input-id').addEventListener('focus', function() {
  document.querySelector('#id').checked = true;
});
document.querySelector('#input-num').addEventListener('focus', function() {
  document.querySelector('#num').checked = true;
});
document.querySelector('#id').addEventListener('click', function() {
  document.querySelector('#input-id').focus();;
});
document.querySelector('#num').addEventListener('click', function() {
  document.querySelector('#input-num').focus();;
}); // tooltips

document.querySelector('#info-sameId').addEventListener('mouseover', function() {
  document.querySelector('#tooltip-sameId').classList.remove('hidden');
});
document.querySelector('#info-sameId').addEventListener('mouseout', function() {
  document.querySelector('#tooltip-sameId').classList.add('hidden');
});
document.querySelector('#info-vip').addEventListener('mouseover', function() {
  document.querySelector('#tooltip-vip').classList.remove('hidden');
});
document.querySelector('#info-vip').addEventListener('mouseout', function() {
  document.querySelector('#tooltip-vip').classList.add('hidden');
});
document.querySelector('#info-notRecommend').addEventListener('mouseover', function() {
  document.querySelector('#tooltip-notRecommend').classList.remove('hidden');
});
document.querySelector('#info-notRecommend').addEventListener('mouseout', function() {
  document.querySelector('#tooltip-notRecommend').classList.add('hidden');
});
document.querySelector('#info-address').addEventListener('mouseover', function() {
  document.querySelector('#tooltip-address').classList.remove('hidden');
});
document.querySelector('#info-address').addEventListener('mouseout', function() {
  document.querySelector('#tooltip-address').classList.add('hidden');
});
document.querySelector('.popup').addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup__close')) {
    document.querySelector('.popup').classList.add('hidden');
  }
});
document.querySelector('.products__titles').addEventListener('click', function(evt) {
  if (evt.target.classList.contains('subhead')) {
    evt.target.querySelector('.order').classList.toggle('up');
    evt.target.querySelector('.order').classList.toggle('down');
  }

  if (evt.target.classList.contains('order')) {
    evt.target.classList.toggle('up');
    evt.target.classList.toggle('down');
  }

  if (evt.target.classList.contains('order__key')) {
    evt.target.parentNode.querySelector('.order').classList.toggle('up');
    evt.target.parentNode.querySelector('.order').classList.toggle('down');
  }
}); // scroll to top

function scrollTo(element, to, duration) {
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function animateScroll() {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}; // for last row hover 


document.querySelector('.basic tbody tr:last-child').addEventListener('mouseover', function(evt) {
  document.querySelector('.basic tr:nth-child(2) td:last-child').classList.add('active');
});
document.querySelector('.basic tbody tr:last-child').addEventListener('mouseout', function(evt) {
  document.querySelector('.basic tr:nth-child(2) td:last-child').classList.remove('active');
});
document.querySelector('.contact tbody tr:last-child').addEventListener('mouseover', function(evt) {
  document.querySelector('.contact tr:nth-child(2) td:last-child').classList.add('active');
});
document.querySelector('.contact tbody tr:last-child').addEventListener('mouseout', function(evt) {
  document.querySelector('.contact tr:nth-child(2) td:last-child').classList.remove('active');
});
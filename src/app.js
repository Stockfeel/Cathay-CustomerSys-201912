document.querySelector('.back').addEventListener('click', () => window.scrollTo(0,0))
window.addEventListener('scroll', (evt) => {
  if(window.pageYOffset > 274) {
    document.querySelector('.header__result').style.height = '84px'
    document.querySelector('.header__result').classList.add('shadow')
    document.querySelector('.result__title').classList.add('hidden')
    document.querySelector('.result__info').classList.add('hidden')

  } else {
    document.querySelector('.header__result').style.height = '129px'
    document.querySelector('.header__result').classList.remove('shadow')
    document.querySelector('.result__title').classList.remove('hidden')
    document.querySelector('.result__info').classList.remove('hidden')
  }
})
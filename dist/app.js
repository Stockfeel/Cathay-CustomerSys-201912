"use strict";document.querySelector(".back").addEventListener("click",function(){return window.scrollTo(0,0)}),window.addEventListener("scroll",function(e){274<window.pageYOffset?(document.querySelector(".header__result").style.height="84px",document.querySelector(".header__result").classList.add("shadow"),document.querySelector(".result__title").classList.add("hidden"),document.querySelector(".result__info").classList.add("hidden")):(document.querySelector(".header__result").style.height="129px",document.querySelector(".header__result").classList.remove("shadow"),document.querySelector(".result__title").classList.remove("hidden"),document.querySelector(".result__info").classList.remove("hidden"))});
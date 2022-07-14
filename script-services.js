//Navigation//

//Navigation//


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener('click', function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
} else {
	document.body.classList.add('_pc');
}

// burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach((menuLink) => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				pageYOffset -
				document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');

				// auto close sub-menu
				if (
					menuBody.dataset.sub_menu_auto_close &&
					document.body.classList.contains('_touch')
				) {
					let menuArrows = document.querySelectorAll('.menu__arrow');
					for (let index = 0; index < menuArrows.length; index++) {
						menuArrows[index].parentElement.classList.remove('_active');
					}
				}
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}




//starting slider







const slides = document.querySelectorAll('.sliderce');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events


// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
  }




 
  const nav = document.querySelector('.nav');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
/*

const header = document.querySelector('.header-services');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

*/




///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



var offerBtnOne=document.querySelector("#services-offer-btn1");

var offerBtnTwo=document.querySelector("#services-offer-btn2");

var offerBtnThree=document.querySelector("#services-offer-btn3");

var offerBtnFour=document.querySelector("#services-offer-btn4");

var offerBtnFive=document.querySelector("#services-offer-btn5");


var offerCaptionOne=document.querySelector(".services-offer-box-1");

var offerCaptionTwo=document.querySelector(".services-offer-box-2");

var offerCaptionThree=document.querySelector(".services-offer-box-3");

var offerCaptionFour=document.querySelector(".services-offer-box-4");

var offerCaptionFive=document.querySelector(".services-offer-box-5");

offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");
offerBtnOne.classList.add("kopce-stil");


offerBtnOne.addEventListener("click",function(){
  offerCaptionOne.classList.remove("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");

offerBtnOne.classList.add("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})




offerBtnTwo.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.remove("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");

offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.add("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})



offerBtnThree.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.remove("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.add("display");

offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.add("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})





offerBtnFour.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.remove("display");
offerCaptionFive.classList.add("display");



offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.add("kopce-stil");
offerBtnFive.classList.remove("kopce-stil");
})





offerBtnFive.addEventListener("click",function(){
  offerCaptionOne.classList.add("display");
  offerCaptionTwo.classList.add("display");
offerCaptionThree.classList.add("display");
offerCaptionFour.classList.add("display");
offerCaptionFive.classList.remove("display");


offerBtnOne.classList.remove("kopce-stil");
offerBtnTwo.classList.remove("kopce-stil");
offerBtnThree.classList.remove("kopce-stil");
offerBtnFour.classList.remove("kopce-stil");
offerBtnFive.classList.add("kopce-stil");
})



var services=document.querySelector(".SERVICES");
var price=document.querySelector(".PRICING");

var servicesBtn=document.querySelector("#services-btn-1");
var priceBtn=document.querySelector("#services-btn-2");

price.classList.add("display")
servicesBtn.style.borderBottom="3px solid blue"

servicesBtn.addEventListener("click",function(){
  price.classList.add("display")
  services.classList.remove("display");
  servicesBtn.style.borderBottom="3px solid blue"
  priceBtn.style.borderBottom="none";
})

priceBtn.addEventListener("click",function(){
  price.classList.remove("display")
  services.classList.add("display");
  priceBtn.style.borderBottom="3px solid blue"
  servicesBtn.style.borderBottom="none";
})






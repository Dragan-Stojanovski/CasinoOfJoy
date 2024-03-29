"use strict"




//Navigation//









 
const nav = document.querySelector('.nav');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');





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








'use strict';

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




var sideBar = document.querySelector(".side-bar");


let cards = []

function printCards(data) {
    data.forEach(el => {
       
	
		
		let sideTitle=document.createElement("span")
		sideTitle.classList.add("side-ha3")
			let link=document.createElement("a")
			let image=document.createElement("img")
			image.src=el.image;
		image.alt=el.title
			sideTitle.textContent=el.title
			   
				link.href=el.source_link
		
				link.appendChild(image);
			link.appendChild(sideTitle);

			link.classList.add("side-schedule");
		
		
	
			sideBar.appendChild(link);
			
    })
}

fetch("side-data.json")
.then(res => res.json())
.then(function(data){
    printCards(data.slice(0, 8))
    cards = data.slice(8)
})





var sideBarTwo = document.querySelector(".side-bar-2");


let cards2 = []

function printCards2(data) {
    data.forEach(el => {
       
	
		
		let sideTitle=document.createElement("span")
		sideTitle.classList.add("side-ha3")
			let link=document.createElement("a")
			let image=document.createElement("img")
			image.src=el.image;
			image.alt=el.title
			sideTitle.textContent=el.title
			   
				link.href=el.source_link
		
				link.appendChild(image);
				link.appendChild(sideTitle);
	
				link.classList.add("side-schedule");
		
		
			
			sideBarTwo.appendChild(link);
    })
}

fetch("side-data-2.json")
.then(res => res.json())
.then(function(data){
    printCards2(data.slice(0, 8))
    cards2 = data.slice(8)
})




var sideBarThree = document.querySelector(".side-bar-3");


let cards3 = []

function printCards3(data) {
    data.forEach(el => {
       
	
		
		let sideTitle=document.createElement("span")
		sideTitle.classList.add("side-ha3")
			let link=document.createElement("a")
			let image=document.createElement("img")
			image.src=el.image;
			sideTitle.textContent=el.title
			image.alt=el.title
				link.href=el.source_link
		
		
				link.appendChild(image);
				link.appendChild(sideTitle);
	
				link.classList.add("side-schedule");
		
		
			
			sideBarThree.appendChild(link);
    })
}

fetch("side-data-3.json")
.then(res => res.json())
.then(function(data){
    printCards3(data.slice(0, 8))
    cards3 = data.slice(8)
})


sideBarTwo.classList.add("display");
sideBarThree.classList.add("display");

var popular=document.querySelector("#popular");
var trending=document.querySelector("#trending");
var latest=document.querySelector("#latest");
popular.classList.add("active-side");
popular.addEventListener("click",function(){
	sideBar.classList.remove("display");
	sideBarTwo.classList.add("display");
	sideBarThree.classList.add("display");
	popular.classList.add("active-side");
	trending.classList.remove("active-side");
	latest.classList.remove("active-side");

})

trending.addEventListener("click",function(){
	sideBar.classList.add("display");
	sideBarTwo.classList.remove("display");
	sideBarThree.classList.add("display");
	popular.classList.remove("active-side");
	trending.classList.add("active-side");
	latest.classList.remove("active-side");

})

latest.addEventListener("click",function(){
	sideBar.classList.add("display");
	sideBarTwo.classList.add("display");
	sideBarThree.classList.remove("display");
	popular.classList.remove("active-side");
	trending.classList.remove("active-side");
	latest.classList.add("active-side")

})
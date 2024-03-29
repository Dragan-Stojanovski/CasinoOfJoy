"use strict"
var mainContainer = document.querySelector(".main-container");
const loadMoreBtn = document.querySelector('.load-more')
loadMoreBtn.classList.add("btn")
let cards = []

function printCards(data) {
    data.forEach(el => {
       
    let mainWrap=document.createElement("div");
mainWrap.classList.add("whole-wrap")
let title=document.createElement("h2")
let category=document.createElement("h5")
    let caption=document.createElement("p")
    let img=document.createElement("img")
    let link=document.createElement("a")
    let time=document.createElement("h6")
    time.classList.add("vreme")
        img.src=el.image
        category.textContent=el.category
        title.textContent=el.title
        caption.textContent=el.caption
       
        link.href=el.source_link
        time.textContent=el.time;


		link.appendChild(img);
		link.appendChild(category);
		link.appendChild(title);
		
		link.appendChild(time);
	mainWrap.appendChild(link)
	mainWrap.appendChild(caption)
mainContainer.appendChild(mainWrap);
    })
}

fetch("data-4.json")
.then(res => res.json())
.then(function(data){
    printCards(data.slice(0, 8))
    cards = data.slice(8)
})

loadMoreBtn.addEventListener('click', function() {
    printCards(cards.splice(0, 8))
    if (cards.length <= 0) {
        loadMoreBtn.style.visibility = 'hidden'
    }
})




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






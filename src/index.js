const navLinks = document.querySelector('.nav-links');
const dropdownArrows = document.querySelectorAll('.nav-links p');
const arrows = document.querySelectorAll('.nav-links p img');
const mobileArrows = document.querySelectorAll('.mobile-menu img');
const mobileArrows2 = document.querySelectorAll('.mobile-menu p');
const dropdownLists = document.querySelectorAll('.links-list ');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('DOMContentLoaded', () => {
	if (innerWidth < 1020) {
		mobileArrows.forEach(arrow => {
			arrow.setAttribute('src', 'images/icon-arrow-dark.svg');
			arrow.style.cursor = 'pointer';
		});
	} else {
		mobileArrows.forEach(arrow => {
			arrow.setAttribute('src', 'images/icon-arrow-light.svg');
		});
	}
});

const showDropdown = arrow => {
	dropdownLists.forEach(dropdown => {
		if (dropdown.parentElement.firstElementChild === arrow) {
			if (dropdown.style.display === 'block') {
				dropdown.parentElement.firstElementChild.firstElementChild.style.transform =
					'rotate(0)';
				dropdown.style.display = 'none';
			} else {
				dropdownLists.forEach(dropdown => {
					if (dropdown.style.display === 'block') {
						dropdown.parentElement.firstElementChild.firstElementChild.style.transform =
							'rotate(0)';
						dropdown.style.display = 'none';
					}
				});
				dropdown.parentElement.firstElementChild.firstElementChild.style.transform =
					'rotate(180deg)';
				dropdown.style.display = 'block';
			}
		}
	});
};

hamburger.addEventListener('click', () => {
	if (mobileMenu.style.transform === 'scale(1)') {
		mobileMenu.style.transform = 'scale(0)';
	} else {
		mobileMenu.style.transform = 'scale(1)';
	}
});

navLinks.addEventListener('click', e => {
	dropdownArrows.forEach(arrow => {
		if (e.target === arrow) {
			showDropdown(arrow);
		}
	});
});

mobileMenu.addEventListener('click', e => {
	mobileArrows2.forEach(arrow => {
		if (e.target === arrow || e.target === arrow.children.item(0)) {
			showDropdown(arrow);
		}
	});
});

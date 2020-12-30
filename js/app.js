
 //Define Global Variables

const fragment = document.createDocumentFragment();
const navlist = document.querySelector('ul');
const sections = document.querySelectorAll('section');




// build the nav

 Nav  = () => {
     
    for (let i = 0; i < sections.length; i++) {
        
        const item = document.createElement('li');
        item.classList.add('list-item');
        
        const AttrItem = sections[i].getAttribute('data-nav');
        const IdItem = sections[i].getAttribute('id')
        item.innerHTML = `<a class="nav-link" href="#${IdItem}"> ${AttrItem}</a>`;
        fragment.appendChild(item);
    }
    navlist.appendChild(fragment);
}

Nav();

// Scroll to section on link click

function scrollToClick() {
    navlist.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};

scrollToClick();

                      
                      

//Determine if an element is in the viewport
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top <= 75 &&
		distance.bottom >= 75 
		
	);
};



//It should be clear which section is being viewed while scrolling through the page.

const Items = document.querySelectorAll('.list-item');
ActiveItem = () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.toggle('list-section', isInViewport(sections[i]));
        Items[i].classList.toggle('list-item', isInViewport(sections[i]));
    };
};

document.addEventListener('scroll', function() {
    ActiveItem();
});

const header = document.querySelector('header');
const sectionOne = document.querySelector('.home-intro');
const mainNav = document.querySelector('.main-nav');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
            mainNav.classList.add('main-nav-scrolled');
        }
        else {
            header.classList.remove('nav-scrolled');
            mainNav.classList.remove('main-nav-scrolled');
        }
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);
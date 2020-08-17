const backdrop = document.querySelector('.backdrop');
console.dir(backdrop);

const mobileNav = document.querySelector('.mobile-nav');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', function(){
    backdrop.style.display = 'block';
    mobileNav.style.display = 'block';
});

backdrop.addEventListener('click', function(){
    backdrop.style.display = 'none';
    mobileNav.style.display = 'none';
});

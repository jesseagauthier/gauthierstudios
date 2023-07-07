const toggleNav = document.getElementById('navtoggle');
const menuMobile = document.getElementById('menuMobile');
const closeNav = document.getElementById('closeNav');

toggleNav.addEventListener('click', function () {
    menuMobile.classList.toggle('navtoggler');
    console.log('Nav Open');
});

closeNav.addEventListener('click', function () {
    menuMobile.classList.toggle('navtoggler');
    console.log('Nav Closed');
});




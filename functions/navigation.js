// Mobile Navigation
document.addEventListener('DOMContentLoaded', function () {
    let hamburgerOpen = document.getElementById('navopen');
    let hamburgerClose = document.getElementById('navclose');


    // If navigation is closed, open it
    hamburgerOpen.addEventListener('click', function () {
        let navigation = document.getElementsByTagName('nav')[0];
        let navMenu = document.getElementById('nav-menu');
        navigation.style.display = 'block';
        hamburgerClose.style.display = 'block';
        console.log('Navigation Open Animation Started');
        console.log('Navigation Is Now Shown');
    });

    // if navigation is open, close it
    hamburgerClose.addEventListener('click', function () {
        let navigation = document.getElementsByTagName('nav')[0];
        console.log('Navigation Close Animation Started');
        navigation.style.display = 'none';
        console.log('Navigation Is Now Hidden');
    });
});
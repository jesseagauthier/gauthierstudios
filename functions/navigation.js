// Mobile Navigation
document.addEventListener('DOMContentLoaded', function () {
    let hamburgerOpen = document.getElementById('navopen');
    let hamburgerClose = document.getElementById('navclose');


    // If navigation is closed, open it
    hamburgerOpen.addEventListener('click', function () {
        let navigation = document.getElementsByTagName('nav')[0];
        let navMenu = document.getElementById('nav-menu');
        // Makes the nav menu display none to prevent flash of nav list
        navMenu.style.display = 'none';
        navigation.style.display = 'flex';
        console.log('Navigation Open Animation Started');
        // allows for the navigation background to render, then allows nav list to display to prevent a flash of the nav list
        setTimeout(function () {
            hamburgerClose.style.display = 'block';
            navMenu.style.display = 'flex';
            setTimeout(function () {
                console.log('Navigation Is Now Shown');
            }, 200);
        }, 900);



    });

    // if navigation is open, close it
    hamburgerClose.addEventListener('click', function () {
        let navigation = document.getElementsByTagName('nav')[0];
        navigation.classList.remove('no-animate');
        navigation.classList.remove('animate__fadeInLeft');
        navigation.classList.remove('delay-5');
        navigation.classList.add('animate__backOutUp');
        console.log('Navigation Close Animation Started');
        setTimeout(function () {
            navigation.style.display = 'none';
            setTimeout(function () {
                console.log('Navigation Is Now Hidden');
            }, 1000);
        }, 1000);
    });

});

// document.addEventListener("DOMContentLoaded", function () {
//     // Get all the elements on the page
//     var elements = document.querySelectorAll('*');

//     // Create an Intersection Observer instance
//     var observer = new IntersectionObserver(function (entries, observer) {
//         entries.forEach(function (entry) {
//             // Check if the element is in the viewport
//             if (entry.isIntersecting) {
//                 // Add the "animate" class to the element


//                 entry.target.classList.add('delay-5');
//                 entry.target.classList.add('animate__fadeInLeft');
//                 entry.target.classList.add('animate');

//                 // Log the element to the console
//                 console.log('Added "animate" class to element:', entry.target);
//                 // Stop observing the element
//                 observer.unobserve(entry.target);
//                 // Stop observing the element
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0
//     });

//     // Loop through each element and observe it if it does not have the "no-animate" class
//     elements.forEach(function (element) {
//         if (!element.classList.contains('no-animate')) {
//             observer.observe(element);
//         }
//     });
// });

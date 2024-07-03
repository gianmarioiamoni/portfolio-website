// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelectorAll('.nav__link');

// // navToggle.addEventListener('click', () => {
// //     document.body.classList.toggle('nav-open');
// // });

// // JavaScript per gestire il toggle della barra laterale
// document.querySelector('.hamburger').addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.body.classList.remove('nav-open');
//     });
// })

// // JavaScript for toggle navigation
// const navToggle = document.querySelector('.nav-toggle');
// const nav = document.querySelector('.nav');

// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
// });

// JavaScript per gestire il toggle della barra di navigazione
const navToggle = document.querySelector('.nav-toggle');
// const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Chiude la barra laterale quando si clicca su una voce di navigazione
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

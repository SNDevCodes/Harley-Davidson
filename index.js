let navBtn = document.querySelector('.nav-btn');
let navOpen = document.querySelector('.navs-open');
let navClose = document.querySelector('.navs-close');
let allNavs = document.querySelectorAll('.navs')
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('.header');


// Click for menu toggle 
navBtn.addEventListener('click', function (e) {
    for (i = 0; i < allNavs.length; i++) {
        allNavs[i].classList.toggle('hide');
    }

    if (navOpen.classList.contains('hide')) {
        sidebar.classList.add('active')
    }
    else {
        sidebar.classList.remove('active')
    }
})

// Scroll to change navigation background color 
document.addEventListener('scroll', function () {
    if (scrollY > 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');

    }
})



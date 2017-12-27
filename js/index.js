const D = document;
const TODAY = new Date();
const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const IS_ACTIVE = 'is-active';

const active = {day: '', element: ''};

const memes = {
    everyday: [
        'https://imgur.com/QnOlQR4.png',
        'https://imgur.com/wGhTo2u.png'
    ],
    monday: [
        'https://imgur.com/9BntIBr.png',
        'https://imgur.com/2Lxl2sz.png',
        'https://imgur.com/n08AWKw.png',
        'https://imgur.com/Atg8IuC.png'
    ],
    tuesday: [
        'https://imgur.com/44Mi5AS.png',
        'https://imgur.com/rmq4UC1.png',
        'https://imgur.com/Z1pyOTw.png'
    ],
    wednesday: [
        'https://imgur.com/2b2o71L.png',
        'https://imgur.com/DWyyZKs.png',
        'https://imgur.com/rKKazO7.png'
    ],
    thursday: [
        'https://imgur.com/auw2fB7.png',
        'https://imgur.com/eLcM77u.png'
    ],
    friday: [
        'https://imgur.com/384BCJG.png',
        'https://imgur.com/Ogl55XK.png',
        'https://imgur.com/sI417gM.png',
        'https://imgur.com/1huUGAq.png',
        'https://imgur.com/uz21R9T.png'
    ],
    saturday: [
        'https://imgur.com/hgmj9Su.png',
        'https://imgur.com/37A3bf5.png',
        'https://imgur.com/SqkkKvS.png'
    ],
    sunday: [
        'https://imgur.com/KmOdIKG.png',
        'https://imgur.com/17kYp0r.png',
        'https://imgur.com/DBvi1Zv.png',
        'https://imgur.com/p1JZhpB.png'
    ]
};

function clearIsActiveClasses(currentElement) {
    DAYS.forEach(function (day) {
        const id = 'navbar-item-' + day;
        const element = D.getElementById(id);
        if (currentElement !== element) element.classList.remove(IS_ACTIVE);
    });
}

function setupMobileNavigation() {
    const navbarMenu = D.getElementById('navbar-menu');
    const navbarBurger = D.getElementById('navbar-burger');

    navbarBurger.addEventListener('click', function () {
        if (this.classList.contains(IS_ACTIVE)) {
            navbarBurger.classList.remove(IS_ACTIVE);
            navbarMenu.classList.remove(IS_ACTIVE);
        } else {
            navbarBurger.classList.add(IS_ACTIVE);
            navbarMenu.classList.add(IS_ACTIVE);
        }
    });
}

function setupNavbarDayClickListeners(days) {
    days.forEach(function (day) {
        const id = 'navbar-item-' + day;
        const element = D.getElementById(id);

        element.addEventListener('click', function () {
            element.classList.add(IS_ACTIVE);
            active.day = day;
            active.element = element;

            setMemeOfTheDay(active.day);
            clearIsActiveClasses(element);
        })
    });
}

function setupRandomMemeButton() {
    const element = D.getElementById('random-meme-button');
    element.addEventListener('click', function () {
        setMemeOfTheDay(active.day);
    });
}

function setMemeOfTheDay(day) {
    const element = D.getElementById('meme-image');
    const dayMemes = memes[day].concat(memes.everyday);
    const index = Math.floor(Math.random() * dayMemes.length - 1) + 1;

    if (element.src === dayMemes[index]) {
        setMemeOfTheDay(day);
    } else {
        element.src = dayMemes[index];
    }
}

function setActiveNavbarDay(day) {
    const id = 'navbar-item-' + day;
    const element = D.getElementById(id);

    element.classList.add(IS_ACTIVE);
    active.day = day;
    active.element = element;
}

D.addEventListener('DOMContentLoaded', function () {
    const day = DAYS[TODAY.getDay()];

    setupMobileNavigation();
    setupNavbarDayClickListeners(DAYS);
    setupRandomMemeButton();
    setActiveNavbarDay(day);
    setMemeOfTheDay(active.day);
});

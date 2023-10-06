//SCORE NUMBERS
const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');

//HOME
const homePlus1El = document.getElementById('home-plus1');
const homePlus2El = document.getElementById('home-plus2');
const homePlus3El = document.getElementById('home-plus3');

//GUEST
const guestPlus1El = document.getElementById('guest-plus1');
const guestPlus2El = document.getElementById('guest-plus2');
const guestPlus3El = document.getElementById('guest-plus3');

//RESET
const resetButton = document.querySelector('.btn'); 

let homeCount = 0;
let guestCount = 0;

function plus1(id) {
    if (id === 'home-plus1') {
        homeCount += 1;
        homeScoreEl.textContent = homeCount;
    } else if (id === 'guest-plus1') {
        guestCount += 1;
        guestScoreEl.textContent = guestCount;
    }
    
}

function plus2(id) {
    if (id === 'home-plus2') {
        homeCount += 2;
        homeScoreEl.textContent = homeCount;
    } else if (id === 'guest-plus2') {
        guestCount += 2;
        guestScoreEl.textContent = guestCount;
    }
}

function plus3(id) {
    if (id === 'home-plus3') {
        homeCount += 3;
        homeScoreEl.textContent = homeCount;
    } else if (id === 'guest-plus3') {
        guestCount += 3;
        guestScoreEl.textContent = guestCount;
    }
}

function resetScores() {
    homeCount = 0;
    guestCount = 0;
    homeScoreEl.textContent = homeCount;
    guestScoreEl.textContent = guestCount;
}


resetButton.addEventListener('click', resetScores);

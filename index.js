let homeScore = 0

let homeScoreUpdate = document.getElementById("home-score")

function plusOneHome() {
    homeScoreUpdate.textContent = homeScore + 1
    homeScore += 1
}

function plusTwoHome() {
    homeScoreUpdate.textContent = homeScore + 2
    homeScore += 2
}

function plusThreeHome() {
    homeScoreUpdate.textContent = homeScore + 3
    homeScore += 3
} 

let guestScore = 0

let guestScoreUpdate = document.getElementById("guest-score")

function plusOneGuest() {
    guestScoreUpdate.textContent = guestScore + 1
    guestScore += 1
}

function plusTwoGuest() {
    guestScoreUpdate.textContent = guestScore + 2
    guestScore += 2
}

function plusThreeGuest() {
    guestScoreUpdate.textContent = guestScore + 3
    guestScore += 3
}

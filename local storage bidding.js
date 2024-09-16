const bidsElement = document.getElementById("bids");
const bidInput1 = document.getElementById("bidInput1");
const bidinput2 = document.getElementById("bidInput2");

function validateBid(name) {
    if (localStorage.getItem(name) === null) {
        localStorage.setItem(name, JSON.stringify([]));
        return [];
    } else {
        return JSON.parse(localStorage.getItem(name));
    }
}

let bids1 = validateBid("bids1");
let bids2 = validateBid("bids2");

function addBid(bid, user) {
    let bids = validateBid(user);
    bids.push(Number(bid));
    localStorage.setItem(user, JSON.stringify(bids));
}

function updateBids() {
    let bids1 = JSON.parse(localStorage.getItem("bids1"));
    let bids2 = JSON.parse(localStorage.getItem("bids2"));
    
    bidsElement.innerText = "";
    for (let bid of bids1) {
        bidsElement.innerText += `bidder 1: ${bid}`;
        bidsElement.innerHTML += "<br>";
    }
    for (let bid of bids2) {
        bidsElement.innerText += `bidder 2: ${bid}`;
        bidsElement.innerHTML += "<br>";
    }
}

// make sure bids are listed when page loads
updateBids();
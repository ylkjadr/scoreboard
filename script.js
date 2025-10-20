let homeCounter = document.getElementById("home-counter")
let visitCounter = document.getElementById("visit-counter")

let anotherHomeCounter = 0
let anotherVisitCounter = 0

function homePlusOne(){
    anotherHomeCounter += 1
    homeCounter.textContent = anotherHomeCounter
}

function homePlusTwo(){
    anotherHomeCounter += 2
    homeCounter.textContent = anotherHomeCounter
}

function homePlusTree(){
    anotherHomeCounter += 3
    homeCounter.textContent = anotherHomeCounter
}

function visitPlusOne(){
    anotherVisitCounter += 1
    visitCounter.textContent = anotherVisitCounter
    console.log(anotherVisitCounter)
}

function visitPlusTwo(){
    anotherVisitCounter += 2
    visitCounter.textContent = anotherVisitCounter
    console.log(anotherVisitCounter)
}

function visitPlusTree(){
    anotherVisitCounter += 3
    visitCounter.textContent = anotherVisitCounter
    console.log(anotherVisitCounter)
}
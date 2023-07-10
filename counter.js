const decreaseButton = document.getElementById('decrease-button');
const resetButton = document.getElementById('reset-button');
const increaseButton = document.getElementById('increase-button');
const counter = document.getElementById('counter');

let counterNum = counter.innerHTML;

function decrCounter() {
    counterNum--;
    counter.innerHTML = counterNum;
}

function incrCounter() {
    counterNum++;
    counter.innerHTML = counterNum;
}

decreaseButton.addEventListener('click', function() {
    decrCounter();
});

resetButton.addEventListener('click', function() {
    counterNum = 0;
    counter.innerHTML = counterNum;
})

increaseButton.addEventListener('click', function() {
    incrCounter();
})
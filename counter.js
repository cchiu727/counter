const decreaseButton = document.getElementById('decrease-button');
const resetButton = document.getElementById('reset-button');
const increaseButton = document.getElementById('increase-button');
const counterLabel = document.getElementById('counter');

class Counter {
    constructor() {
        this.value = 0;
        this.class = '';
    }

    setClass() {
        if (this.value > 0) {
            counterLabel.className = 'green';
        }
        else if (this.value < 0) {
            counterLabel.className = 'red';
        }
        else {
            counterLabel.className = '';
        }
    }

    updateCounterLabel(val) {
        counterLabel.innerHTML = val;
    }

    updateValue(step) {
        this.value += step;
        this.setClass();
        this.updateCounterLabel(this.value);
    }

    reset() {
        this.value = 0;
        this.setClass();
        this.updateCounterLabel(this.value);
    }
}

let counter = new Counter();

decreaseButton.addEventListener('click', function() {
    counter.updateValue(-1);
});

resetButton.addEventListener('click', function() {
    counter.reset();
});

increaseButton.addEventListener('click', function() {
    counter.updateValue(1);
});
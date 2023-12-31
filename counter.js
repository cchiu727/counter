var decreaseButton = document.getElementById('decrease-button');
var resetButton = document.getElementById('reset-button');
var increaseButton = document.getElementById('increase-button');
var counterLabel = document.getElementById('counter');
var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
    }
    Counter.prototype.setClass = function () {
        if (this.value > 0) {
            if (counterLabel) {
                counterLabel.className = 'green';
            }
        }
        else if (this.value < 0) {
            if (counterLabel) {
                counterLabel.className = 'red';
            }
        }
        else {
            if (counterLabel) {
                counterLabel.className = '';
            }
        }
    };
    Counter.prototype.updateCounterLabel = function (val) {
        if (counterLabel) {
            counterLabel.innerHTML = val.toString();
        }
    };
    Counter.prototype.updateValue = function (step) {
        this.value += step;
        this.setClass();
        this.updateCounterLabel(this.value);
    };
    Counter.prototype.reset = function () {
        this.value = 0;
        this.setClass();
        this.updateCounterLabel(this.value);
    };
    return Counter;
}());
var counter = new Counter();
if (decreaseButton) {
    decreaseButton.addEventListener('click', function () {
        counter.updateValue(-1);
    });
}
if (resetButton) {
    resetButton.addEventListener('click', function () {
        counter.reset();
    });
}
if (increaseButton) {
    increaseButton.addEventListener('click', function () {
        counter.updateValue(1);
    });
}

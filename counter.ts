const decreaseButton: HTMLElement | null = document.getElementById('decrease-button');
const resetButton: HTMLElement | null = document.getElementById('reset-button');
const increaseButton: HTMLElement | null = document.getElementById('increase-button');
const counterLabel: HTMLElement | null = document.getElementById('counter');

class Counter {
    private value: number;

    constructor() {
        this.value = 0;
    }

    setClass(): void {
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
    }

    updateCounterLabel(val: number): void {
        if (counterLabel) {
            counterLabel.innerHTML = val.toString();
        }
    }

    updateValue(step: number): void {
        this.value += step;
        this.setClass();
        this.updateCounterLabel(this.value);
    }

    reset(): void {
        this.value = 0;
        this.setClass();
        this.updateCounterLabel(this.value);
    }
}

let counter = new Counter();

if (decreaseButton) {
    decreaseButton.addEventListener('click', function() {
        counter.updateValue(-1);
    });
}

if (resetButton) {
    resetButton.addEventListener('click', function() {
        counter.reset();
    });
}

if (increaseButton) {
    increaseButton.addEventListener('click', function() {
        counter.updateValue(1);
    });
}

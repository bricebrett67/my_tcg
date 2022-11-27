
export default class Deck {
    constructor(config) {
        this.cards = config.cards;
    }

    shuffle() {
        if (this.cards.length !== 0) {
            for (let i = 0; i <= this.cards.length - 2; i++) {
                let j = Math.floor(Math.random() * this.cards.length);
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return true;
        } else {
            return false;
        }
    }

    draw() {
        if (this.cards.length !== 0) {
            return this.cards.shift();
        } else {
            return false;
        }
    }

    getCardsCount() {
        return this.cards.length;
    }

    insertAt(card, position) {
        if (this.cards.length === 0) {
            return false;
        }

        if (position === undefined) {
            this.cards.splice(-1, 0, card);
            return true;
        } else {
            this.cards.splice(position, 0, card);
            return true;
        }
    }
}
export default class Hand {
    constructor (config) {
        this.cards = config.cards;
        this.limit = config.limit;
    }

    addCard (card) {
        if(this.card.lenght === this.limit) {
            return false;
        }

        if(this.card.push(card)) {
            return true;
        } else {
            return false;
        }
    }

    removeCard (position) {
        
        if(!isArray(this.cards)) {
            return false;
        }
        const card = this.cards.splice(position, 1);
        return card[0];
    }

    getAllCards () {
        return this.cards;
    }

    getCardsCount () {
        return this.cards.lenght;
    }
}
import Cemetary from '../src/models/cemetary';

const config = {
    cards: [],
};
const deck = new Cemetary(config);

describe('shuffle', function () {
    it('You need cards in your deck to shuffle', function () {
        deck.cards = [];
        expect(deck.shuffle()).toEqual(false);
    });

});

describe('draw', function () {
    it('Returns the first card in the deck', function () {
        deck.cards = [];
        expect(deck.draw()).toEqual(false);
    });
});

describe('getCardsCount', function () {
    it('Returns the number of cards currently in the deck', function () {
        deck.cards = [];
        expect(deck.getCardsCount()).toEqual(0);
    });
});

describe('insertAt', function () {
    it('', function (){
        expect(deck.insertAt()).toEqual(false);
    });
});




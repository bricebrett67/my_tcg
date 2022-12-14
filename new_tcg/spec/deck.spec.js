import Deck from '../src/models/deck';

const config = {
    cards: [],
};
const deck = new Deck(config);

describe('shuffle', function () {
    it('You need cards in your deck to shuffle', function () {
        deck.cards = [];
        expect(deck.shuffle()).toEqual(false);
    });

});

describe('draw', function () {
    it('Returns the first card in the deck', function () {
        deck.cards = ['cards1'];
        expect(deck.draw()).toEqual('cards1');
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




import Deck from '../src/models/deck';

const config = {
    cards: [],
};
const deck = new Deck(config);

describe('shuffle', function (){
    it('You need cards in your deck to shuffle', function () {
        deck.cards = [];
        expect(deck.shuffle()).toEqual(false);
    });
}); 




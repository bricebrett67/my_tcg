import Board from '../src/models/board';

const config = {
    cards: [],
};
const hand = new Board(config);

describe('addCard', function () {
    it('Must return true if everything is fine', function () {
        hand.cards = [];
        expect(hand.addCard()).toEqual(false);
    });
});

// describe('removeCard', function () {
//     it('Return false if no card in deck', function () {
//         hand.cards = [];
//         expect(hand.removeCard(0)).toEqual(false);
//     });
// });

describe('getAllCards', function () {
    it('Must return an array with a test card', function () {
        hand.cards = ['test'];
        expect(hand.getAllCards()).toEqual(['test']);
    });
});

// describe('getCardsCount', function () {
//     it('Must return the number of cards in your deck', function () {
//         hand.cards = ["card1", "cards2", "cards3"],
//         expect(hand.getCardsCount()).toBe(3);
//     });
// });
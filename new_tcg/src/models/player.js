import ModelFactory from './factory';
import Deck from './deck';
import Board from './board';
import Hand from './hand';
import Cemetary from './cemetary';
import Pawn from './pawn';

export default class Player extends Pawn {

    constructor(config) {
        super(life, strenght, def);
        this.type = config.type;

        this.deck = ModelFactory.get('deck');
        this.board = ModelFactory.get('board');
        this.hand = ModelFactory.get('hand');
        this.Cemetary = ModelFactory.get('cemetary');
    }

    shuffle (deck = 'deck') {
        if(deck === 'deck') {
            return this.deck.shuffle();
        } else if (deck === 'cemetary') {
            return this.Cemetary.shuffle();
        } else {
            return false;
        }
    }

    draw () {
        return this.deck.draw();
    }

    playCard (position) {
        return this.board.addCard(this.hand.removeCard(position));
    }

    discard (position) {
        return this.Cemetary.insertArt(this.hand.removeCard(position), 0);
    }

    attack(position, target) {

    }
}
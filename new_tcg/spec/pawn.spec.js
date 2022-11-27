import Pawn from '../src/models/pawn';

// const deck = new Pawn(config);

const player = new Pawn(100, 30, 10);

describe('getLife', function () {
    it('Must return life`s value', function () {
        expect(player.getLife()).toEqual(100);
    });
});

describe('getStrenght', function () {
    it('Must return strenght`s value', function () {
        expect(player.getStrenght()).toEqual(30);
    });
});

describe('getDef', function () {
    it('Must return defense`s value', function () {
        expect(player.getDef()).toEqual(10);
    });
});



import EventManager from '../eventManager';

export default class Pawn extends EventManager {
    constructor (life, strenght, def) {
        this.life = life;
        this.strenght = strenght;
        this.def = def;
    }

    getLife () {
        return this.life;
    }

    getStrenght () {
        return this.strenght;
    }

    getDef () {
        return this.def;
    }

    attack (target) {
        return target.receiveAttack(this);
    }
}
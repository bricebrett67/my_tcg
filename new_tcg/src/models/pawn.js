import EventManager from '../eventManager';

export default class Pawn extends EventManager {
    constructor (life, strenght, def) {
        super();
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

    recieveAttack(opponent = false, strikeBack = false) {
        if (strikeBack === true) {
            this.life = this.life - opponent.getDef();
            return true;
        } else {
            this.life = this.life - opponent.getStrength();
            return opponent.recieveAttack(this, true);
        }
    }
}
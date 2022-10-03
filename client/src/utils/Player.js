export default class Player {
    //constructor
    constructor(level, maxHealth, attack, defense, portrait, altText) {
        this.level = level;
        this.maxHealth = maxHealth;
        this.currentHealth = maxHealth;
        this.attack = attack;
        //this.magic = magic;
        this.defense = defense;
        //this.mDefense = mDefense;
        this.portrait = portrait;
        this.altText = altText;
        this.dead = false;
    }
    //attack functions
    physicalAttack(target) {
        let rng = Math.floor(Math.random() * 11); 
        console.log("rng: "+ rng);
        console.log("attack "+ (this.attack - target.defense));
        if ((rng < 2)||((this.attack - target.defense) <= 0)) return 0;
        else if (2 <= rng && rng < 10) {
            target.currentHealth = target.currentHealth - (this.attack - target.defense);
            return  (this.attack - target.defense);
        }
        if (rng === 10) {
            target.currentHealth = target.currentHealth - (1.5 * this.attack - target.defense);
            return  Math.floor(1.5 * (this.attack - target.defense));
        }
    }
    magicAttack(target) {
        let rng = Math.floor(Math.random() * 11) 
        if (rng < 2) return 0;
        else if (2 <= rng && rng < 10) {
            target.currentHealth = target.currentHealth - (this.magic - target.mDefense);
            return  (this.magic - target.mDefense);
        }
        if (rng === 10) {
            target.currentHealth = target.currentHealth - (1.5 * this.magic - target.mDefense);
            return  (1.5* (this.magic - target.mDefense));
        }
    }
    //heal function
    heal(amount) {
        this.currentHealth = this.currentHealth + amount;
        if (this.currentHealth > this.maxHealth) this.currentHealth = this.maxHealth;
    }
    //checks if a character is dead
    isDead() {
        if (this.currentHealth > 0) return false;
        else if (this.currentHealth <= this.maxHealth) return true;
    }
    //level up function
    levelup() {
        this.level++;
        this.maxHealth = this.maxHealth + 5;
        this.currentHealth = this.currentHealth + 5;
        this.attack = this.attack + 1;
        this.magic = this.magic + 1;
        this.defense = this.defense + 1;
        this.mDefense = this.mDefense + 1;
    }
}
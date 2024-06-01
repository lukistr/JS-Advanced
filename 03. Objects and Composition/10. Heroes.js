function solve() {
    return {
        mage(name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    if (this.mana > 0) {
                        this.mana -= 1;
                        console.log(`${this.name} cast ${spell}`);
                    } else {
                        console.log(`${this.name} is out of mana!`);
                    }
                }
            };
        },
        fighter(name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    if (this.stamina > 0) {
                        this.stamina -= 1;
                        console.log(`${this.name} slashes at the foe!`);
                    } else {
                        console.log(`${this.name} is out of stamina!`);
                    }
                }
            };
        }
    };
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);
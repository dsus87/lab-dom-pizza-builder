// Soldier
class Soldier {
    constructor(health, strength) {
        this.health  = health;
        this.strength = strength;
    }


    attack(){
        console.log(`Health: ${this.health}, Strength: ${this.strength}`);
        return this.strength;
    }

    receiveDamage(damage){
    this.health -= damage; 
    console.log(`Current health: ${this.health}`);   

    }
  }



// Viking
class Viking extends Soldier{
    constructor (name, health, strength) {
        super(health,strength)
        this.name = name 
        
        }

receiveDamage(damage){
    this.health -= damage; 
    if (this.health > 0){
        console.log(`${this.name} has received ${damage} points of damage`); 
        return `${this.name} has received ${damage} damage`;
    } else {
        console.log(`${this.name} has died in the act of combat`);  
        return `${this.name} has died in the act of combat.`
    }

    
}

battleCry(){
    console.log("Odin Owns You All!")
}

}
      
const secondSoldier = new Viking ('Bob',100,40)

secondSoldier.receiveDamage(10)
secondSoldier.battleCry()


// Saxon
class Saxon extends Soldier {
    constructor (health,strength) {
        super (health,strength)
    }

receiveDamage(damage){
        this.health -= damage; 
        if (this.health > 0){
            console.log(`A Saxon has received ${damage} points of damage`); 
            return `A Saxon has received ${damage} points of damage`;
        } else {
            console.log(`A Saxon has died in combat`);  
            return `A Saxon has died in combat.`
        }
    
    }

}


const saxonOne = new Saxon(100,10);
saxonOne.receiveDamage(110)



// War

class War {
    constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
}

addViking(viking) {
    this.vikingArmy.push(viking)
    console.log (this.vikingArmy.length)
}

addSaxon(saxon) {
    this.saxonArmy.push(saxon)
    console.log (this.saxonArmy.length)
}

vikingAttack() {

}
    
}



console.log('hello world')
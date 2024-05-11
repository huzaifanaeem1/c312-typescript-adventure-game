#!/usr/bin/env node
// typescript project andventure game
import chalk from "chalk"
import inquirer from "inquirer"

class Hero {
    name: string;
    health = 100;


    constructor(name: string){
        this.name = name
    }

decreaseHleath(){
    this.health -= 20
}

increaseHleath(){
    this.health = 100
}
}


// for enemy

class Enemy {
    name: string;
    health = 100;


    constructor(name: string){
        this.name = name
    }

decreaseHleath(){
    this.health -= 20
}

increaseHleath(){
    this.health = 100
}
}

//step # 02   Player object

async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter Your Player Name:"
        
    }])

//step # 02   enemy object


    const { enemyType} = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices:["zombie", "alien", "witch"],
            message: "select the enemy you fight with:"
        
    }])


    // step # 03 Battle feild
const hero = new Hero (heroName);
const enemy = new Enemy (enemyType);

console.log((chalk.greenBright)(`${enemy.name} v/s ${hero.name}`))


// step # 04 Action

do{
    const { action } = await inquirer.prompt([
        //action object
        {
            type: "list",
            name: "action",
            choices: ["attack", "defend", "range target", "run"],
            message: "choose the attack type to perform action"
    }])


// step # 05 switch case

switch (action){
    case "attack":
        const randomNum = Math.random();
        if( randomNum > 0.5 ){
            //hero health decrease
            hero.decreaseHleath();
            console.log((chalk.yellowBright)(`${hero.name} health: ${hero.health}`));
            console.log((chalk.yellowBright)(`${enemy.name} health: ${enemy.health}`));
            if (hero.health <= 0){
                console.log((chalk.redBright)("You loss! try again"))
                return
            }
        }else {
            //enemy healt decrease
            enemy.decreaseHleath();
            console.log((chalk.yellowBright)(`${hero.name} health: ${hero.health}`));
            console.log((chalk.yellowBright)(`${enemy.name} health: ${enemy.health}`));
            if (enemy.health <= 0){
                console.log((chalk.greenBright)("Cogratulation! you win"))
                return
            }
        }
        break;

        }
} while(true)

}
main();






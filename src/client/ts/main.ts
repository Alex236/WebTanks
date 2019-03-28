import { Game } from "./game";
import { Arena } from "./models/arena";
import { TankFactory } from "./tank-factory";

const buttons = document.querySelectorAll("#rounds li");
buttons.forEach(button => {
    button.addEventListener('click', function(this: HTMLLIElement, event: Event){
        if(this && this.nodeName == "LI") {
            if(true){ //здесь проверка на то,
                //запущена ли игра или нет, если запущена,
                //то удалить ее и создать новую с той картой,
                //которая была выбрана по клику.
            }
            let arena = require('./rounds/' + this.getAttribute("data") + '.json');
                let game = new Game([(new TankFactory).createTanks(), (new TankFactory).createTanks()], new Arena(arena.blocks));
                game.start();
        }
    })
}) ;


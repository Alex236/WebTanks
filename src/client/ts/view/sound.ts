export class Sound{
    private audio:HTMLAudioElement = new Audio();

    run(name:string){
        this.audio.src = require("../../assets/" + name + ".mp3");
        this.audio.play();
    }

}
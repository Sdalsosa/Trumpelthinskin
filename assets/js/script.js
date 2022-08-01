window.addEventListener("load", function() {
    const canvas = document.querySelector("canvas");
    const cont = canvas.getContext("2d");
    canvas.width = window.innerWidth/2;
    canvas.height = window.innerHeight/2

    // Detect key presses
    class Movement {

    }

    // Trumpelthinskins weapon
    class Speechbubble {
        
    }

    // Trumpelthinskin sprite
    class Trump {
        constructor(game){
            this.game = game;
            this.image = document.getElementById('trumpSprite');
            this.width = 250;
            this.height= 175;
            this.x = canvas.width - this.width - canvas.width/4;
            this.y = canvas.height - this.height - canvas.height/10;
            this.frameX = 0;
        }

        update(){
            this.frameX < 11 ? this.frameX++ : this.frameX = 0;

        }
        
        draw(context){
            context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }

    // CNN reporter sprite
    class Cnn {
        
    }

    // Front scenery images
    class Foreground {
        
    }

    // Background image
    class Background {
        
    }

    // Score counter and display
    class Score {
        
    }

    // Main game code
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.trump = new Trump(this);
        }

        update(){
            this.trump.update();
        }
        
        draw(context){
            this.trump.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    // Animate the canvas
    function animate() {
        cont.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(cont);
        requestAnimationFrame(animate);
    }

    animate();
})
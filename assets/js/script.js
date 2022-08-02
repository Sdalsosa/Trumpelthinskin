window.addEventListener("load", function() {
    const canvas = document.querySelector("canvas");
    const cont = canvas.getContext("2d");
    canvas.height = 768;
    canvas.width = 1200;

    // Detect key presses
    class Movement {
        constructor(game){
            this.game = game;
            window.addEventListener("keydown", event => {
                switch (event.key) {
                    case 'a':
                        this.game.keys.a.pressed = true
                        break
                    case 'd':
                        this.game.keys.d.pressed = true
                        break
                    case ' ':
                        this.game.keys.space.pressed = true
                        break  
                  }
            })
            window.addEventListener("keyup", event => {
                switch (event.key) {
                    case 'a':
                        this.game.keys.a.pressed = false
                        break
                    case 'd':
                        this.game.keys.d.pressed = false
                        break
                    case ' ':
                        this.game.keys.space.pressed = false
                        break  
                  }
            })
            
        }

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
            this.x = 50;
            this.y = (canvas.height - this.height) *.82;
            this.frame = 0;
            this.velocity = 0 ;
        }

        update(){
            this.frame < 11 ? this.frame++ : this.frame = 0;
            if (this.game.keys.a.pressed && this.x >50) {
                this.velocity = -5;
            } else if (this.game.keys.d.pressed && this.x < canvas.width/2) {
                this.velocity = 5;
            } else this.velocity = 0;
            this.x += this.velocity;
            

        }
        
        draw(context){
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
    }

    // CNN reporter sprite
    class Reporter {
        constructor(game){
            this.game = game;
            this.image = document.getElementById('cnnSprite');
            this.width = 231;
            this.height= 180;
            this.x = canvas.width;
            this.y = (canvas.height - this.height) *.82;
            this.frame = 0;
            this.velocity = -2;

        }

        update(){
            this.frame < 7 ? this.frame++ : this.frame = 0;
            this.x += this.velocity;
            if (this.game.keys.d.pressed) {
                this.velocity = -3;
            } else this.velocity = -2;
            this.x += this.velocity;

        }
        
        draw(context){
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        
    }

    // Front scenery images
    class Foreground {
        
    }

    // Background image
    class Background {
        constructor(game){
            this.game = game;
            this.image = document.getElementById('bgImage');
            this.width = 3000;
            this.height= 768;
            this.x = 0;
            this.y = 0;
        }

        update(){
            if (this.game.keys.d.pressed) {
                this.velocity = -2;
            } else this.velocity = 0;
            this.x += this.velocity;
            

        }
        
        draw(context){
            context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        
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
            this.reporter = new Reporter(this);
            this.move = new Movement(this);
            this.keys = {
                a: {
                    pressed: false
                  },
                d: {
                    pressed: false
                  },
                space: {
                    pressed: false
                  }
            }
            this.background = new Background(this);
        }

        update(){
            this.background.update();
            this.trump.update();
            this.reporter.update();
        }
        
        draw(context){
            this.background.draw(context);
            this.trump.draw(context);
            this.reporter.draw(context);
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
window.addEventListener("load", function() {
    const canvas = document.querySelector("canvas");
    const cont = canvas.getContext("2d");
    canvas.height = 768;
    canvas.width = 1200;

    // Detect key presses
    class Movement {
        constructor(game) {
            this.game = game;
            window.addEventListener("keydown", event => {
                switch (event.key) {
                    case 'a':
                        this.game.keys.a.pressed = true;
                        break;
                    case 'd':
                        this.game.keys.d.pressed = true;
                        break;
                    case ' ':
                        this.game.keys.space.pressed = true;
                        break;
                  }
            });
          
            window.addEventListener("keyup", event => {
                switch (event.key) {
                    case 'a':
                        this.game.keys.a.pressed = false;
                        break;
                    case 'd':
                        this.game.keys.d.pressed = false;
                        break;
                    case ' ':
                        this.game.keys.space.pressed = false;
                        break;
                  }
            });
        }
    }

    // Trumpelthinskins weapon
    class Bubble {
        constructor(game, x, y) {
            this.game = game;
            this.image = document.getElementById('bubbleSprite');
            this.x = x + 150;
            this.y = y;
            this.width = 100;
            this.height = 100;
            this.velocity = 5;
            this.frame = 0;
        }

        update() {
            this.frame < 7 ? this.frame++ : (this.frame = 0);
            this.x += this.velocity;
        }

        draw(context) {
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);


        }
    }

    // Trumpelthinskin sprite
    class Trump {
        constructor(game) {
            this.game = game;
            this.image = document.getElementById('trumpSprite');
            this.width = 250;
            this.height= 175;
            this.x = 50;
            this.y = (canvas.height - this.height) * 0.82;
            this.frame = 0;
            this.velocity = 0;
            this.bubbles = [];
            this.bubbleTimer = 0;
            this.bubbleInterval = 5;
        }

        update() {
            this.frame < 11 ? this.frame++ : this.frame = 0;
            if (this.game.distance > 2400) this.game.distance = 2400;
            if (this.game.keys.a.pressed && this.x >50 && this.game.distance < 2400) {
                this.velocity = -2;
            } else if (this.game.keys.d.pressed && this.x < canvas.width / 2 - this.width && this.game.distance < 2400) {
                this.velocity = 2;
            } else this.velocity = 0;
            this.x += this.velocity;
            if (this.game.keys.d.pressed) {
                this.game.distance += 2;
            } else if (this.game.keys.a.pressed && this.game.distance > 0) {
                this.game.distance -= 2;
            }

            this.bubbles.forEach(bubble => {
                bubble.update();
            });
            this.bubbles = this.bubbles.filter(bubble => !bubble.removeFromArray);
            
            if (this.game.keys.space.pressed){
            if (this.bubbleTimer > this.bubbleInterval){
                this.game.trump.fireBubble();
                this.bubbleTimer = 0;
            } else {
                this.bubbleTimer++;
            }   
                
            }
         }
        
        draw(context) {
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
            this.bubbles.forEach(bubble => {
                bubble.draw(context);
            });
        }

        fireBubble() {
            this.bubbles.push(new Bubble(this.game, this.x, this.y));
        }
    }

    // CNN reporter sprite
    class Reporter {
        constructor(game) {
            this.game = game;
            this.image = document.getElementById('cnnSprite');
            this.width = 231;
            this.height= 180;
            this.x = canvas.width;
            this.y = (canvas.height - this.height) * 0.82;
            this.frame = 0;
            this.velocity = -2;

        }

        update() {
            this.frame < 7 ? this.frame++ : this.frame = 0;
            this.x += this.velocity;
            if (this.game.keys.d.pressed) {
                this.velocity = -4;
            } else this.velocity = -2;
            this.x += this.velocity;

        }
        
        draw(context){
            context.drawImage(this.image, this.frame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        
    }

    // Front scenery images
    class Foreground {
        constructor(game) {
            this.game = game;
            this.image = document.getElementById('trees');
            this.width = 6000;
            this.height= 768;
            this.x = 0;
            this.y = 0;
        }

        update() {
            if (this.game.keys.a.pressed && this.game.distance>0 && this.game.distance <2400) {
                this.velocity = 4;
            } else if (this.game.keys.d.pressed && this.game.distance <2400) {
                this.velocity = -4;
            } else this.velocity = 0;
            this.x += this.velocity;
        }
        
        draw(context) {
            context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        
    }

    // Background image
    class Background {
        constructor(game) {
            this.game = game;
            this.image = document.getElementById('bgImage');
            this.width = 6000;
            this.height= 768;
            this.x = 0;
            this.y = 0;
        }

        update() {
            if (this.game.keys.a.pressed && this.game.distance>0 && this.game.distance <2400) {
                this.velocity = 2;
            } else if (this.game.keys.d.pressed && this.game.distance <2400) {
                this.velocity = -2;
            } else this.velocity = 0;
            this.x += this.velocity;
        }
        
        draw(context) {
            context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        }
        
    }

    // Main game code
    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.trump = new Trump(this);
            this.reporter = new Reporter(this);
            this.move = new Movement(this);
            this.keys = {
                a: { pressed: false },
                d: { pressed: false },
                space: { pressed: false }
            };
            this.background = new Background(this);
            this.trees = new Foreground(this);
            this.distance = 0;
            this.reporters = [];
            this.reporterTimer = 0;
            this.gameOver = false;
         }

        update() {
            this.background.update();
            this.trees.update();
            this.trump.update();
            this.reporterInterval = Math.random() * (5000 - 100);
            if (this.reporterTimer > this.reporterInterval && this.distance <2000){
                this.addReporter();
                this.reporterTimer = 0;
            } else {
                this.reporterTimer++;
            }   
            this.reporters.forEach(reporter => {
                reporter.update();
                if (this.collisionDetect(this.trump, reporter)) {
                    reporter.removeFromArray = true;
                    this.gameOver = true;
                }
                this.trump.bubbles.forEach(bubble => {
                    if (this.collisionDetect(bubble, reporter)) {
                        reporter.removeFromArray = true;
                        bubble.removeFromArray = true;
                    }
                });
            });
            this.reporters = this.reporters.filter(reporter => !reporter.removeFromArray);
            this.trump.bubbles = this.trump.bubbles.filter(bubble => !bubble.removeFromArray);
        }
        
        draw(context) {
            this.background.draw(context);
            this.trees.draw(context);
            this.trump.draw(context);
            this.reporters.forEach(reporter => reporter.draw(context));
            if (this.gameOver) {
                context.drawImage(document.getElementById('lose'), 0, 0, this.width, this.height, 0, 0, this.width, this.height);
            }
            if (this.distance >2300){
                context.drawImage(document.getElementById('win'), 0, 0, this.width, this.height, 0, 0, this.width, this.height);

            }
            
        }

        addReporter() {
            this.reporters.push(new Reporter(this));
        }

        collisionDetect(obj1, obj2) {
            return( obj1.x < obj2.x + obj2.width-100 &&
                    obj2.x < obj1.x + obj1.width -100 &&
                    obj1.y < obj2.y + obj2.height && 
                    obj2.y < obj1.y + obj1.height);
        }
    }

    const game = new Game(canvas.width, canvas.height);
    // Animate the canvas
    let lastFrame = 0;
    function animate() {
        cont.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(cont);
        requestAnimationFrame(animate);
    }

    animate();
});

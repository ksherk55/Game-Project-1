export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = player;
        this.speed = 0;
        this.maxSpeed = 1;
    }
    update(keys) {
        this.x += this.speed;
        if (keys.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (keys.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
            
        
        
    }
    draw(context) {
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}
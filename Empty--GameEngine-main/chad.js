class Chad {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset(
            "chad-spritesheet-ripped.png"), 0, 0, 64, 64, 32, .1
            );

        this.x = 0;
        this.y = 0;
        this.speed = 0;

    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 580) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}
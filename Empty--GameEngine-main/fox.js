class Fox {

    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset(
            "sprite-sheet-fox-running.png"), 0, 0, 50, 50, 9, 0.09
            );

        this.x = 0;
        this.y = 0;
        this.speed = 400;

    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 580) this.x = 0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}
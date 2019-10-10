class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        this.dir = function (newXSpeed, newYSpeed) {
            this.xspeed = newXSpeed;
            this.yspeed = newYSpeed;
        };

        this.death = function () {
            for (var i = 0; i < this.tail.length; i++) {
                var distanceBetween = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
                if (distanceBetween < 1) {
                    console.log('Snake ate itself! Starting over.');
                    this.total = 0;
                    this.tail = [];
                    break;
                }
            }
        };

        this.eat = function (foodPosition) {
            var distanceBetween = dist(this.x, this.y, foodPosition.x, foodPosition.y);
            if (distanceBetween < 1) {
                this.total++;
                return true;
            }
            else {
                return false;
            }
        };

        this.update = function () {
            if (this.total == this.tail.length) {
                for (var i = 0; i < this.tail.length - 1; i++) {
                    this.tail[i] = this.tail[i + 1];
                }
            }
            this.tail[this.total - 1] = createVector(this.x, this.y);
            this.x = this.x + this.xspeed * scl;
            this.y = this.y + this.yspeed * scl;
            // Loop round when it hits a border.
            if (this.x >= width) {
                this.x = 0;
            }
            else if (this.x < 0) {
                this.x = width - scl;
            }
            if (this.y >= height) {
                this.y = 0;
            }
            else if (this.y < 0) {
                this.y = height - scl;
            }
        };

        this.show = function () {
            fill(255);
            for (var i = 0; i < this.tail.length; i++) {
                rect(this.tail[i].x, this.tail[i].y, scl, scl);
            }
            fill(255);
            rect(this.x, this.y, scl, scl);
        };
    }
}
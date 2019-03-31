var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
		y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
	};
}

var mousePosX = w / 2;
var mousePosY = h / 2;

canvas.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	mousePosX = mousePos.x;
	mousePosY = mousePos.y;
}, false);

window.addEventListener("resize", function() {
	w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
});

var gPoint = {
	radius: 20,
	gradius: 20,
	num: -1,
	color: '#5B004E',
	draw: function() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(mousePosX, mousePosY, this.radius, 0, Math.PI * 2, true);
		ctx.fill();
		//gradient
		if (this.gradius < 15 || this.gradius > 21) {
			this.num *= -1;
		}
		this.gradius += this.num;
		var grad = ctx.createRadialGradient(mousePosX, mousePosY, 0, mousePosX, mousePosY, this.gradius);
		grad.addColorStop(0, 'white');
		grad.addColorStop(1, '#5B004E');
		ctx.fillStyle = grad;
		ctx.fill();

	}
};

var particleList = [];
var ID = 0;

var create = function(x, y, vx, vy) {
	var particle = {
		v: [vx, vy],
		speed: 0.25,
		pos: [x, y],
		color: 'white',
		radius: 1,
		draw: function() {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);
			ctx.fill();
		},
		move: function() {
			//calculate distance
			var dis = Math.sqrt(Math.pow(this.pos[0] - mousePosX, 2) + Math.pow(this.pos[1] - mousePosY, 2));
				//find unit vector
			var x = (((this.pos[0] - mousePosX) / dis) * this.speed);
			var y = (((this.pos[1] - mousePosY) / dis) * this.speed);
				//new pos
			this.pos[0] += (this.v[0] - x);
			this.pos[1] += (this.v[1] - y);

			//orbit range
			var g = 0.995;
			if (dis < 150) {
				g = 1;
			}

			//new velocity
			this.v[0] = (this.v[0] - x) * g;
			this.v[1] = (this.v[1] - y) * g;

		}
	};
	particleList[ID] = particle;
	ID++;
};

var update = function() {
	ctx.clearRect(0, 0, w, h);
	gPoint.draw();
	for (var key in particleList) {
		particleList[key].draw();
		particleList[key].move();
	}

};
for (i = 0; i < 3000; i++) {
	var x = Math.random() * w;
	var y = Math.random() * h;
	var vx = 1 - Math.random() * 2;
	var vy = 1 - Math.random() * 2;
	create(x, y, vx, vy);
}

setInterval(update, 20);
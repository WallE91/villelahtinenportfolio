/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particle'), {
    dotColor: '#fff',
    lineColor: '#fff',
	directionX: 'center',
	directionY: 'up',
	density: 17000,
	particleRadius: 15,
	lineWidth: 0.1,
	proximity: 80,
	parallax: true,
	parallaxMultiplier: 2,
	curvedLines: true,
	minSpeedX: 0.1,
	maxSpeedX: 0.8,
	minSpeedY: 0.1,
	maxSpeedY: 0.8
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



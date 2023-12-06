//Drag and Drop Functionality
let dropZone = document.getElementById('drop_zone');

dropZone.ondragover = function (event) {
	event.preventDefault();
	this.style.backgroundColor = 'initial';
};

dropZone.ondragleave = function () {
	this.style.backgroundColor = 'initial';
};

dropZone.ondrop = function (event) {
	event.preventDefault();
	this.style.backgroundColor = 'initial';
	let files = event.dataTransfer.files;
	console.log(files);

	// Get mouse coordinates
	let x = event.clientX;
	let y = event.clientY;

	// Create a new sphere for each file
	for (let i = 0; i < files.length; i++) {
		let sphere = document.createElement('div');
		sphere.classList.add('sphere');
		sphere.style.position = 'absolute';
		sphere.style.left = `${x}px`;
		sphere.style.top = `${y}px`;
		sphere.style.width = '50px';
		sphere.style.height = '50px';
		sphere.style.borderRadius = '50%';
		this.appendChild(sphere);

		// Try to read the item as a file
		let reader = new FileReader();
		reader.onload = function (e) {
			// If it succeeds, it's a file, so set the sphere's color to white
			sphere.style.backgroundColor = 'white';
		};
		reader.onerror = function (e) {
			// If it fails, it's likely a folder, so set the sphere's color to yellow
			sphere.style.backgroundColor = '#F8D775';
		};
		reader.readAsArrayBuffer(files[i]);

		// Calculate the differences between the sphere's initial position and the center of the window
		let dx = (window.innerWidth / 2 - sphere.offsetWidth / 2) - x;
		let dy = (window.innerHeight / 2 - sphere.offsetHeight / 2) - y;

		// Animate the sphere towards the center of the window, shrink it until it becomes invisible
		gsap.to(sphere, {
			x: `+=${dx}`,
			y: `+=${dy}`,
			scale: 0,
			duration: 0.5,
		});
	}
};

// Headline Shake

let tl = gsap.timeline({ repeat: -1 });
let tl2 = gsap.timeline({ repeat: -1 });
let tl3 = gsap.timeline({ repeat: -1 });
let tl4 = gsap.timeline({ repeat: -1 });


tl.to(".TLeft", {
	x: "random(-2, 2)",
	y: "random(-2, 2)",
	duration: 0.1,
	repeat: 5,
	yoyo: true
})
	.to(".TLeft", {
		x: "random(-5, 5)",
		y: "random(-5, 5)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	})
	.to(".TLeft", {
		x: "random(-10, 10)",
		y: "random(-10, 10)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	});

tl2.to(".BLeft", {
	x: "random(-2, 2)",
	y: "random(-2, 2)",
	duration: 0.1,
	repeat: 5,
	yoyo: true
})
	.to(".BLeft", {
		x: "random(-5, 5)",
		y: "random(-5, 5)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	})
	.to(".BLeft", {
		x: "random(-10, 10)",
		y: "random(-10, 10)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	});

tl3.to(".TRight", {
	x: "random(-2, 2)",
	y: "random(-2, 2)",
	duration: 0.1,
	repeat: 5,
	yoyo: true
})
	.to(".TRight", {
		x: "random(-5, 5)",
		y: "random(-5, 5)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	})
	.to(".TRight", {
		x: "random(-10, 10)",
		y: "random(-10, 10)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	});

tl4.to(".BRight", {
	x: "random(-2, 2)",
	y: "random(-2, 2)",
	duration: 0.1,
	repeat: 5,
	yoyo: true
})
	.to(".BRight", {
		x: "random(-5, 5)",
		y: "random(-5, 5)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	})
	.to(".BRight", {
		x: "random(-10, 10)",
		y: "random(-10, 10)",
		duration: 0.1,
		repeat: 5,
		yoyo: true
	});

// Wait for 5 seconds after the tab becomes active
setTimeout(() => {
	// Get the .TLeft element
	let box = document.querySelector('.TLeft');

	// Calculate the target position
	let targetX = window.innerWidth / 2 - box.offsetWidth / 2;
	let targetY = window.innerHeight / 2 - box.offsetHeight / 2;

	// Calculate the distance to move
	let moveX = targetX - box.getBoundingClientRect().left;
	let moveY = targetY - box.getBoundingClientRect().top;

	// Animate the box moving to the center of the window while rotating and shrinking
	gsap.to(box, {
		x: `+=${moveX}`,
		y: `+=${moveY}`,
		scale: 0,
		rotate: 360,
		duration: 0.75,
		onComplete: function () {
			tl.pause(); // Pause the timeline
		}
	});
}, 5000);

// Wait for 10 seconds after the tab becomes active
setTimeout(() => {
	// Get the .BLeft element
	let box = document.querySelector('.BLeft');

	// Calculate the target position
	let targetX = window.innerWidth / 2 - box.offsetWidth / 2;
	let targetY = window.innerHeight / 2 - box.offsetHeight / 2;

	// Calculate the distance to move
	let moveX = targetX - box.getBoundingClientRect().left;
	let moveY = targetY - box.getBoundingClientRect().top;

	// Animate the box moving to the center of the window while rotating and shrinking
	gsap.to(box, {
		x: `+=${moveX}`,
		y: `+=${moveY}`,
		scale: 0,
		rotate: 360,
		duration: 0.75,
		onComplete: function () {
			tl2.pause(); // Pause the timeline
		}
	});
}, 10000);

// Wait for 15 seconds after the tab becomes active
setTimeout(() => {
	// Get the .TRight element
	let box = document.querySelector('.TRight');

	// Calculate the target position
	let targetX = window.innerWidth / 2 - box.offsetWidth / 2;
	let targetY = window.innerHeight / 2 - box.offsetHeight / 2;

	// Calculate the distance to move
	let moveX = targetX - box.getBoundingClientRect().left;
	let moveY = targetY - box.getBoundingClientRect().top;

	// Animate the box moving to the center of the window while rotating and shrinking
	gsap.to(box, {
		x: `+=${moveX}`,
		y: `+=${moveY}`,
		scale: 0,
		rotate: 360,
		duration: 0.75,
		onComplete: function () {
			tl3.pause(); // Pause the timeline
		}
	});
}, 15000);

// Wait for 20 seconds after the tab becomes active
setTimeout(() => {
	// Get the .BRight element
	let box = document.querySelector('.BRight');

	// Calculate the target position
	let targetX = window.innerWidth / 2 - box.offsetWidth / 2;
	let targetY = window.innerHeight / 2 - box.offsetHeight / 2;

	// Calculate the distance to move
	let moveX = targetX - box.getBoundingClientRect().left;
	let moveY = targetY - box.getBoundingClientRect().top;

	// Animate the box moving to the center of the window while rotating and shrinking
	gsap.to(box, {
		x: `+=${moveX}`,
		y: `+=${moveY}`,
		scale: 0,
		rotate: 360,
		duration: 0.75,
		onComplete: function () {
			tl4.pause(); // Pause the timeline
		}
	});
}, 20000);

// Wait for 30 seconds after the tab becomes active and then close the tab
setTimeout(() => {
	window.close();
}, 30000);
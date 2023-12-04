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

		// Animate the sphere towards the center of the window, shrink it until it becomes invisible, and make it stretch
		gsap.to(sphere, {
			x: `+=${dx}`,
			y: `+=${dy}`,
			scale: 0,
			duration: 0.5,
		});
	}
};
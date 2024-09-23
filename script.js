const menuBars = document.getElementById("menu-bars")
const overlay = document.getElementById("overlay")
const navItems = [
	document.getElementById("nav-1"),
	document.getElementById("nav-2"),
	document.getElementById("nav-3"),
	document.getElementById("nav-4"),
	document.getElementById("nav-5"),
]

//Control navigation animation
function navAnimation(direction1, direction2) {
	navItems.forEach((nav, index) => {
		nav.classList.replace(
			`slide-${direction1}-${index + 1}`,
			`slide-${direction2}-${index + 1}`
		)
	})
}

// Functions
function toggleNav() {
	// Toggle: Menu Bars Open/Closed
	menuBars.classList.toggle("change")
	// Toggle: Menu Active
	overlay.classList.toggle("overlay-active")
	if (overlay.classList.contains("overlay-active")) {
		// Overlay Slide Right
		overlay.classList.replace("overlay-slide-left", "overlay-slide-right")
		// Animate In - Overlay
		navAnimation("out", "in")
		// Animate In - Nav Items
	} else {
		// Overlay Slide Left
		overlay.classList.replace("overlay-slide-right", "overlay-slide-left")
		//Animate Out - Overlay
		navAnimation("in", "out")
		//Animate Out - Nav Items
	}
}
// Event Listeners
menuBars.addEventListener("click", toggleNav)
navItems.forEach((nav) => nav.addEventListener("click", toggleNav))

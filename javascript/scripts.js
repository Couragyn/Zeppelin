// javascript that changes a pic to another, as well as changes the cursor
function mouseOver() {
	document.getElementById("pic").src ="images/ledzeppelin2.jpg"
	document.getElementById('pic').style.cursor = 'crosshair';
}

// javascript that changes the pic back to the original.
function mouseOut() {
	document.getElementById("pic").src ="images/ledzeppelin.jpg"
}
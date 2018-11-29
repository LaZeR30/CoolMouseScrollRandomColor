// store elements
const heading = document.getElementById("heading")
const colorButton = document.getElementById("original-button")
const mysteryButton = document.getElementById("mystery-button")  

// return random numbers to RGB value
// rgb(255, 255, 255) // rgb(#, #, #)
function rgb(num) {
    return Math.floor(Math.random() * num)
}

// color change >>> change later to string interpolation
function colorChange() {
    // randomColor needs to be a string "rgb(num, num, num)"
    const randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
}

//apply mouse scroll or click on elements
heading.onwheel = colorChange ;

colorButton.onclick = colorChange;

mysteryButton.onwheel = colorChange;


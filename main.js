// store elements

const heading = document.getElementById("heading")
const colorButton = document.getElementById("original-button")
const mysteryButton = document.getElementById("mystery-button")  

// random number functionto create color codes for the randomColor variable
// NOT JAVASCRIPT rgb(255, 255, 255)  rgb(#, #, #)
//const randomColor = "rgb('num + num + num ')"

function rgb(num) {
    return Math.floor(Math.random() * num)
}

// color change >>> what is string interpolation ??
function colorChange() {
    // randomColor needs to be a string "rgb(num + num + num)"
    const randomColor = 'rgb(' + rgb(255) + ',' + rgb(255) + ',' + rgb(255) + ')';
    event.target.style.backgroundColor = randomColor;
}

heading.onwheel = colorChange ;
//colorButton.onclick = colorChange(); DO NOT NEED '()' coz event 
colorButton.onclick = colorChange;

//mysteryButton
//msyteryButton.onwheel = colorChange;
mysteryButton.onwheel = colorChange;


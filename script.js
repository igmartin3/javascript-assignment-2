// Do your work in this file.
var boxes = document.querySelectorAll(".box");

var boxesAmt = boxes.length;

var backColor;

if (boxesAmt >= 200 && boxesAmt <= 300) {
        var backColor = "yellow";
    } else if (boxesAmt > 300 && boxesAmt <= 400) {
        var backColor = "green";
    } else if (boxesAmt > 400 && boxesAmt <= 500) {
        var backColor = "purple";
    } else if (boxesAmt > 500 && boxesAmt <= 600) {
        var backColor = "orange";
    } else if (boxesAmt > 600 && boxesAmt <= 700) {
        var backColor = "pink";
    } else if (boxesAmt > 700 && boxesAmt <= 800) {
        var backColor = "black";
    } else if (boxesAmt > 800 && boxesAmt <= 1000) {
        var backColor = "brown";
    } else {
        var backColor = "blue";
}
    
console.log(boxesAmt);
console.log(backColor);



function clickedBox() {


    for (var i = 0; i < boxesAmt; i++) {


    //boxes[i].addEventListener("click", clickedBox);

    //function clickedBox() {
      boxes[i].style.backgroundColor = backColor;
    //}

    }
}

for (var i = 0; i < boxesAmt; i++) {
    boxes[i].addEventListener("click", clickedBox);
}

//boxes[i].addEventListener("click", clickedBox);
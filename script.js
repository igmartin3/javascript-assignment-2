// Do your work in this file.
var boxes = document.querySelectorAll(".box");

var boxesAmt = boxes.length;

var backColor = "grey";

for (var i = 0; i < boxesAmt; i += 1) {
    
    if (201 <= boxesAmt <= 300) {
        var backColor = "yellow";
    } else if (301 <= boxesAmt <= 400) {
        var backColor = "green";
    } else if (401 <= boxesAmt <= 500) {
        var backColor = "purple";
    } else if (501 <= boxesAmt <= 600) {
        var backColor = "orange";
    } else if (601 <= boxesAmt <= 700) {
        var backColor = "pink";
    } else if (701 <= boxesAmt <= 800) {
        var backColor = "black";
    } else if (801 <= boxesAmt <= 900) {
        var backColor = "brown";
    }

    function clickedBox() {
        boxes[].style.backgroundColor = backColor;
    }
    
    boxes[i].addEventListener("click", clickedBox)
}
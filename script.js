// Do your work in this file.
var boxes = document.querySelectorAll(".box");

var boxesAmt = boxes.length;

var backColor;

//Had to separate the conditions with &&
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


//Function only operates on click in the
//first for loop (technically first)
function clickedBox() {


    for (var i = 0; i < boxesAmt; i++) {


    
      boxes[i].style.backgroundColor = backColor;
    

    }
}

//Added another for loop after I kept getting
//style undefined error message
//Why I think it works: maybe the "i" variable
//can only apply to 1 command...?
for (var i = 0; i < boxesAmt; i++) {
    boxes[i].addEventListener("click", clickedBox);

    //When a click occurs, go to this function
    boxes[i].onclick = function() {

        //Indicate what exact target was clicked
        //and store this in a variable
        var selected = event.target;
        //From this variable toggle between the class
        //"clicked" and "box"
        selected.classList.toggle("clicked")

        
        //var classy = document.getElementsByClassName.selected;

        //if (classy == "box") {
        //   boxes[i].classList.toggle("clicked");
        //}

        console.log(selected);
       
        
        
    }

}
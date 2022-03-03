//Create the aryImages array
var aryImages = [
  "diamondHead.jpeg",
  "horses.jpg",
  "lanikai.png",
  "plumeria-garden.jpg",
];

//Create the aryImageNames array
var aryImagesNames = [
  "Diamond Head",
  "Pa'u Riders",
  "Lanikai Beach",
  "Plumeria Garden",
];

//onLoad enevent for the function theOptions()
window.addEventListener("load", theOptions());

//onClick event for the button calling getStatus()
document.getElementById("order").addEventListener("click", getStatus);

//anon function with change event
document.getElementById("images").addEventListener("change", function () {
  document.getElementById("large").src =
    document.getElementById("images").value;
});

//Named function one
function createList(theValue, theText) {
  //define location for appendage
  var eX = document.getElementById("images");
  //make the function create a options HTML tag
  var createElement = document.createElement("option");

  //givng the tag value the "theValue" property
  createElement.value = theValue;

  //giving the tag innerHTML the "theText" property
  createElement.innerHTML = theText;

  //append it
  eX.appendChild(createElement);
}

//Named function two
function theOptions() {
  //loop through the images for the first array
  for (var i = 0; i < aryImages.length; i++) {
    createList(aryImages[i], aryImagesNames[i]);
  }
  //update the large image property
  document.getElementById("large").src = aryImages[0];
}

//Update the large image property
function getStatus() {
  if (document.getElementById("fName").value == "") {
    document.getElementById("ordered").innerHTML = "You must enter a name";
    document.getElementById("fName").style.backgroundColor = "pink";
  } else {
    document.getElementById("ordered").innerHTML =
      document.getElementById("fName").value +
      " ordered " +
      document.getElementById("qty").value +
      " of " +
      document.getElementById("images").value;
  }
}
//path variable
var path = "images/";

var car = document.getElementById("car");
//var carPic = document.getElementById("car-pic");
var boat = document.getElementById("boat");
//var boatPic = document.getElementById("boat-pic");
var plane = document.getElementById("plane");
//var planePic = document.getElementById("plane-pic");

car.addEventListener("mouseenter", picLink);
boat.addEventListener("mouseenter", picLink);
plane.addEventListener("mouseenter", picLink);

function picLink() {
  var allImages = document.querySelectorAll("img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className == "hide") {
    pic.className = "";
  } else {
    pic.className = "hide;"
  }
}

// this grabs attributes
  //var picId= this.["attributes"]["data-img"]
// car.addEventListener("click", function(){
//   if (carPic.className === "hide") {
//     carPic.className = "";
//   } else {
//     carPic.className = "hide";
//   }
// });
//
// boat.addEventListener("click", function(){
//   if (boatPic.className === "hide") {
//     boatPic.className = "";
//   } else {
//     boatPic.className = "hide";
//   }
// });
//
// plane.addEventListener("click", function(){
//   if (planePic.className === "hide") {
//     planePic.className = "";
//   } else {
//     planePic.className = "hide";
//   }
// });

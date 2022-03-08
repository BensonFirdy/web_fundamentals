var banner = document.querySelector("#banner");
var itemCount = document.querySelector("#itemCount");

function nextPic() {
  banner.src = "./images/shopping cart.jpg";
}

function prevPic() {
  banner.src = "./images/shopping cart.jpg";
}

function buyItem() {
  itemCount.innerText++;
}

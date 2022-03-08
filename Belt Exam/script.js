function hide(element) {
  element.remove();
}

function pressHeart() {
  itemCount.innerText++;
}

function pressHeart1() {
  itemCount1.innerText++;
}

function pressHeart2() {
  itemCount2.innerText++;
}

var searchInput;

function alertInfo(element) {
  searchInput = element.value;
}
function alertItem() {
  alert("You are searching for " + searchInput);
}

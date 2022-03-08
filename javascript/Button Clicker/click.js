
function removeDummy() {
    var elem = document.getElementById('dummy');
    elem.parentNode.removeChild(elem);
    return false;
}

function change(element) {
    element.innerText = "Logout"
}
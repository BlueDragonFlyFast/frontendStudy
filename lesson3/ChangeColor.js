function changeColor() {
    document.getElementById("pb").style.backgroundColor = "#" +
        Math.floor(Math.random() * parseInt('FFFFFF', 16)).toString(16);
}


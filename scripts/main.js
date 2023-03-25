const colourPages = function() {
    let pages = document.querySelectorAll(".page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.background = "#" + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substr(1);
    }
}

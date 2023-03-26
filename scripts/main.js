const colours = ["#84CAE7", "#4CE0D2", "#22AAA1", "#136F63", "#041B15"];

const colourPages = () => {
    let pages = document.querySelectorAll(".page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.background = colours[i % colours.length];
    }
}

window.onload = colourPages;

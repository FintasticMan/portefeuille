function colourPages() {
    let colours: string[];
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colours = ["#289ACB", "#C85475", "#17726C", "#6D2F90", "#C5B359"]
    } else {
        colours = ["#84CAE7", "#EABFCB", "#22AAA1", "#9E56C8", "#DFD5A5"];
    }
    const pages = document.querySelectorAll<HTMLElement>(".page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.backgroundColor = colours[i % colours.length];
    }
}

function clickHamburger() {
    const header = document.querySelector<HTMLElement>("#header");
    if (header === null) {
        return;
    }
    const menu = header.querySelector<HTMLElement>(".navbar");
    if (menu === null) {
        return;
    }

    menu.classList.toggle("show");

    if (header.classList.toggle("expanded")) {
        const height = menu.offsetHeight;
        header.style.height = height + "px";
    } else {
        header.style.height = "";
    }
}

function addHamburgerListener() {
    const hamburger = document.querySelector("#hamburger");

    hamburger?.addEventListener("click", clickHamburger);
}

window.addEventListener("load", colourPages);
window.addEventListener("load", addHamburgerListener);

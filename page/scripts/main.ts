function colourPages() {
    let colours: string[];
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colours = ["#289ACB", "#C85475", "#17726C", "#29274C", "#C5B359"];
    } else {
        colours = ["#84CAE7", "#EABFCB", "#22AAA1", "#514C94", "#DFD5A5"];
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
        header.style.height = height.toString() + "px";
    } else {
        header.style.height = "";
    }
}

function addHamburgerListener() {
    const hamburger = document.getElementById("hamburger");

    hamburger?.addEventListener("click", clickHamburger);
}

function calcAge(date: Date) {
    const now = Date.now();
    const diff = now - date.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.2425));
}

function updateAge() {
    const elem = document.getElementById("age");
    if (elem === null) {
        return;
    }
    elem.innerHTML = calcAge(new Date(2005, 7, 6)).toString();
}

window.addEventListener("load", colourPages);
window.addEventListener("load", addHamburgerListener);
window.addEventListener("load", updateAge);

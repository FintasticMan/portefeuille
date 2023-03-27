const colours: string[] = ["#84CAE7", "#4CE0D2", "#22AAA1"];

function colourPages(): void {
    const pages = document.querySelectorAll<HTMLElement>(".page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.backgroundColor = colours[i % colours.length];
    }
}

window.onload = colourPages;

import type { PlasmoCSConfig } from "plasmo"
import uwuifier from "uwuify";

export const config: PlasmoCSConfig = {
    matches: ["*://*/*"]
}

// https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function replaceText() {
    const images = document.querySelectorAll('img');
    let image_list = [];
    await fetch('https://api.memegen.link/templates/')
        .then(res => res.json())
        .then(json => {
            image_list = json;
        });
    images.forEach(img => {
        const newSrc = image_list[getRandomInt(image_list.length)].blank;
        img.src = newSrc;
        try {
            img.srcset = newSrc;
        }
        catch (error) {

        }
    });

    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p ,caption, span, a');
    for (let i = 0; i < text.length; i++) {
        if (text[i].innerHTML.includes("img")) {
            continue;
        }
        else if (text[i].innerHTML.includes("href")) {
            let children = text[i].childNodes;
            for (let j = 0; j < children.length; j++) {
                let node_value = children[j].nodeValue;
                if (node_value != null && !node_value.includes('http')) {
                    try {
                        const uwuify = new uwuifier()
                        console.log(uwuify.uwuify(node_value));
                        text[i].childNodes[j].nodeValue = uwuify.uwuify(node_value);
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
            continue;
        }
        let element = text[i].innerText;
        try {
            const uwuify = new uwuifier()
            console.log(uwuify.uwuify(element));
            element = `${uwuify.uwuify(element).replaceAll('bulge', ' ').replaceAll('twerk', ' ')}`;
            text[i].innerText = element;
        } catch (error) {
            console.error(error);
        }
    }
}

window.addEventListener("load", replaceText);

// window.addEventListener("load", () => {
//     document.body.style.background = "pink"
// })
// https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f

async function replaceText() {
    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td ,caption, span, a');
    // const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td ,caption');
    for (let i = 0; i < text.length; i++) {
        if (text[i].innerHTML.includes("href") || text[i].innerHTML.includes("http")) {
            continue;
        }
        let element = text[i].innerText;
        // console.log(element)
        let url = new URL("http://localhost:3000/");
        url.searchParams.append("query", element);
        try {
            let response = await fetch(url);
            let data = await response.json();
            element = `${data.result}`;
            text[i].innerText = element;
        } catch (error) {
            console.error(error);
        }
    }
}

window.addEventListener("load", replaceText);

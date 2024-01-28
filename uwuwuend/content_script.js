// https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f

async function replaceText() {
    const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td ,caption, span, a');
    // const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td ,caption');
    for (let i = 0; i < text.length; i++) {
        if (text[i].innerHTML.includes("img")) {
            continue;
        }
        else if (text[i].innerHTML.includes("href")) {
            let children = text[i].childNodes;
            for (let j = 0; j < children.length; j++) {
                let node_value = children[j].nodeValue;
                if (node_value != null && !node_value.includes('http')) {
                    // console.log(node_value);
                    let url = new URL("http://localhost:3000/");
                    url.searchParams.append("query", node_value);
                    try {
                        let response = await fetch(url);
                        let data = await response.json();
                        console.log(node_value);
                        console.log(data.result);
                        text[i].childNodes[j].nodeValue = data.result;
                    } catch (error) {
                        console.error(error);
                    }
                }
            }
            continue;
        }
        // else if (text[i].innerHTML.includes("http")) {
        //     continue;
        // }
        let element = text[i].innerText;
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

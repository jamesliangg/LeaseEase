// https://medium.com/@ConnorFinnegan/how-to-make-a-simple-text-replacement-chrome-extension-3e7aa9fa301f

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
                        // console.log(node_value);
                        // console.log(data.result);
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
    const images = document.querySelectorAll('img');
    let image_list = [];
    await fetch('https://api.memegen.link/templates/')
      .then(res => res.json())
      .then(json => {
        image_list = json;
        // console.log(image_list);

      });
    // console.log(image_list[getRandomInt(image_list.length)].blank);
    // const newSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Stylized_uwu_emoticon.svg/640px-Stylized_uwu_emoticon.svg.png';

    images.forEach(img => {
        const newSrc = image_list[getRandomInt(image_list.length)].blank;
        // console.log(img.src)
        // console.log(img)
        img.src = newSrc;
        try {
            img.srcset = newSrc;
        }
        catch (error) {

        }
    });
}

window.addEventListener("load", replaceText);

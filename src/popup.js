changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: rainbowBackgroundColor,
    });
});

function randomBackgroundColor() {
    console.log("click");
    
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function rainbowBackgroundColor() {
    console.log("click");

    var body = document.body;
    body.classList.add("rainbow-background");
    console.log(body);


    // var link = document.createElement("link");
    // link.setAttribute("rel", "stylesheet");
    // link.setAttribute("href", "src/inject.css");
    // document.head.appendChild(link);
}

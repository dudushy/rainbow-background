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

    const body = document.body;
    if (CHANGE_COLOR) {
        body.classList.remove("rainbow-background");
        CHANGE_COLOR = false;

        console.log("rainbow-background [OFF]");
    } else {
        body.classList.add("rainbow-background");
        CHANGE_COLOR = true;

        console.log("rainbow-background [ON]");
    }
    
    console.log(body);
}
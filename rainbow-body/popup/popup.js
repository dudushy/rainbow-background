toggleRainbow.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: rainbowBody,
    });
});

// function randomBackgroundColor() {
//     console.log("click");
    
//     const red = Math.floor(Math.random() * 256);
//     const green = Math.floor(Math.random() * 256);
//     const blue = Math.floor(Math.random() * 256);

//     document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
// }

function rainbowBody() {
    // console.log("click");

    const body = document.body;
    if (RAINBOW) {
        body.classList.remove("rainbow-body");
        RAINBOW = false;

        console.log("rainbow [OFF]");
    } else {
        body.classList.add("rainbow-body");
        RAINBOW = true;

        console.log("rainbow [ON]");
    }
    
    console.log(body);
}
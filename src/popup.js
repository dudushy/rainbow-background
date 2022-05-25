// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        //! function: setPageBackgroundColor,
        function: randomBackgroundColor,
    });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
        document.body.style.backgroundColor = color;
    });
}

async function randomBackgroundColor() {
    // while (true) {
    //     document.body.style.backgroundColor = color;
    //     await wait(500);
    // }
    
    // console.log("init");
    // for (let i = 0; i < 255; i++) {
    //     console.log("run loop#" + i);

    //     const red = Math.floor(Math.random() * 256);
    //     const green = Math.floor(Math.random() * 256);
    //     const blue = Math.floor(Math.random() * 256);

    //     // document.body.style.backgroundColor = "rgb(${red}, ${green}, ${blue})";
    //     document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    //     // await wait(500);
    //     console.log("end loop#" + i)
    // }

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
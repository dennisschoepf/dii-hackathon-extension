const testEl = document.createElement("div");
testEl.style["position"] = "fixed";
testEl.style["top"] = "0";
testEl.style["left"] = "0";
testEl.style["z-index"] = "1000";
testEl.style["background-color"] = "red";
document.body.appendChild(testEl);

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let key in changes) {
    const newValue = changes[key];

    if (key === "heartbeat") {
      console.log("heartbeat", newValue);
      testEl.innerHTML += `\nNew heartbeat: ${JSON.stringify(newValue)}`;
    }

    if (key === "tilt") {
      console.log("tilt", newValue);
      testEl.innerHTML += `\nNew tilt: ${JSON.stringify(newValue)}`;
    }
  }
});

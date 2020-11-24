import { setupHeartbeatElement, setupStyles, animate } from "./animation";

const started = false;
const timeElapsed = setupStyles();
setupHeartbeatElement();

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let key in changes) {
    const newValue = changes[key];

    if (key === "heartbeat") {
      const animation = animate();

      if (started) {
        animation.restart();
      }
    }
  }
});

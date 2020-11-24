import { subscribeToAllSensors } from "./api";
import dotenv from "dotenv";
import { storeValue } from "./storage";

chrome.runtime.onInstalled.addListener(() => {
  dotenv.config();

  subscribeToAllSensors({
    onHeartbeat: (heartbeatData) => storeValue("heartbeat", heartbeatData),
    onTilt: (tiltData) => storeValue("tilt", tiltData),
  });
});

import { subscribeToAllSensors } from "./api";
import dotenv from "dotenv";
import { storeValue } from "./storage";

dotenv.config();

chrome.runtime.onInstalled.addListener(() => {
  subscribeToAllSensors({
    onHeartbeat: (heartbeatData) => storeValue("heartbeat", heartbeatData),
    onTilt: (tiltData) => storeValue("tilt", tiltData),
  });
});

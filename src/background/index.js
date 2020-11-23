import { subscribeToAllSensors } from "./api";
import dotenv from "dotenv";

dotenv.config();

chrome.runtime.onInstalled.addListener(() => {
  subscribeToAllSensors({
    onHeartbeat: (heartbeatData) => console.log(heartbeatData),
    onTilt: (tiltData) => console.log(tiltData),
  });
});

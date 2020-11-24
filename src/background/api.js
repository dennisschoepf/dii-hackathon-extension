import mqtt from "mqtt";

const mqttHeartbeatTopic = `${process.env.AIO_USERNAME}/feeds/heartbeat/json`;
const mqttTiltTopic = `${process.env.AIO_USERNAME}/feeds/tilt-sensor/json`;
const mqttEdnpoint = process.env.AIO_ENDPOINT;
const mqttOptions = {
  port: Number(process.env.AIO_PORT),
  username: process.env.AIO_USERNAME,
  password: process.env.AIO_KEY,
};

const client = mqtt.connect("mqtt://io.adafruit.com", mqttOptions);

export function subscribeToAllSensors({ onHeartbeat, onTilt }) {
  console.log(process.env.AIO_USERNAME);

  client.on("connect", () => {
    client.subscribe(mqttHeartbeatTopic);
    client.subscribe(mqttTiltTopic);
  });

  client.on("error", (error) => {
    console.log("MQTT Client Errored");
    console.log(error);
  });

  client.on("message", (topic, message) => {
    if (topic === mqttHeartbeatTopic) {
      const parsedMessage = JSON.parse(message.toString());
      onHeartbeat(parsedMessage);
    }

    if (topic === mqttTiltTopic) {
      const parsedMessage = JSON.parse(message.toString());
      onTilt(parsedMessage);
    }
  });
}

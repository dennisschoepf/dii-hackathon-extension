import anime from "animejs";

export function setupStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    .heartbeat-wrapper {
      z-index: 9999;
      position: fixed;
      bottom: 120px;
      width: 100vw;
      display: flex;
      justify-content: space-between;
    }

    .heartbeat-wrapper > .el {
      height: 7px;
      width: 7px;
      border-radius: 50%;
      background-color: #E02D25;
      opacity: 0.75;
    }
  `;
  document.head.appendChild(style);
}

export function setupHeartbeatElement() {
  console.log("Start creation of heartbeat element");

  const wrapper = document.createElement("div");
  wrapper.classList.add("heartbeat-wrapper");

  for (let i = 0; i < 120; i++) {
    const el = document.createElement("div");
    el.classList.add("el");
    wrapper.appendChild(el);
  }

  document.body.appendChild(wrapper);
}

export function animate() {
  return anime({
    targets: ".heartbeat-wrapper .el",
    keyframes: [{ translateY: 15 }, { translateY: -60 }, { translateY: 0 }],
    duration: 1000,
    easing: "cubicBezier(.1,1.42,.85,.09)",
    delay: anime.stagger(100, {
      start: 500,
    }),
    loop: 3,
  });
}

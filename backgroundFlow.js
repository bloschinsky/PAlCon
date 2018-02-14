export let timerId;
export function initBgColorFlow() {

  let mainBgColor = 0;

  function backgroundFlow() {
    document.body.style.backgroundColor = `hsl(${mainBgColor}, 100%, 88%)`;
    mainBgColor += 3;
    if (mainBgColor > 360) mainBgColor = 0;
  }

  timerId = setInterval(backgroundFlow, 200);
}
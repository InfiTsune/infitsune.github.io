let light = false;

document.getElementById("turn_mode_light").onclick = (ev) => {
    console.log(light);
    light = !light;

    if (light) {
        document.getElementById("background").style.background = "#d4c0e3";
    }
};
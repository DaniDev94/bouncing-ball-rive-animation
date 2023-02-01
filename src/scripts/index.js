
function riveObject() {
    return new rive.Rive({
        src: 'src/assets/exports/ball_1.riv',
        canvas: document.getElementById("canvas"),
        autoplay: true,
    })
}

document.addEventListener("DOMContentLoaded", function (event) {
    riveObject();
});

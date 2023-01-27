import rive from "@rive-app/canvas";

new rive.Rive({
    src: "https://cdn.rive.app/animations/vehicles.riv",
    // Or the path to a local Rive asset
    // src: './example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true
});

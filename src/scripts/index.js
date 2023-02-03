
function riveObjects() {
    new rive.Rive({
        src: 'src/assets/exports/ball_0.riv',
        canvas: document.getElementById("ball-0"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })

    new rive.Rive({
        src: 'src/assets/exports/ball_1.riv',
        canvas: document.getElementById("ball-1"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })

    new rive.Rive({
        src: 'src/assets/exports/ball_2.riv',
        canvas: document.getElementById("ball-2"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })

    new rive.Rive({
        src: 'src/assets/exports/stars.riv',
        canvas: document.getElementById("stars"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })

    new rive.Rive({
        src: 'src/assets/exports/heart.riv',
        canvas: document.getElementById("heart-green"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })

    new rive.Rive({
        src: 'src/assets/exports/heart.riv',
        canvas: document.getElementById("heart-purple"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })
    
    new rive.Rive({
        src: 'src/assets/exports/heart.riv',
        canvas: document.getElementById("heart-blue"),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
    })
}

document.addEventListener("DOMContentLoaded", function (event) {
    riveObjects();
});

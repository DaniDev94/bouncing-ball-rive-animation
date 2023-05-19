function riveObjects() {
    const btnGreen = document.getElementById('btn-green');
    const btnPurple = document.getElementById('btn-purple');
    const btnBlue = document.getElementById('btn-blue');
    const popup = document.getElementById('popup');
    const $loadingContainer = document.getElementById('loading-container');
    const $allContent = document.getElementById('view');

    const loading = new rive.Rive({
        src: 'exports/loading.riv',
        canvas: document.getElementById('loading'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover' }),
        onLoad: () => {
            loading.play();
            loading.resizeDrawingSurfaceToCanvas();
            setTimeout(() => {
                $allContent.classList.remove("opacity-0");
                $loadingContainer.className = "disabled";
                loading.pause();
            }, 1800);

        },
    });

    const ball0Rive = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/ball_0.riv',
        canvas: document.getElementById('ball-0-green'),
        autoplay: true,
        animations: 'Squash-Stretch',
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
        onLoad: () => {
            btnGreen.onclick = () => {
                if (ball0Rive.playingAnimationNames.includes('Squash-Stretch')) {
                    ball0Rive.stop('Squash-Stretch')
                    ball0Rive.play('Final')
                } else if (ball0Rive.playingAnimationNames.includes('Final')) {
                    ball0Rive.stop('Final')
                    ball0Rive.play('Ease In Ease Out')
                } else if (ball0Rive.playingAnimationNames.includes('Ease In Ease Out')) {
                    ball0Rive.stop('Ease In Ease Out')
                    ball0Rive.play('Linear')
                } else {
                    ball0Rive.stop('Linear')
                    ball0Rive.play('Squash-Stretch')
                }
            }
        }
    })


    const ball1Rive = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/ball_1.riv',
        canvas: document.getElementById('ball-1-purple'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
        onLoad: () => {
            btnPurple.onclick = () => {
                if (ball1Rive.playingAnimationNames.includes('Squash - Strech')) {
                    ball1Rive.stop('Squash - Strech')
                    ball1Rive.play('Ease in -  Ease out')
                } else if (ball1Rive.playingAnimationNames.includes('Ease in -  Ease out')) {
                    ball1Rive.stop('Ease in -  Ease out')
                    ball1Rive.play('linear ')
                } else {
                    ball1Rive.stop('linear ')
                    ball1Rive.play('Squash - Strech')
                }
            }
        }
    })

    const ball2Rive = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/ball_2.riv',
        canvas: document.getElementById('ball-2-blue'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
        onLoad: () => {
            btnBlue.onclick = () => {
                ball2Rive.isPlaying ? ball2Rive.pause('Linear') : ball2Rive.play('Linear');
                // [Created property (isActive)]: ball2Rive.isActive === true ? ball2Rive.pause('Linear') : ball2Rive.play('Linear');
            }
        },
        onPlay: () => {
            ball2Rive.isActive = true;
        },
        onPause: () => {
            ball2Rive.isActive = false;
        }
    })

    const stars = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/stars.riv',
        canvas: document.getElementById('stars'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover' }),
        stateMachines: 'State Machine 1',
        onStateChange: (event) => {
            if (event.data.includes('5_stars')) {
                popup.className += ' show-popup-container';
                setTimeout(() => { stars.pause() }, 500);
                setTimeout(() => {
                    popup.className += ' close-popup-container';
                }, 4000);
            }
        }
    })

    const nutGreen = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/nut.riv',
        canvas: document.getElementById('nut-green'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
        onLoad: () => {
            btnGreen.onmouseenter = () => {
                nutGreen.play('hover');
            }
            btnGreen.onmouseleave = () => {
                nutGreen.pause('hover');
                nutGreen.play('idle');
            }
        }
    })

    const nutPurple = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/nut.riv',
        canvas: document.getElementById('nut-purple'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
        onLoad: () => {
            btnPurple.onmouseenter = () => {
                nutPurple.play('hover');
            }
            btnPurple.onmouseleave = () => {
                nutPurple.pause('hover');
                nutPurple.play('idle');
            }
        }
    })

    const nutBlue = new rive.Rive({
        src: 'src/basic_concepts/assets/exports/nut.riv',
        canvas: document.getElementById('nut-blue'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover', alignment: 'center' }),
        onLoad: () => {
            btnBlue.onmouseenter = () => {
                nutBlue.play('hover');
            }
            btnBlue.onmouseleave = () => {
                nutBlue.pause('hover');
                nutBlue.play('idle');
            }
        }
    })
}


function init() {
    riveObjects();
}

document.addEventListener('DOMContentLoaded', function (event) {
    init();
});

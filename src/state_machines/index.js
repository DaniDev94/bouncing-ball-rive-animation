function riveObjects() {
    const $loadingContainer = document.getElementById('loading-container');
    const $allContent = document.getElementById('view');
    const $btnArrowBack = document.getElementById('arrow-back');
    const $btnYellow = document.getElementById('btn-yellow');
    const $btnViolet = document.getElementById('btn-violet');
    const $btnLeft = document.getElementById('ball-button-left');
    const $btnRight = document.getElementById('ball-button-right');

    const loading = new rive.Rive({
        src: 'exports/loading.riv',
        canvas: document.getElementById('loading'),
        autoplay: true,
        layout: new rive.Layout({ fit: 'cover' }),
        onLoad: () => {
            loading.resizeDrawingSurfaceToCanvas();
            loading.play();
            setTimeout(() => {
                $allContent.classList.remove("opacity-0");
                $loadingContainer.className = "disabled";
                loading.pause();
            }, 1800);

        },
    });

    const arrowBack = new rive.Rive({
        src: 'exports/arrow-back.riv',
        canvas: $btnArrowBack,
        autoplay: true,
        stateMachines: 'Morph',
        layout: new rive.Layout({ fit: rive.Fit.Fill }),
        onLoad: () => {
            arrowBack.resizeDrawingSurfaceToCanvas();
            const inputs = arrowBack.stateMachineInputs('Morph');
            const toArrowTrigger = inputs.find(input => input.name === 'ToArrow');
            const toMenuTrigger = inputs.find(input => input.name === 'ToMenu');
            $btnArrowBack.onmouseenter = () => toArrowTrigger.fire();
            $btnArrowBack.onmouseout = () => toMenuTrigger.fire();
        },
        onStateChange: (event) => {
            if (event.data[0].includes('AsArrow')) {
                $btnArrowBack.classList.remove('idle');
                $btnArrowBack.classList.add('active');
                if ($btnArrowBack.classList.value == 'active') {
                    $btnArrowBack.addEventListener('click', function (event) {
                        event.preventDefault();
                        window.location.assign(location.origin + '/');
                    })
                }
            } else if (event.data[0].includes('ToMenu')) {
                $btnArrowBack.classList.remove('active');
                $btnArrowBack.classList.add('idle');
            }
        }
    });

    const emoji = new rive.Rive({
        src: 'src/state_machines/assets/exports/emoji.riv',
        canvas: document.getElementById('emoji'),
        autoplay: true,
        stateMachines: 'BasicosStateMachine',
        layout: new rive.Layout({ fit: rive.Fit.Fill }),
        onLoad: () => {
            emoji.resizeDrawingSurfaceToCanvas();
            const inputs = emoji.stateMachineInputs('BasicosStateMachine');
            const indifferentTrigger = inputs.find(i => i.name === 'triggerIndiferente');
            const colorBoolean = inputs.find(i => i.name === 'isAmarillo');
            colorBoolean.count = 0;
            $btnYellow.onclick = () => {
                $btnViolet.classList.remove('disabled-button-violet');
                colorBoolean.value = true;
                colorBoolean.count++;
                if (colorBoolean.count > 1) {
                    indifferentTrigger.fire();
                    $btnYellow.classList.add('disabled-button-yellow');
                    colorBoolean.count = 0;
                }
            }
            $btnViolet.onclick = () => {
                $btnYellow.classList.remove('disabled-button-yellow');
                colorBoolean.value = false;
                colorBoolean.count++;
                if (colorBoolean.count > 1) {
                    indifferentTrigger.fire(),
                        $btnViolet.classList.add('disabled-button-violet');
                    colorBoolean.count = 0;
                }
            }
        }
    });

    const ball = new rive.Rive({
        src: 'src/state_machines/assets/exports/ball-state-machine.riv',
        canvas: document.getElementById('ball'),
        autoplay: true,
        layout: new rive.Layout({ fit: rive.Fit.Fill }),
        stateMachines: 'StateMachine',
        onLoad: () => {
            ball.resizeDrawingSurfaceToCanvas();
        },
    });

    const ballButtonLeft = new rive.Rive({
        src: 'src/state_machines/assets/exports/btn-ball.riv',
        canvas: document.getElementById('btn-left'),
        autoplay: false,
        layout: new rive.Layout({ fit: rive.Fit.Fill }),
        animations: 'Normal',
        onLoad: () => {
            const inputs = ball.stateMachineInputs('StateMachine');
            const nivelNumber = inputs.find(i => { return i.name === 'Nivel' });
            if (nivelNumber.value === 0) { $btnLeft.classList.add('disalble-btn'); }
            $btnLeft.classList.add('animate__animated', 'animate__pulse');
            ballButtonLeft.resizeDrawingSurfaceToCanvas();
            $btnLeft.onmouseenter = () => {
                $btnLeft.classList.remove('animate__animated', 'animate__pulse');
                ballButtonLeft.pause('Normal');
                ballButtonLeft.play('Hover');
            };
            $btnLeft.onmouseout = () => {
                $btnLeft.classList.add('animate__animated', 'animate__pulse');
                ballButtonLeft.stop('Hover');
                ballButtonLeft.play('Normal');
            };
            $btnLeft.onclick = () => {
                ballButtonLeft.pause('Hover');
                ballButtonLeft.play('Pulsado');
                // Ball animation controller ------------------>
                nivelNumber.value--;
                if (nivelNumber.value === 0) {
                    $btnLeft.classList.remove('enable-btn');
                    $btnLeft.classList.add('disalble-btn');
                    $btnRight.classList.remove('disalble-btn');
                    $btnRight.classList.add('enable-btn');
                }
                if (nivelNumber.value < 3) {
                    $btnRight.classList.remove('disalble-btn');
                    $btnRight.classList.add('enable-btn');
                }
            }
        },
        onPlay: (e) => {
            if (e.data[0] === 'Pulsado') {
                setTimeout(() => {
                    ballButtonLeft.pause('Pulsado');
                }, 200);
            }
        },
        onPause: (e) => {
            if (e.data.includes('Pulsado')) {
                ballButtonLeft.play('Hover');
            }
        }
    });

    const ballButtonRight = new rive.Rive({
        src: 'src/state_machines/assets/exports/btn-ball.riv',
        canvas: document.getElementById('btn-right'),
        autoplay: false,
        layout: new rive.Layout({ fit: rive.Fit.Fill }),
        animations: 'Normal',
        onLoad: () => {
            const inputs = ball.stateMachineInputs('StateMachine');
            const nivelNumber = inputs.find(i => { return i.name === 'Nivel' });
            $btnRight.classList.add('animate__animated', 'animate__pulse');
            ballButtonRight.resizeDrawingSurfaceToCanvas();
            $btnRight.onmouseenter = () => {
                $btnRight.classList.remove('animate__animated', 'animate__pulse');
                ballButtonRight.pause('Normal');
                ballButtonRight.play('Hover');
            };
            $btnRight.onmouseout = () => {
                $btnRight.classList.add('animate__animated', 'animate__pulse');
                ballButtonRight.stop('Hover');
                ballButtonRight.play('Normal');
            };
            $btnRight.onclick = () => {
                ballButtonRight.pause('Hover');
                ballButtonRight.play('Pulsado');
                // Ball animation controller ------------------>
                nivelNumber.value++;
                if (nivelNumber.value > 0) {
                    $btnLeft.classList.remove('disalble-btn');
                    $btnLeft.classList.add('enable-btn')
                }
                if (nivelNumber.value === 3) {
                    $btnRight.classList.remove('enable-btn');
                    $btnRight.classList.add('disalble-btn');
                    $btnLeft.classList.remove('disalble-btn');
                    $btnLeft.classList.add('enable-btn');
                }
            }
        },
        onPlay: (e) => {
            if (e.data[0] === 'Pulsado') {
                setTimeout(() => {
                    ballButtonRight.pause('Pulsado');
                }, 200);
            }
        },
        onPause: (e) => {
            if (e.data.includes('Pulsado')) {
                ballButtonRight.play('Hover');
            }
        }
    });
}


function init() {
    riveObjects();
}

document.addEventListener('DOMContentLoaded', function (event) {
    init();
});

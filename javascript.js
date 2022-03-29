// 𝘀𝘁𝗮𝗿𝘁 𝗼𝗳 𝘀𝘄𝗶𝗽𝗲𝗿.𝗷𝘀

new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    effect: 'fade',
    slidesPerView: 1,
    autoplay: true,
    autoplay: { disableOnInteraction: false },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

// 𝗲𝗻𝗱 𝗼𝗳 𝘀𝘄𝗶𝗽𝗲𝗿.𝗷𝘀

//

// 𝘀𝘁𝗮𝗿𝘁 𝗼𝗳 𝗽𝗼𝗽𝗺𝗼𝘁𝗶𝗼𝗻-𝗽𝘂𝗿𝗲.𝗷𝘀

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('.avatar');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(ballXY);
    });

// 𝗲𝗻𝗱 𝗼𝗳 𝗽𝗼𝗽𝗺𝗼𝘁𝗶𝗼𝗻-𝗽𝘂𝗿𝗲.𝗷𝘀
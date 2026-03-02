const petals = document.querySelectorAll('.petal');
let angle = 0;

function animateRose() {
    petals.forEach((petal, index) => {
        const petalAngle = 60 * index;
        petal.style.transform = `rotate(${petalAngle + angle}deg) translateX(50px)`;
    });
    angle += 0.5;
    requestAnimationFrame(animateRose);
}

animateRose();

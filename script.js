document.addEventListener("DOMContentLoaded", animation);

function animation(){
    gsap.to('#options',{
            duration: 1,
            opacity: 1,
            delay: 0.5,
            stagger: 0.2, // stagger in from the left with a 0.2 second gap in between animations
            y: -10,
            ease: "sine.out"
    });
}
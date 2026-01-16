document.addEventListener("DOMContentLoaded", animation);

function animation(){
    gsap.from(".card", {
    opacity: 0,
    y: 40,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".bg-projects",
        start: "top 70%"
    }
    });
}

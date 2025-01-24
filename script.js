function breakText() {
    const h1 = document.querySelector(".container h1")
    const text = h1.textContent;

    let splittedText = text.split("");

    var clutter = "";
    var halfVal = Math.floor(splittedText.length / 2);

    splittedText.forEach((e, index) => {
        if (index < halfVal) {
            clutter += `<span class="firstHalf">${e}</span>`;

        } else {
            clutter += `<span class="SecondHalf">${e}</span>`;

        }
    })
    h1.innerHTML = clutter;
}

breakText();

gsap.from(".firstHalf", {
    rotation: 360, 
    y: -100, 
    duration: 1.2, 
    delay: 0.3,
    opacity: 0,
    stagger: 0.1, 
    ease: "back.out(1.7)", 
});

gsap.from(".SecondHalf", {
    y: 300, 
    duration: 1.2,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,
    ease: "bounce.out", 
});

// Animation for the paragraph
gsap.from(".container p", {
    x: 200, 
    opacity: 0,
    duration: 1.5,
    delay: 2,
    ease: "power3.out", 
});

// Animation for the button
gsap.from("#nextPageButton", {
    scale: 1, 
    opacity: 0,
    duration: 1,
    delay: 3,
    ease: "elastic.out(1, 0.5)", 
});

gsap.from(".section",{
    opacity:0,
    duration:2,
    delay:1,  // scale:0,
  })
  

  
  gsap.from(".header", {
    opacity: 0,
    duration: 2,
    delay: 0.5, // scale:0,
  });
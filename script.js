
// scripts.js
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

function positionSlides() {
    slides.forEach((slide, index) => {
        const diff = (index - currentIndex + totalSlides) % totalSlides;
        let x, scale, zIndex, opacity;

        if (diff === 0) {
            x = 0;
            scale = 1.5;
            zIndex = 10;
            opacity = 1;
        } else if (diff === 1 || diff === totalSlides - 1) {
            x = diff === 1 ? 150 : -150;
            scale = 1;
            zIndex = 5;
            opacity = 1;
        } else {
            x = 0;
            scale = 1;
            zIndex = 1;
            opacity = 0;
        }

        if (window.innerWidth <= 1000) {
            x = diff === 1 ? 100 : (diff === totalSlides - 1 ? -100 : 0);
            scale = diff === 0 ? 1.3 : (diff === 1 || diff === totalSlides - 1 ? 0.8 : 1);
        }

        if (window.innerWidth <= 400) {
            x = diff === 1 ? 75 : (diff === totalSlides - 1 ? -75 : 0);
            scale = diff === 0 ? 1.2 : (diff === 1 || diff === totalSlides - 1 ? 0.7 : 1);
        }

        slide.style.transform = `translate(-50%, -50%) translateX(${x}px) scale(${scale})`;
        slide.style.zIndex = zIndex;
        slide.style.opacity = opacity;
    });
}

function rotateSlider() {
    currentIndex = (currentIndex + 1) % totalSlides;
    positionSlides();
}

positionSlides();
setInterval(rotateSlider, 3000);
 
window.addEventListener('resize', positionSlides);

document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById('typing-paragraph');
    const text = `Our educational initiative for nomadic children ensures that their learning is continuous and uninterrupted, regardless of their mobility. The process begins with children enrolling in any government school from grades 1 to 8. If the family moves, the child can approach a new school, which will have access to their previous progress report. This system ensures that the child’s education continues seamlessly from where they left off.

We implement a unique "5-out-of-3 Assessment" concept. Throughout the academic year, five exams are scheduled. Children are required to attend at least three of these exams. Passing these three exams is necessary for the child’s class to be updated, ensuring they progress to the next grade level based on their demonstrated knowledge and skills.

This flexible and continuous assessment approach accommodates the nomadic lifestyle, allowing children to maintain their educational journey despite frequent relocations. It not only supports academic consistency but also ensures that children are regularly evaluated and can keep up with their peers, fostering a stable and encouraging learning environment.`;

    let index = 0;
    let hasTyped = false;

    const typeText = () => {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 5); // Adjust typing speed here
        }
    };

    document.querySelector('.cnspt2').addEventListener('mouseenter', function() {
        if (!hasTyped) {
            typeText();
            hasTyped = true;
        }
    });
});

$(".hamburger").on("click", function(){
    $(this).toggleClass("active");
    $(".nav-links").toggleClass("nav-active");
  })



// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Function to close the hamburger menu
function closeMenu() {
    document.getElementById('menu').checked = false; // Uncheck the menu checkbox to close the menu
}

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});


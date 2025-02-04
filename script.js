document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
        } else {
            alert("Message sent successfully!");
            this.reset();
        }
    });

    // Skills section animation on scroll
    const skillsSection = document.getElementById("skills");
    const skills = document.querySelectorAll(".skill");

    function checkSkillsVisibility() {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            skills.forEach(skill => {
                skill.style.opacity = "1";
                skill.style.transform = "translateY(0)";
            });
        }
    }

    window.addEventListener("scroll", checkSkillsVisibility);
    checkSkillsVisibility();
});

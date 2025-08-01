document.addEventListener("DOMContentLoaded", () => {
    const titleText = "Hi! I'm Nithish";
    const descText = "A Software Developer specializing in modern web technology.";

    const titleEl = document.getElementById("type-title");
    const descEl = document.getElementById("type-desc");

    let i = 0;

    function typeTitle() {
        if (i < titleText.length) {
            titleEl.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 100);
        } else {
            titleEl.classList.add("hide-cursor"); // hide cursor after typing title
            titleEl.classList.add("slide-up"); // move up
            setTimeout(typeDesc, 500); // start description typing
        }
    }

    let j = 0;
    function typeDesc() {
        descEl.style.opacity = 1;
        descEl.classList.add("typing"); // make cursor blink without affecting height
        if (j < descText.length) {
            descEl.textContent += descText.charAt(j);
            j++;
            setTimeout(typeDesc, 60);
        }
    }

    typeTitle();
});

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const description = this.closest('.project-info').querySelector('.project-description');

        description.classList.toggle('expanded');

        if (description.classList.contains('expanded')) {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".skill-card .card-title").forEach(title => {
        const text = title.textContent.trim();
        // Check if it's a single word AND longer than 8 characters
        if (!text.includes(" ") && text.length > 8) {
            title.classList.add("long-title");
        }
    });
});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
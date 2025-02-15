document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
    const projects = [
        {   
            title: "Snake Game",
            description: "Classic Snake game built with Python and Pygame. The player controls a snake that moves around the screen, eats food to grow, and avoids crashing into itself.",
            tech: "Python, Pygame",
            github: "https://github.com/l0tkaa/Snake_Game",
            demo: "assets/images/start_screen.png"  // Store only the image path
        },
        {
            title: "AI Stock Predictor",
            description: "A machine learning model that predicts stock prices based on historical data.",
            tech: "Python, TensorFlow, Flask",
            github: "https://github.com/yourusername/ai-stock-predictor",
            demo: "#" // No image, just a link
        },
        {
            title: "Expense Tracker",
            description: "A web app that helps users track their daily expenses and visualize spending patterns.",
            tech: "React, Node.js, MongoDB",
            github: "https://github.com/yourusername/expense-tracker",
            demo: "#"  // No image, just a link
        }
    ];

    const demoContainer = document.getElementById("demo-container");
    demoContainer.innerHTML = ""; // Clear previous content

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        // Check if demo is an image or just a link
        let demoContent = project.demo === "#"
            ? `<a href="${project.github}" target="_blank">Live Demo</a>`  
            : `<img src="${project.demo}" width="300" alt="${project.title}">`;

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Tech:</strong> ${project.tech}</p>
            <a href="${project.github}" target="_blank">Project Code</a><br> |
            ${demoContent}
        `;

        demoContainer.appendChild(projectCard);
    });
}
